<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateMathProblemsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('math_problems', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('problem');
            $table->double('result');
            $table->integer('stage');
            $table->unsignedBigInteger('mathoperation_id');
            $table->foreign('mathoperation_id')->references('id')->on('math_operations')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('math_problems');
    }
}
