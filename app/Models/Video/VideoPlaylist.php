<?php

namespace App\Models\Video;

use Illuminate\Database\Eloquent\Model;

class VideoPlaylist extends Model
{
    //

    protected $table = 'video_playlists';

    protected $fillable = ['name'];

    public function videos()
    {
        return $this->belongsToMany(Video::class, 'playlist_video', 'playlist_id')->withTimestamps();
    }

    public function video_license() {
        return $this->belongsTo(VideoLicense::class, 'videolicense_id');
    }

}
