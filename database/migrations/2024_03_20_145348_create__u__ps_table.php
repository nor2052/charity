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
        Schema::create('_u__p', function (Blueprint $table) {
            $table->id('u_p_ID');
            $table->unsignedBigInteger('user_ID');
            $table->foreign('user_ID')->references('user_ID')->on('users')->cascadeOnDelete()->cascadeOnUpdate();
            $table->unsignedBigInteger('projects_ID');
            $table->foreign('projects_ID')->references('projects_ID')->on('projects')->cascadeOnDelete()->cascadeOnUpdate();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('_u__p');
    }
};
