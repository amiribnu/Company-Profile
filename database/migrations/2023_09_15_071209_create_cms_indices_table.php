<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('cms_indices', function (Blueprint $table) {
            $table->id();
            $table->enum('card_name', ['Technology', 'Partnership', 'Certificate']);
            $table->string('name');
            $table->string('publisher_name')->nullable();
            $table->text('short_description');
            $table->string('image');
            $table->string('url')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('cms_indices');
    }
};
