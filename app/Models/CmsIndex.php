<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CmsIndex extends Model
{
    use HasFactory;

    protected $fillable = [
        'card_name',
        'tech_category',
        'name',
        'publisher_name',
        'short_description',
        'image',
        'url',
    ];
}
