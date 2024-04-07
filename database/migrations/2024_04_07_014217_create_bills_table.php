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
        Schema::create('bills', function (Blueprint $table) {
            $table->id('bill_ID');
            $table->unsignedBigInteger('bank_ID');
            $table->foreign('bank_ID')->references('bank_ID')->on('banks')->cascadeOnDelete()->cascadeOnUpdate();            $table->id('bill_ID');
            $table->boolean('check_given');
            $table->boolean('check_paid');
            $table->unsignedBigInteger('num_bill');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('bills');
    }
};
