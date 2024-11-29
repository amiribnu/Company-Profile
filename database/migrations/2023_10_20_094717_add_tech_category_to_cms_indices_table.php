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
        Schema::table('cms_indices', function (Blueprint $table) {
            $table->enum('tech_category', ['Cybersecurity', 'Cloud Services', 'Training Authorized', 'IT Enterprise'])->after('card_name')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('cms_indices', function (Blueprint $table) {
            $table->dropColumn('tech_category');
        });
    }
};
