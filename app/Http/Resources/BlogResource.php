<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class BlogResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'author' => ['id' => $this->author->id, 'author_name' => $this->author->name, 'email' => $this->author->email, 'photo' => $this->author->photo],
            'title' => $this->title,
            'slug' => $this->slug,
            'image' => $this->image,
            'image_thumbnail' => $this->image_thumbnail,
            'short_desc' => $this->short_desc,
            'body' => $this->body,
            'categories' => ['id' => $this->category->id, 'category_name' => $this->category->category, 'slug' => $this->category->slug],
            'tags' => $this->tags->map(function ($tag) {
                return [
                    'id' => $tag->id,
                    'tag_name' => $tag->name,
                    'slug' => $tag->slug,
                ];
            }),
            'created_at' => date('F j, Y', strtotime($this->created_at)),
        ];
    }
}
