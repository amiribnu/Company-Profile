<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class WebSettingRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    public function messages()
    {
        return [
            'name.required' => 'The Certificate/Partnership/Technology Name field is required.',
            'short_description.required' => 'The Short Description field is required.',
            'url.required' => 'The Url field is required.',
            'image.required' => 'The Image field is required.',
            'image.image' => 'The file must be an image.',
        ];
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'name' => ['required'],
            'short_description' => ['required'],
            'url' => ['nullable', 'url'],
            'image' => ['required', 'image'],
        ];
    }
}
