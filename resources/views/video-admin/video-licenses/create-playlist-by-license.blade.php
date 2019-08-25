@extends('layouts.media.app')
@section('title', 'Create '.$license->name .' Playlist')

@section('content')

    <div class="container">
        <br/>
        @foreach($errors->all() as $error)
            <div class="alert alert-danger">
                <h5>{{ $error }}</h5>
            </div>
        @endforeach

        <h1 class="verlag-bold"><p>Video Admin <i class="fa fa-video-camera" aria-hidden="true"></i><br/> Create {{$license->name}} Playlist</p></h1>

        <br/>

        {!! Form::open(['url' => '/create-licensed-playlist', 'class' => 'gotham-med-reg' ]) !!}


        <br/>

        <div class="form-group {{ $errors->has('name') ? 'has-error' : ''}}">
            {!! Form::label('name', trans('Playlist Name'), ['class' => '']) !!}
            <div class="">
                {!! Form::text('name', null, ['class' => 'form-control']) !!}
                {!! $errors->first('name', '<p class="alert">:message</p>') !!}
            </div>
        </div>

        <br/>
        <input name="videolicense_id" value="{{$license->id}}" type="hidden">
        <input name="videolicense_name" value="{{$license->name}}" type="hidden">


        {{csrf_field()}}

        <br/>

        <div class="form-group">
            <div class="">
                {!! Form::submit('Create Playlist', ['class' => 'btn btn-lg btn-info text-center']) !!}
            </div>
        </div>
        {!! Form::close() !!}

        <br/>
        <br/>
        <a class="btn btn-lg btn-dark gotham-med-reg" href="/"><i class="fa fa-long-arrow-left"></i> Back to Admin</a>
        <br/>
        <br/>
        <br/>
        <br/>


@endsection


