<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMediaScoreTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('media_score', function (Blueprint $table) {
            $table->id();
            $table->string('label', 45);
            $table->unsignedTinyInteger('score');
            $table->timestamp('created_at')->useCurrent();
            $table->timestamp('updated_at')->useCurrent();
            $table->timestamp('deleted_at')->nullable();
            $table->unsignedBigInteger('media_title_id');
            
            $table->foreign('media_title_id', 'fk_media_score_media_title1')->references('id')->on('media_title');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('media_score');
    }
}
