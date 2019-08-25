@extends('layouts.media.app')

@section('title', 'All Video Genres')


@section('content')

    <div class="container">
        <br/>

        <h1 class="verlag-bold"><p><i class="fa fa-video-camera"></i>  <span class="">Video Genre Admin</span></p>
            <a class="btn btn-lg btn-info" href="/video-licenses/create">Add Genre</a>  <a class="btn btn-lg btn-dark" href="/"><i class="fa fa-long-arrow-left"></i> Back to Admin</a>

        </h1>
        <br/>

        <ul class="list-group">
            @foreach($video_licenses as $license)


                <li class="list-group-item text-center"> <h3 class="verlag-bold">{{ucwords($license->name)}}
                        <br/>
                        <a class="btn btn-lg btn-info" href="/video-licenses/{{$license->id}}" target="_blank">View Playlists</a>

                    </h3></li>

            @endforeach

        </ul>
        <br/>
        <br/>
        <br/>

    </div>

@endsection
