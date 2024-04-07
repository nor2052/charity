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
        Schema::create('project', function (Blueprint $table) {
            $table->id();   
            $table->string('name',50);   
            $table->binary('tag');   
            $table->binary('pic');   
            $table->string('class',50);   
            $table->text('title');   
            $table->integer('visit',11);   
            $table->binary('image');   
            $table->integer('target',11); 
            $table->boolean('check_finished');
            $table->timestamps();  
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('project');
    }
};
