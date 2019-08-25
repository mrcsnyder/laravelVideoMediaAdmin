<?php

namespace App\Models\Video;

use Illuminate\Database\Eloquent\Model;

class VideoLicense extends Model
{
    //


    protected $table = 'video_licenses';

    protected $fillable = ['name'];

    public function playlists() {

        return $this->hasMany(VideoPlaylist::class, 'videolicense_id');
    }


}
