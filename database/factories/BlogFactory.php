<?php

namespace Database\Factories;

use App\Models\Blog;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Blog>
 */
class BlogFactory extends Factory
{
    protected $model = Blog::class;
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'title' => $this->faker->sentence,
            'short_desc' => $this->faker->paragraph,
            'category_id' => rand(1, 5),
            'tags' => $this->faker->words(3, true),
            'body' => $this->faker->paragraphs(3, true),
            'image' => $this->faker->image('public/storage/images', 640, 480, null, false),
        ];
    }
}
