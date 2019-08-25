<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Video\VideoPlaylist;

use App\Models\Video\VideoLicense;

use App\Models\Video\Video;

use Illuminate\Support\Facades\Session;

use Illuminate\Support\Facades\Redirect;

use App\Http\Requests\StoreVideoPlaylistRequest;

use App\Http\Requests\StoreVideoFilmPlaylistRequest;



class VideoPlaylistsController extends Controller
{

    public function index() {

        $playlists = VideoPlaylist::orderBy('created_at')->get();
        $licenses = VideoLicense::orderBy('name')->get();

        return view('video-admin.playlists.index', compact('playlists', 'licenses'));
    }


    public function show($id){

        $playlist = VideoPlaylist::findOrFail($id);
        $playlist_tracks = $playlist->videos()->orderBy('playlist_video.created_at')->get();

        //If using S3, here is the path!
        //$vid_prefix_path = 'https://s3.amazonaws.com/<bucket>/<folder>/';

        $vid_prefix_path = '/videos/';
        return view('video-admin.playlists.show', compact('playlist','playlist_tracks', 'vid_prefix_path'));


        return view('video-admin.playlists.show', compact('playlist','video', 'videos', 's3_path'));
    }


    //edit playlist (add, remove tracks, and edit playlist title...
    public function edit($id){


        $playlist = VideoPlaylist::findOrFail($id);

        $videos = $playlist->videos()->orderBy('playlist_video.created_at')->get();

        $video = Video::orderBy('name')->get();

        return view('video-admin.playlists.edit', compact('playlist', 'video', 'videos'));
    }


    public function update(StoreVideoPlaylistRequest $request, $id) {


        $playlist = VideoPlaylist::find($id);
        $playlist->update($request->all());

        return Redirect::back()->with('message','Playlist title has been updated!');
    }


    public function create() {

        //pluck and pass the name and id of the licensure you want to attach the playlist to...

        $licenses = VideoLicense::pluck('name', 'id');

        //ON EDIT of playlist.... also pluck and pass the name and id of each track for addition to playlist...

        return view('video-admin.playlists.create', compact('licenses'));
    }

    public function store(Request $request) {

        $playlist = New VideoPlaylist;
        $playlist->name = $request->input('name');

        $playlist->videolicense_id = $request->input('videolicense_id');
        $playlist->save();

        Session::flash('message', 'Playlist added!');
        return redirect('/');

    }


    public function addVideo(StoreVideoFilmPlaylistRequest $request) {


        $playlist = VideoPlaylist::findOrFail($request->input('playlist_id'));

        if($request->input('video_id') == 'Select Video for Playlist'){

            return Redirect::back()->with('alert','Please choose a video!');
        }

        else {

            $video = Video::where('id', '=', $request->input('video_id'))->get()->first();

            //add the track id to pivot table.. many-to-many relationship established with tracks on Playlist Model.

            $playlist->videos()->attach($video->id);

            return Redirect::back()->with('message','Video Added to Playlist!');

        }


    }

    //remove video from playlist...
    public function removeTrack(Request $request) {

        $playlist = VideoPlaylist::find($request->input('playlist_id'));
        $playlist->videos()->detach($request->input('video_id'));

        return Redirect::back()->with('message','Video Removed from Playlist!');

    }


}
