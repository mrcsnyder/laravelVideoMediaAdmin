@extends('layouts.media.app')
@section('title', 'Edit Video Genre: '.$license->name)

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
        <br/>

        <h1 class="verlag-bold"><p>Video Admin <i class="fa fa-video-camera" aria-hidden="true"></i><br/> Edit {{ucwords($license->name)}} Genre</p></h1>
        <br/>
        <h2 class="gotham-med-reg text-center"> Edit Video Genre:<br/><br/>{{ucwords($license->name)}}</h2>


        {!! Form::model($license, [
'method' => 'PATCH',
'url' => ['video-licenses', $license->id],
'class' => 'gotham-med-reg','files' => true
]) !!}

        <div class="form-group {{ $errors->has('name') ? 'has-error' : ''}}">
            {!! Form::label('name', trans('Genre Name'), ['class' => 'control-label']) !!}
            <div class="">
                {!! Form::text('name', null, ['class' => 'form-control']) !!}
            </div>
        </div>
        <br/>

        {!! Form::submit('Update Genre', ['class' => 'btn btn-lg btn-info']) !!}
        {!! Form::close() !!}

        <br/>
        <br/>

        <a class="btn btn-lg btn-dark gotham-med-reg" href="/"><i class="fa fa-long-arrow-left"></i> Back to Admin</a>

@endsection


