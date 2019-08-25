@extends('layouts.media.app')
@section('title', 'Create Video Playlist')

@section('content')

    <div class="container">
        <br/>
        <br/>

        <h1 class="verlag-bold"><p>Video Admin <i class="fa fa-video-camera" aria-hidden="true"></i><br/> Create Video Playlist</p></h1>

        <br/>

{!! Form::open(['url' => 'video-admin', 'class' => 'gotham-med-reg' ]) !!}


        <div class="form-group">
            {!! Form::label('Select a Genre') !!}<br />
            {!! Form::select('videolicense_id', $licenses, null, ['class' => 'form-control', 'placeholder' => 'Select a Genre']) !!}

        </div>
        <br/>

<div class="form-group {{ $errors->has('name') ? 'has-error' : ''}}">
    {!! Form::label('name', trans('Playlist Name'), ['class' => '']) !!}
    <div class="">
        {!! Form::text('name', null, ['class' => 'form-control']) !!}
        {!! $errors->first('name', '<p class="alert">:message</p>') !!}
    </div>
</div>


{{csrf_field()}}

<br/>

<div class="form-group">
    <div class="">
        {!! Form::submit('Create Playlist', ['class' => 'btn btn-lg btn-info text-center']) !!}
    </div>
</div>
{!! Form::close() !!}

    </div>


@endsection