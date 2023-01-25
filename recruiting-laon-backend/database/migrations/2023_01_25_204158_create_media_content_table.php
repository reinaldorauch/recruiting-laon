<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMediaContentTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('media_content', function (Blueprint $table) {
            $table->unsignedBigInteger('id')->primary();
            $table->string('uri')->nullable();
            $table->timestamp('created_at')->useCurrent();
            $table->timestamp('updated_at')->useCurrent();
            $table->timestamp('deleted_at')->nullable();
            $table->unsignedBigInteger('media_content_type_id');
            $table->unsignedBigInteger('media_title_id');
            $table->unsignedSmallInteger('running_time');
            
            $table->foreign('media_content_type_id', 'fk_media_content_media_content_type1')->references('id')->on('media_content_type');
            $table->foreign('media_title_id', 'fk_media_content_media_title1')->references('id')->on('media_title');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('media_content');
    }
}
