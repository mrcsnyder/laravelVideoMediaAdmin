@extends('layouts.media.app')
@section('title', 'Create Video Genre')

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

        <h1 class="verlag-bold"><p>Video Admin <i class="fa fa-video-camera" aria-hidden="true"></i><br/> Create Video Genre</p></h1>

        <br/>

        {!! Form::open(['url' => '/video-licenses', 'class' => 'gotham-med-reg' ]) !!}

        <div class="form-group {{ $errors->has('name') ? 'has-error' : ''}}">
            {!! Form::label('name', trans('Genre Name'), ['class' => '']) !!}
            <div class="">
                {!! Form::text('name', null, ['class' => 'form-control']) !!}

            </div>
        </div>
        <br/>
        {{csrf_field()}}

        <br/>

        <div class="form-group">
            <div class="">
                {!! Form::submit('Create Genre', ['class' => 'btn btn-lg btn-info text-center']) !!}
            </div>
        </div>
        {!! Form::close() !!}


        <br/>
        <br/>

        <a class="btn btn-lg btn-dark gotham-med-reg" href="/"><i class="fa fa-long-arrow-left"></i> Back to Admin</a>

    </div>


@endsection