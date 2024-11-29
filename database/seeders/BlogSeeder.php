<?php

namespace Database\Seeders;

use App\Models\Blog;
use App\Models\Tag;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Faker\Factory as Faker;
use Mmo\Faker\PicsumProvider;
use Spatie\Image\Image;

class BlogSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('categories')->insert([
            [
                'category' => 'Programming',
                'slug' => 'test-slug',
            ],
            [
                'category' => 'Blog',
                'slug' => 'test-slug',
            ],
            [
                'category' => 'Tutorial',
                'slug' => 'test-slug',
            ],
        ]);

        DB::table('blogs')->insert([
            [
                'title' => 'Apa itu Laravel?',
                'slug' => 'apa-itu-laravel',
                'user_id' => '1',
                'category_id' => '1',
                'short_desc' => "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                'body' => "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                'image' => null,
                'created_at' => now(),
            ],
        ]);

        $faker = Faker::create();
        $faker->addProvider(new PicsumProvider($faker));
        // $imagePath = $faker->image(storage_path('app/public/images'), 640, 480, null, false);

        $imagePath = 'blog/assets/' . basename($faker->picsum(storage_path('app/public/blog/assets'), 640, 480, null, false));


        for ($i = 0; $i < 35; $i++) {
            Blog::create([
                'title' => $faker->sentence,
                'slug' => $faker->slug,
                'user_id' => 1,
                'category_id' => rand(1, 3),
                'short_desc' => $faker->paragraph,
                'body' => $faker->paragraphs(10, true),
                'image' => $imagePath,
                'image_thumbnail' => $imagePath,
                'created_at' => now(),
            ]);
        }

        Blog::get()->each(function ($post) {
            $post->tags()->attach(
                Tag::get()->random(rand(1, 7))->pluck('id')
            );
        });
    }
}
