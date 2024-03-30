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
        Schema::create('_donation', function (Blueprint $table) {
            $table->id('donation_ID');
            $table->unsignedBigInteger('project_ID');
            $table->foreign('project_ID')->references('project_ID')->on('project')->cascadeOnDelete()->cascadeOnUpdate();
            $table->integer('amount');
            // $table->boolean('check_on');
            $table->unsignedBigInteger('operation_ID');
            $table->foreign('operation_ID')->references('operation_ID')->on('operation')->cascadeOnDelete()->cascadeOnUpdate();
            $table->timestamps('date');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('_donation');
    }
};
