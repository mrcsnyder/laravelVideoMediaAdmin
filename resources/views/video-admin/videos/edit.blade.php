@extends('layouts.media.app')
@section('title', 'Edit Video Track: '.$video->name)

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
        <h1 class="verlag-bold"><p class="">Edit Video</p></h1>
        <br/>
        <h2 class="gotham-med-reg text-center"> Edit Video:<br/><br/>{{ucwords($video->name)}}</h2>
        <p class="text-center">



        <div class="embed-responsive embed-responsive-16by9">
            <video controls>
                <source src="/videos/{{$video->path}}" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        </div>



        </p>
        <br/>
        {!! Form::model($video, [
        'method' => 'PATCH',
        'url' => ['videos', $video->id],
        'class' => 'gotham-med-reg','files' => true
                                ])
        !!}

        <div class="form-group {{ $errors->has('name') ? 'has-error' : ''}}">
            {!! Form::label('name', trans('Video Title'), ['class' => 'control-label']) !!}
            <div class="">
                {!! Form::text('name', null, ['class' => 'form-control', 'style' =>'text-transform: lowercase;']) !!}
            </div>
        </div>
        <br/>
        <div class="form-group {{ $errors->has('artist') ? 'has-error' : ''}}">
            {!! Form::label('artist', trans('Video Company'), ['class' => 'control-label']) !!}
            <div class="">
                {!! Form::text('artist', null, ['class' => 'form-control', 'style' =>'text-transform: lowercase;']) !!}
            </div>
        </div>

        <div class="form-group">
            {!! Form::label('video', trans('Replace Video File'), ['class' => '']) !!}
            <div class="">
                {!! Form::file('video', ['class' => 'form-control-file']); !!}

            </div>
        </div>


        <div class="form-group">
            <input id="filename" name="path" value="{{$video->path}}" type="hidden">
        </div>
        <br/>


        {!! Form::submit('Update Video', ['class' => 'btn btn-lg btn-info']) !!}
        {!! Form::close() !!}


        <br/>
        <br/>

        <a class="btn btn-lg btn-dark gotham-med-reg" href="/"><i class="fa fa-long-arrow-left"></i> Back to Admin</a>

    </div>

    <br/>
    <br/>
    <br/>

@endsection



@section('scripts')
    <script>

        $(function() {
            $("input:file").change(function (){

                var uid = "{{uniqid()}}";

                var fileName = $(this).val();
                //strips first 12 characters otherwise it adds a fake file path...
                $("#filename").val(uid+'-'+fileName.substring(12));

            });
        });

    </script>




@endsection
