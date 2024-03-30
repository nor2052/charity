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
        Schema::create('_p__d', function (Blueprint $table) {
            $table->id('p_d_ID');
            $table->unsignedBigInteger('premission_ID');
            $table->foreignId('premission_ID')->references('premission_ID')->on('premission')->cascadeOnDelete()->cascadeOnUpdate();
            $table->unsignedBigInteger('role_ID');
            $table->foreignId('role_ID')->references('role_ID')->on('role')->cascadeOnDelete()->cascadeOnUpdate();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('_p__d');
    }
};
