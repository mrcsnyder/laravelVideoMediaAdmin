@extends('layouts.media.app')
@section('title', 'Video Playlists: '.$playlist->name.' | '. $playlist->video_license->name)

@section('styles')


    <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'>

    <style>

        #playlist li{
            cursor:pointer;
            padding:8px;
            font-size:1.3em;
        }

        #playlist li:hover{
            background-color: rgba(0,0,0,.1);
        }

        ul#playlist {
            list-style-type: none;
            border-bottom-left-radius: 25px;
            border-bottom-right-radius: 25px;
            padding-top: 10px;
            padding-bottom: 10px;
            padding-left:20px;
            padding-right:20px;
            box-shadow: 0 2px 2px rgba(0, 0, 0, 0.5);
            width: 100%;
            display: table;
        }

        #playlist {
            background-color: lightgray;
        }

        #playlist li.selected {
            background-color: #ebf2f8 !important;
        }
        video{
            /*object-fit: cover;*/
        }

    </style>

@endsection
@section('content')

    <div class="container">
        <br/>
        <br/>
        <br/>
        {{--<img class="mb-4" src="{{url('#')}}" alt="Video Player">--}}

        <h1 class="verlag-bold text-center"><i class="fa fa-video-camera" aria-hidden="true"></i> {{ucwords($playlist->name)}}</h1>
        <br/>

        <div class="embed-responsive embed-responsive-16by9">
            <video class="embed-responsive-item"  id="videoarea" poster="" src=""  x-webkit-airplay="allow" playsinline controls controlsList="nodownload"></video>
        </div>

        <ul id="playlist" class="verlag-bold">
            @foreach($playlist_tracks as $play)
                <li movieurl="{{$vid_prefix_path.$play->path}}" moviesposter="{{url('#')}}"> {{ucwords($play->name)}}  | {{ucwords($play->artist)}}</li>
            @endforeach
        </ul>

    </div>

    <br/>
    <br/>
    <br/>

@endsection

@section('scripts')

    <script>

        var $li = $('#playlist li').click(function() {
            $li.removeClass('selected');
            $(this).addClass('selected');
            $(".fa-play-circle").remove();
            $(this).prepend(' <i class="fa fa-play-circle text-muted" aria-hidden="true"></i>');

        });

        $(function() {
            $("#playlist li").on("click", function() {

                $("#videoarea").attr({
                    "src": $(this).attr("movieurl"),
                    "poster": $(this).attr("moviesposter"),
                    "autoplay": "autoplay"
                })

            })
            $("#videoarea").attr({
                "src": $("#playlist li").eq(0).attr("movieurl"),
                "poster": $("#playlist li").eq(0).attr("moviesposter")
            })

        })

        $(document).ready(function(){

            $('#videoarea').bind('contextmenu',function() { return false; });
            $( "li" ).first().addClass('selected').prepend(' <i class="fa fa-play-circle text-muted" aria-hidden="true"></i>');
        });

    </script>



@endsection
