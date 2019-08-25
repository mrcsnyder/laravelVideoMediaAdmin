<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Video\Video;

use Illuminate\Support\Facades\Session;

use Illuminate\Support\Facades\Redirect;

use Illuminate\Support\Facades\Input;

use App\Http\Requests\StoreVideoRequest;

use App\Http\Requests\StoreVideoEditRequest;

use Illuminate\Support\Facades\Storage;


class VideosController extends Controller
{
    //

    public function index()
    {

        $videos = Video::orderBy('name')->paginate(5);
        return view('video-admin.videos.index', compact('videos'));
    }



    public function create()
    {
        //
        return view('video-admin.videos.create');
    }



    public function store(StoreVideoRequest $request)
    {

        $video = New Video;

        //grab track name and set to lowercase because on display in blade templates we can uppercase words or strings so titles/artists look neat.
        $video->name = strtolower($request->input('name'));
        $video->artist = strtolower($request->input('artist'));

        //grab file from request
        $file = $request->file('video');

        //set file name to save and append unique id to beginning
        $filename = uniqid().'-'.$file->getClientOriginalName();

        //set to file name since S3 path is either passed in to other controller actions or on the blade templates...
        $video->path = ''.$filename;

        //save track information to tracks table
        $video->save();

        // S3 storage way to do it:
        //        Storage::disk('s3')->putFileAs(
        //            'videos', //folder on bucket
        //            $file = $request->file('video'), //file itself
        //            $filename, //file name with unique id
        //            ['visibility' => 'public'] //set file visibility to public so it is readable by all who access that URL
        //
        //        );


        $request->video->move(public_path('/videos'), $filename);


        //redirect back with message for users!
        Session::flash('message', 'Video Successfully added!');
        return redirect('/videos');

    }


    public function edit($id)
    {
        //
        $video = Video::findOrFail($id);

        return view('video-admin.videos.edit', compact('video'));
    }



    public function update(StoreVideoEditRequest $request, $id)
    {
        //

        //grab track from tracks table...
        $video = Video::find($id);

        //keep track of old path in case audio file is updated/replaced...
        $old_path = '/videos/'.$video->path;

        //update tracks info with edit page entries...
        $video->update($request->all());


        //check if file has been added on edit page otherwise do nothing with currently stored track:
        if(Input::hasFile('video')){



            //boolean to check whether or not old file exists...
            $oldfileexists = Storage::disk('public')->exists( $old_path );

            //Delete old video
            if( $oldfileexists){
                Storage::disk('public')->delete( $old_path );
            }


            //grab file from request
            $file = $request->file('video');

            //set file name to save and append unique id to beginning
            $filename = uniqid().'-'.$file->getClientOriginalName();

            //set to file name since S3 path is either passed in to other controller actions or on the blade templates...
            $video->path = ''.$filename;

            //save track information to tracks table
            $video->save();

            $request->video->move(public_path('/videos'), $filename);

            //S3 way to do it....

            //delete other file from S3

//            //create S3 storage object...
//            $storage = Storage::disk('s3');
//
//            //check if file exists with file name...
//            if($storage->exists('videos/'.$old_path)) {
//
//                //delete file from S3...
//                $storage->delete('videos/'.$old_path);
//
//            }
//
//            //path has uid generated in edit blade template JS...
//            $filename = $request->input('path');
//
//            //add new audio file to S3...
//            Storage::disk('s3')->putFileAs(
//                'videos', //folder on bucket
//                $file = $request->file('video'), //file itself
//                $filename, //file name with unique id
//                ['visibility' => 'public'] //set file visibility to public so it is readable by all who access that URL
//
//            );


        }


        return Redirect::back()->with('message','This video has been updated!');

    }



    public function destroy($id)
    {

        //look up track in tracks table...
        $video = Video::find($id);


        //create S3 storage object...
        $storage = Storage::disk('public');

        //check if file exists with file name...
        if($storage->exists('/videos/'.$video->path)) {

            //delete file from local storage...
            $storage->delete('/videos/'.$video->path);

        }

        //Way to remove file from S3...
//        //create S3 storage object...
//        $storage = Storage::disk('s3');
//
//        //check if file exists with file name...
//        if($storage->exists('videos/'.$video->path)) {
//
//            //delete file from S3...
//            $storage->delete('videos/'.$video->path);
//
//        }

        //delete track from any playlist it was on...
        $video->playlists()->detach();

        //delete record of Track in tracks table...
        $video = Video::destroy($id);

        Session::flash('message', 'Video Deleted!');
        return redirect('/videos');

    }




}
