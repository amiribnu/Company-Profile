<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateBlogRequest;
use App\Http\Requests\EditBlogRequest;
use App\Http\Resources\BlogResource;
use App\Models\Blog;
use App\Models\Category;
use App\Models\Tag;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Spatie\Image\Image;

class BlogController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $posts = Blog::latest()->with('category')->paginate(10)->onEachSide(2);
        $posts->appends([
            'key' => 'value',
        ]);
        return Inertia::render('Dashboard/Blog/Index', [
            'posts' => JsonResource::collection($posts),
        ]);
    }

    public function CategoriesTagsIndex()
    {
        $categories = Category::latest()->paginate(5, ["*"], 'categories')->onEachSide(0);
        $categories->appends([
            'key' => 'value',
        ]);

        $tags = Tag::latest()->paginate(5, ["*"], 'tags')->onEachSide(0);
        $tags->appends([
            'key' => 'value',
        ]);

        return Inertia::render('Dashboard/Blog/Categories', [
            'categories' => JsonResource::collection($categories),
            'tags' => JsonResource::collection($tags),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $categories = Category::get()->all();
        $tags = Tag::get()->all();
        return Inertia::render('Dashboard/Blog/Create', [
            'categories' => $categories,
            'tags' => $tags,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(CreateBlogRequest $request)
    {
        // dd($request->all());
        try {
            $request->validate([
                'title' => ['required', 'max:70'],
                'short_desc' => ['required'],
                'category_id' => ['required', 'exists:categories,id'],
                'tags' => ['required'],
                'body' => ['required'],
                'image' => [
                    'required',
                    'image',
                    'mimes:jpg,png,jpeg,svg',
                    'dimensions:min_width=1600,min_height=900,max_width=5120,max_height=2880',
                    'max:3500'
                ],
            ]);

            $slug = Str::slug($request->input('title'));
            $user_id = auth()->user()->id;

            $imagePath = null;
            $imagethumbnail = null;

            if ($request->hasFile('image')) {
                $originalImage = $request->file('image');
                $imageName = 'thumbnail_' . $originalImage->getClientOriginalName();
                $imagethumbnail = $originalImage->storeAs('blog/assets/post_thumbnail', $imageName, 'public');
                Image::load(public_path('storage/' . $imagethumbnail))
                    ->width(420)
                    ->height(254)
                    ->save();
                $imagePath = $originalImage->store('blog/assets', 'public');
            }

            $blog = Blog::create([
                'title' => $request->input('title'),
                'category_id' => $request->input('category_id'),
                'short_desc' => $request->input('short_desc'),
                'body' => $request->input('body'),
                'image' => $imagePath,
                'image_thumbnail' => $imagethumbnail,
                'slug' => $slug,
                'user_id' => $user_id,
            ]);
            $tags = explode(',', $request->input('tags'));

            foreach ($tags as $tag) {
                $slugTag = Str::slug(trim($tag));
                $tagModel = Tag::firstOrCreate(['name' => $tag], ['slug' => $slugTag]);

                // Hubungkan tag dengan blog yang sesuai menggunakan attach dengan relasi manyToMany dari blog dengan tag
                $blog->tags()->attach($tagModel->id);
            }

            return to_route('dashboard.blog.index');
        } catch (\Exception) {
            return to_route('dashboard.blog.index');
        }
    }

    // store category or tags
    public function storeCategoryOrTags(Request $request)
    {
        try {
            if (!$request->input('tag')) {
                $slug = Str::slug($request->input('category'));

                Category::create([
                    'category' => $request->input('category'),
                    'slug' => $slug,
                ]);
            } else {
                $slug = Str::slug($request->input('tag'));

                Tag::create([
                    'name' => $request->input('tag'),
                    'slug' => $slug,
                ]);
            }
            return redirect()->back();
        } catch (\Exception) {
            return redirect()->back();
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $slug)
    {
        $posts = Blog::where('slug', $slug)->first();
        $result = new BlogResource($posts);
        return Inertia::render('Main/Blog/BlogDetail', [
            'posts' => $result,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Blog $blog)
    {
        $blogWithCategory = $blog->load('category', 'tags');
        $categories = Category::all();
        $tags = Tag::get()->all();

        return Inertia::render('Dashboard/Blog/Edit', [
            'posts' => $blogWithCategory,
            'categories' => $categories,
            'tags' => $tags,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(EditBlogRequest $request, Blog $blog)
    {
        try {
            if ($request->hasFile('image')) {
                // Hapus gambar lama jika ada dan simpan yang baru
                if (!empty($blog->image) && Storage::disk('public')->exists($blog->image)) {
                    Storage::disk('public')->delete($blog->image);
                }
                $imagePath = $request->file('image')->store('blog/assets', 'public');
            } else {
                // Jika tidak ada gambar baru, biarkan imagePath tetap sama
                $imagePath = $blog->image;
            }

            $blog->title = $request->input('title');
            $blog->slug = Str::slug($request->input('title'));
            $blog->category_id = $request->input('category_id');
            $blog->short_desc = $request->input('short_desc');
            $blog->body = $request->input('body');
            $blog->image = $imagePath;
            $blog->save();

            $tags = explode(',', $request->input('tags'));
            $blog->tags()->detach(); // hapus tags yang berhubungan dengan post

            foreach ($tags as $tag) {
                $slugTag = Str::slug(trim($tag));
                $tagModel = Tag::firstOrCreate(['name' => $tag], ['slug' => $slugTag]);
                $blog->tags()->attach($tagModel->id);
            }

            return redirect()->route('dashboard.blog.index');
        } catch (\Exception $e) {
            return redirect()->route('dashboard.blog.index');
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Blog $blog)
    {
        // dd($blog);
        $imagePath = $blog->image;
        if (!empty($imagePath) && Storage::disk('public')->exists($imagePath)) {
            Storage::disk('public')->delete($imagePath);
        } else {
            $imagePath = '';
        }

        $blog->delete();

        return redirect()->route('dashboard.blog.index');
    }

    public function destroyCategoryOrTag($type, $id)
    {
        if ($type === 'tag') {
            $tag = Tag::findOrFail($id);
            $tag->delete();
        } elseif ($type === 'category') {
            $category = Category::findOrFail($id);
            $category->delete();
        }

        return redirect()->route('CategoriesOrTags.index');
    }
}
