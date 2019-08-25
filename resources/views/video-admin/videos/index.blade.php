@extends('layouts.media.app')
@section('title', 'All Videos')
@section('content')
    <div class="container">
        <br/>
        @if(Session::has('message'))
            <div class="alert alert-success">
                <h5>{{Session::get('message')}}</h5>
            </div>
        @endif
        <br/>
        <h1 class="verlag-bold">
            <p>All Videos A-Z</p>
            <a class="btn btn-lg btn-info" href="/videos/create">Add Video</a>
            <a class="btn btn-lg btn-dark" href="/"><i class="fa fa-long-arrow-left"></i> Back to Admin</a>
            <br/>
            <br/>


        </h1>
        <br/>
        <ul class="list-group">

            @foreach($videos as $vid)

                <li class="list-group-item text-center">
                    <h3 class="verlag-bold"><p>{{ucwords($vid->name)}}</p>
                        <p>{{strtoupper($vid->artist)}}</p>
                        <p class="small text-muted">{{$vid->path}}</p>

                        <p>
                        <div class="embed-responsive embed-responsive-16by9"><video

                                  controls>
                            <source src="/videos/{{$vid->path}}" type="video/mp4">
                            Your browser does not support the video tag.
                        </video>
                        </div>
                        </p>


                        <a role="button" class="btn btn-info btn-lg" href="/videos/{{$vid->id}}/edit">Edit Video</a>
                        &nbsp;&nbsp;
                        {!!Form::open(['action'=>['VideosController@destroy', $vid->id], 'method'=>'POST', 'class' => 'delete-item-form', 'id'=>'confirm_delete'.$vid->id,])!!}
                        {{Form::hidden('_method','DELETE')}}
                        @csrf
                        <button type="submit" class="btn btn-danger btn-lg"><i class="fa fa-trash"></i> Delete Video</button>
                        {!!Form::close() !!}
                    </h3>
                </li>

            @endforeach

        </ul>


    </div>

    <br/>
    <br/>
    <div class="pagination-contain">
        {{$videos->links()}}
    </div>
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
                        text: "If you click 'Delete Video' this will permanently \nDELETE this Video File!",
                        // type: "warning",
                        showCancelButton: true,
                        confirmButtonColor: '#DD6B55',
                        confirmButtonText: 'Delete Video',
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
