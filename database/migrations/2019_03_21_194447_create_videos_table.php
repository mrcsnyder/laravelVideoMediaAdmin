<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateVideosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('videos', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->text('name');
            $table->text('artist');
            $table->text('path');
            $table->timestamps();
        });


        Schema::create('playlist_video', function (Blueprint $table) {
            $table->integer('playlist_id');
            $table->integer('video_id');
            $table->timestamps();
            $table->primary(['playlist_id', 'video_id']);

        });

    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('videos');
//        Schema::dropIfExists('video_playlist');
    }
}
