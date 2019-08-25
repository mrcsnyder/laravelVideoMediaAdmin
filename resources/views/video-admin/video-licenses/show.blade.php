@extends('layouts.media.app')

@section('title', $license->name.'Video Playlists')

@section('content')

    <div class="container">
        <br/>
        @if(Session::has('message'))
            <div class="alert alert-success">
                {{Session::get('message')}}
            </div>
        @endif


        <br/>
        <h2 class="text-center gotham-med-reg"><i class="fa fa-video-camera" aria-hidden="true"></i> {{$license->name}} Video Playlists</h2>
        <br/>


        <div class="">
            <ul class="list-group">

                @foreach($license->playlists as $playlist)

                    <li class="list-group-item gotham-med-reg text-center">
                        <h3> <a href="/playlists/{{$playlist->id}}">{{ucwords(($playlist->name))}}</a></h3></li>

                @endforeach
            </ul>
        </div>

        <br/>
        <br/>
        <br/>

    </div>

@endsection


