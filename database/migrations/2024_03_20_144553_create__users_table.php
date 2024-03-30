<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Validation\Rules\Unique;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('_users', function (Blueprint $table) {
            $table->id('user_ID');
            $table->unsignedBigInteger('center_ID');
            $table->foreign('center_ID')->references('center_ID')->on('center')->cascadeOnDelete()->cascadeOnUpdate();
            $table->string('username')->unique();
            $table->string('email')->unique()->nullable(); // Optional, if you decide to use email for login
            $table->string('password');
            $table->string('phone')->unique();
            $table->enum('user_type',['doner','benefiter','employee']);
            $table->string('name',50);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('_users');
    }
};
