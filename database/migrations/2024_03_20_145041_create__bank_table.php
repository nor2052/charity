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
        Schema::create('_bank', function (Blueprint $table) {
            $table->id('bank_ID');
            $table->string('name');
            $table->unsignedBigInteger('donation_ID');
            $table->foreign('donation_ID')->references('donation_ID')->on('donation')->cascadeOnDelete()->cascadeOnUpdate();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('_bank');
    }
};
