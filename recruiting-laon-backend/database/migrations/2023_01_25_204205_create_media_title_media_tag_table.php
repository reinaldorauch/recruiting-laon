<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMediaTitleMediaTagTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('media_title_media_tag', function (Blueprint $table) {
            $table->unsignedBigInteger('media_title_id');
            $table->unsignedBigInteger('media_tag_id');
            
            $table->primary(['media_title_id', 'media_tag_id']);
            $table->foreign('media_tag_id', 'fk_media_title_has_media_tag_media_tag1')->references('id')->on('media_tag');
            $table->foreign('media_title_id', 'fk_media_title_has_media_tag_media_title')->references('id')->on('media_title');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('media_title_media_tag');
    }
}
