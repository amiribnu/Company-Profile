<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CreateBlogRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function messages()
    {
        return [
            'title.required' => 'The Title field is required.',
            'title.max' => 'The title field must not be greater than 70 characters.',
            'short_desc.required' => 'The Short Description field is required.',
            'category_id.required' => 'The Category field is required.',
            'tags.required' => 'The Tags field is required.',
            'body.required' => 'The Body field is required.',
            'image.required' => 'The Image field is required.',
            'image.image' => 'The file must be an image.',
            'image.dimensions' => 'The image dimensions must be between 1600x900 and 5120x2880 and the aspect ratio must be 16:9.',
            'image.max' => 'The image size must not exceed 3.5 MB.',
        ];
    }

    public function rules(): array
    {
        return [
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
        ];
    }
}
