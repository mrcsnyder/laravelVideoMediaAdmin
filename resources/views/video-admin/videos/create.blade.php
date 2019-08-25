@extends('layouts.media.app')
@section('title', 'Create Video Track')

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
                {{Session::get('message')}}
            </div>
        @endif

        <h1 class="verlag-bold"><p>Video Admin <i class="fa fa-video-camera" aria-hidden="true"></i><br/>Create Video</p></h1>

        <br/>

        {!! Form::open(['url' => 'videos', 'class' => 'gotham-med-reg', 'files' =>true ]) !!}


        <div class="form-group {{ $errors->has('name') ? 'has-error' : ''}}">
            {!! Form::label('name', trans('Video Title'), ['class' => '']) !!}
            <div class="">
                {!! Form::text('name', null, ['class' => 'form-control']) !!}
            </div>
        </div>
        <br/>

        <div class="form-group {{ $errors->has('artist') ? 'has-error' : ''}}">
            {!! Form::label('artist', trans('Video Artist'), ['class' => '']) !!}
            <div class="">
                {!! Form::text('artist', null, ['class' => 'form-control']) !!}

            </div>
        </div>
        <br/>
        <div class="form-group">
            {!! Form::label('video', trans('Upload Video File'), ['class' => '']) !!}
            <div class="">
                {!! Form::file('video', ['class' => 'form-control-file']); !!}

            </div>
        </div>


        <br/>
        {{csrf_field()}}

        <br/>

        <div class="form-group">
            <div class="">
                {!! Form::submit('Upload Video', ['class' => 'btn btn-lg btn-info text-center']) !!}
            </div>
        </div>
        {!! Form::close() !!}


        <br/>
        <br/>

        <a class="btn btn-lg btn-dark gotham-med-reg" href="/"><i class="fa fa-long-arrow-left"></i> Back to Admin</a>
    </div>

    <br/>
    <br/>
    <br/>
    <br/>
    <br/>

@endsection
