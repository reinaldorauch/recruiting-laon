<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMediaTitleTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('media_title', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->timestamp('created_at')->useCurrent();
            $table->timestamp('updated_at')->useCurrent();
            $table->timestamp('deleted_at')->nullable();
            $table->string('original_name');
            $table->unsignedSmallInteger('release_year');
            $table->unsignedBigInteger('media_type_id');
            $table->text('sinopsis')->nullable();
            $table->string('thumbnail_path');
            
            $table->foreign('media_type_id', 'fk_media_title_media_type1')->references('id')->on('media_type');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('media_title');
    }
}
