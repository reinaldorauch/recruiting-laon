<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMediaDirectorMediaTitleTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('media_director_media_title', function (Blueprint $table) {
            $table->bigInteger('media_director_id');
            $table->unsignedBigInteger('media_title_id');
            
            $table->primary(['media_director_id', 'media_title_id']);
            $table->foreign('media_director_id', 'fk_media_director_has_media_title_media_director1')->references('id')->on('media_director');
            $table->foreign('media_title_id', 'fk_media_director_has_media_title_media_title1')->references('id')->on('media_title');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('media_director_media_title');
    }
}
