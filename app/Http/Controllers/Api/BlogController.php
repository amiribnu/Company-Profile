<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Blog;
use App\Http\Resources\BlogResource;
use Illuminate\Database\QueryException;
use Illuminate\Http\Response;

class BlogController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        try {
            $posts = Blog::latest();
            $limit = $request->get('limit');

            if ($request->input('category_id') !== null) {
                $posts->where('category_id', $request->get('category_id'));
            }

            if ($limit) {
                $posts = $posts->paginate($limit);
            } else {
                $limit = 5;
                $posts = $posts->paginate($limit);
            };

            $result = BlogResource::collection($posts);

            return response()->json([
                'data' => $result,
                'total_data' => $posts->total(),
            ]);
        } catch (QueryException $e) {
            $error = [
                'error' => $e->getMessage()
            ];
            return response()->json($error, Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $slug)
    {
        try {

            $posts = Blog::where('slug', $slug)->first();
            $result = new BlogResource($posts);
            return response()->json([
                'status' => true,
                'message' => 'Data Artikel Ditemukan',
                'data' => $result,
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'error' => 'Data Artikel Tidak Ditemukan!'
            ], Response::HTTP_FORBIDDEN);
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
