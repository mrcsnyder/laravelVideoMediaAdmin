<?php

namespace App\Models\Video;

use Illuminate\Database\Eloquent\Model;

class Video extends Model
{
    //
    protected $table = 'videos';

    protected $fillable = ['name', 'artist', 'path'];

    public function playlists()
    {
        return $this->belongsToMany(VideoPlaylist::class, 'playlist_video','video_id');

    }

}
