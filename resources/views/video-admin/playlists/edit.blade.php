
@extends('layouts.media.app')
@section('title', 'Video Admin Edit Playlist: '.$playlist->name.' | '. $playlist->video_license->name)
@section('content')

    <div class="container">
        <br/>

        @foreach($errors->all() as $error)
            <div class="alert alert-danger">
                <h5>{{ $error }}</h5>
            </div>
        @endforeach

        @if(Session::has('message'))
            <div class="alert alert-success">
                <h5>{{Session::get('message')}}</h5>
            </div>
        @endif

        @if(Session::has('alert'))
            <div class="alert alert-warning">
                <h5>{{Session::get('alert')}}</h5>
            </div>
        @endif

        <h1 class="verlag-bold"><p>Video Admin <i class="fa fa-video-camera" aria-hidden="true"></i><br/> <a href="/video-licenses/{{$playlist->video_license->id}}" target="_blank">{{ucwords($playlist->video_license->name)}}</a> <span class="text-muted">|</span> Playlist</p></h1>
        <a class="btn btn-lg btn-dark gotham-med-reg" href="/"><i class="fa fa-long-arrow-left"></i> Back to Admin</a>

        <br/>
        <h2 class="gotham-med-reg text-center mt-3"><i class="fa fa-film" aria-hidden="true"></i> &nbsp;<u><a href="/playlists/{{$playlist->id}}" target="_blank">{{ucwords($playlist->name)}}</a></u></h2>

        <form method="POST" accept-charset="UTF-8" action="/playlists-update/{{$playlist->id}}" class="gotham-med-reg">
        <input name="_method" type="hidden" value="PATCH">

        <div class="form-group {{ $errors->has('name') ? 'has-error' : ''}}">

            <label for="name" class="control-label">Playlist Name</label>
            <div class="">

                <input type="text" name="name" class="form-control" value="{{ $playlist->name}}">

            </div>
        </div>

            @csrf

        <div class="form-group">
            <div class="text-center">

                <input type="submit" class="btn btn-md btn-secondary text-center mx-auto" value="Update Title">

            </div>
        </div>

        </form>


        {!! Form::open(['url' => 'video_playlist', 'class' => 'form gotham-med-reg' ]) !!}

        <div class="form-group">

            {!! Form::label('Select Video') !!}<br />

            <select class="custom-select mr-sm-2" name ='video_id'>
                <option selected>Select Video for Playlist</option>
                @foreach($video as $vid)

                    <option value="{{$vid->id}}">{{ucwords($vid->name)}}</option>
                @endforeach
            </select>


            {{ Form::hidden('playlist_id', $playlist->id ) }}
        </div>
        {{csrf_field()}}

        <div class="form-group">
            <div class="text-center">
                {!! Form::submit('Add Video', ['class' => 'btn btn-md btn-dark text-center mx-auto']) !!}
            </div>
        </div>
        {!! Form::close() !!}

        <br/>

        <h2 class="text-center gotham-med-reg"><span class="">Current Video Listing: </span></h2>
        <div class="">
            <ul class="list-group">
                @foreach($videos as $vid)

                    <li class="list-group-item text-center"><h3 class="">
                            <p>{{ucwords($vid->name)}}</p>
                            <p>{{strtoupper($vid->artist)}}</p>

                            <p>

                            <div class="embed-responsive embed-responsive-16by9"><video controls>
                                    <source src="/videos/{{$vid->path}}" type="video/mp4">
                                    Your browser does not support the video tag.
                                </video>
                            </div>

                            </p>
                            <a class="btn btn-md btn-info" href="/videos/{{$vid->id}}/edit">Edit Video Info</a>&nbsp;&nbsp;
                            <form class="delete-item-form" action="{{ url('/remove-from-playlist')}}" method="POST" id='confirm_delete{{$playlist->id}}'>
                                {{ csrf_field() }}<input type="hidden" name="playlist_id" value="{{$playlist->id}}">
                                <input type="hidden" name="video_id" value="{{$vid->id}}">
                                <button class="btn btn-md btn-danger"><i class="fa fa-trash"></i> Remove Video</button></form>
                        </h3>
                        filename:  {{$vid->path}}
                    </li>

                @endforeach
            </ul>
        </div>


    </div>


    <br/>
    <br/>
    <br/>

@endsection


@section('scripts')
    <script>
        $(document).ready(function() {

            $("[id^=confirm_delete]").submit(function (e) {
                var form = this;
                e.preventDefault();
                swal({
                        title: "Danger Will Robinson!",
                        text: "If you click 'Remove Video' this will permanently \nREMOVE this video from your playlist!\n\n Not to worry though, the video itself will not be\n deleted permanently!",
                        // type: "warning",
                        showCancelButton: true,
                        confirmButtonColor: '#DD6B55',
                        confirmButtonText: 'Remove Track',
                        cancelButtonText: "Cancel",
                        closeOnConfirm: true,
                        closeOnCancel: true,
                        imageUrl: "/images/tools/danger-will-robinson.jpg",
                        imageSize: "250x250"
                    },
                    function (isConfirm) {
                        if (isConfirm) {

                            form.submit();

                        }

                    });
            });
        });
    </script>
@endsection
