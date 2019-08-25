<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;


use App\Models\Video\VideoLicense;

use App\Models\Video\VideoPlaylist;

use Illuminate\Support\Facades\Session;

use Illuminate\Support\Facades\Redirect;

use App\Http\Requests\StoreVideoLicenseRequest;

use App\Http\Requests\StoreVideoLicensePlaylistRequest;

class VideoLicensesController extends Controller
{
    //


    public function index() {

        $video_licenses = VideoLicense::orderBy('name')->get();
        return view('video-admin.video-licenses.index', compact('video_licenses'));
    }

    public function show($id){

        $license = VideoLicense::findOrFail($id);
        return view('video-admin.video-licenses.show', compact('license'));
    }



    public function create() {


        return view('video-admin.video-licenses.create');
    }


    public function store(StoreVideoLicenseRequest $request) {

        $name = $request->input('name');

        $license = New VideoLicense;
        $license->name = $request->input('name');
        $license->save();

        Session::flash('message', $name.' genre added!');
        return redirect('/');
    }



    public function edit($id) {

        $license = VideoLicense::findOrFail($id);

        return view('video-admin.video-licenses.edit', compact('license'));
    }


    public function update(StoreVideoLicenseRequest $request, $id)
    {
        //

        $license = VideoLicense::find($id);
        $license->update($request->all());


        return Redirect::back()->with('message','This genre has been updated!');

    }



    public function destroy($id) {


        //find all playlists associated with the audio license id...

        $license = VideoLicense::find($id);


        //grab all playlists
        $playlists = $license->playlists;


        //iterate through and delete from pivot table...

        foreach($playlists as $playa){


            $playlist = VideoPlaylist::find($playa->id);
            $playlist->videos()->detach();

        }


        //delete all license playlists....
        $license->playlists()->delete();



        //delete audio license
        VideoLicense::destroy($id);

        return Redirect::back()->with('message', 'The genre has been deleted!');

    }


    //delete playlist from video license related by pivot table...
    public function removePlaylist(Request $request) {


        $playlist_id = $request->input('playlist_id');


        //delete the other records in pivot table associated with playlist_id...

        $playlist = VideoPlaylist::find($request->input('playlist_id'));
        $playlist->videos()->detach();


        //delete the playlist itself...
        VideoPlaylist::destroy($playlist_id);


        return Redirect::back()->with('message','Playlist Removed from License!');
    }



//    display the add playlist already associated with a license creation form...
    public function createLicensePlaylist($id) {


        $license = VideoLicense::findOrFail($id);


        return view('video-admin.video-licenses.create-playlist-by-license', compact('license'));
    }


    public function storeLicensePlaylist(StoreVideoLicensePlaylistRequest $request) {


        $license_name = $request->input('videolicense_name');


        $playlist = New VideoPlaylist;
        $playlist->name = $request->input('name');

        //TO DO:  need to figure this out or remove altogether if not important...
        $playlist->order = 1;


        $playlist->videolicense_id = $request->input('videolicense_id');
        $playlist->save();

        //take back to playlists index page with message saying playlist created....
        Session::flash('message', $license_name.' playlist added!');
        return redirect('/');

    }




}
