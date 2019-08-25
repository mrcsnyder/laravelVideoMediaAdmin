@extends('layouts.media.app')
@section('title', 'Video Admin | All Genre Playlists')

@section('content')

    <div class="container">
        <br/>
        @if(Session::has('message'))
            <div class="alert alert-success">
                <h5>{{Session::get('message')}}</h5>
            </div>
        @endif

        <h1 class="verlag-bold">
            <p>Video Admin <i class="fa fa-video-camera" aria-hidden="true"></i></p>
             <a class="btn btn-lg btn-info" href="/video-licenses/create"><i class="fa fa-plus" aria-hidden="true"></i> Add Genre</a>
            <a class="btn btn-lg btn-dark" href="/videos/create"><i class="fa fa-plus" aria-hidden="true"></i> Add Video</a>
            <br/>
            <a class="btn btn-lg btn-secondary mt-2" href="/videos"><i class="fa fa-film" aria-hidden="true"></i> View Videos</a>
            <a class="btn btn-lg btn-primary mt-2" href="/video-licenses"><i class="fa fa-folder" aria-hidden="true"></i> View Genres</a>
        </h1>

<div class="row">
@foreach($licenses as $lic)

    <div class="col-md-4 col-10 mt-3">

        <div class="card gotham-med-reg">
            <div class="card-body">
                <h5 class="card-title text-center"><a href="/video-licenses/{{$lic->id}}" target="_blank">{{ucwords($lic->name)}}</a>
                    <br/>
                    <a class="btn btn-dark btn-sm mt-1" href="/video-licenses/{{$lic->id}}/edit"><i class="fa fa-pencil" aria-hidden="true"></i> Edit Genre</a>
                        {!!Form::open(['action'=>['VideoLicensesController@destroy', $lic->id], 'method'=>'POST', 'class' => 'delete-item-form', 'id'=>'confirm_license_delete'.$lic->id,])!!}
                        {{Form::hidden('_method','DELETE')}}
                        @csrf
                        <button type="submit" class="btn btn-danger btn-sm mt-1"><i class="fa fa-trash"></i> Delete</button>
                        {!!Form::close() !!}
                    </h5>
                <br/>

                <ul class="list-group">
                @foreach($playlists as $play)

                    @if($play->video_license->name == $lic->name)

                            <li class="list-group-item text-center"><p><a href="/playlists/{{$play->id}}" target="_blank">{{ucwords($play->name)}}</a></p>
                                <a class="btn btn-sm btn-info mt-1" href="/playlists-edit/{{$play->id}}/edit"><i class="fa fa-pencil" aria-hidden="true"></i> Edit Playlist</a>
                            <form class="delete-item-form" action="{{ url('/remove-playlist-from-license')}}" method="POST" id='confirm_playlist_delete{{$play->id}}_playlist'>
                                {{ csrf_field() }}<input type="hidden" name="playlist_id" value="{{$play->id}}">
                                <button class="btn btn-sm btn-danger mt-1"><i class="fa fa-trash"></i> Delete</button>
                            </form>
                        </li>

                    @endif

                @endforeach

                </ul>

                <br/>
                <p class="text-center"><a class="btn btn-sm btn-secondary" href="/video-licenses/{{$lic->id}}/create-license-playlist"><i class="fa fa-plus" aria-hidden="true"></i> Add Playlist</a></p>
            </div>
        </div>

    </div>


 @endforeach

</div>


        <br/>
        <br/>
        <br/>


    </div>


@endsection


@section('scripts')
    <script>
        $(document).ready(function() {

            //playlist delete alert function
            $("[id^=confirm_playlist_delete]").submit(function (e) {
                var form = this;
                e.preventDefault();
                swal({
                        title: "Danger Will Robinson!",
                        text: "If you click 'Delete Playlist' this will permanently \nDELETE this Playlist from this Genre!",
                        // type: "warning",
                        showCancelButton: true,
                        confirmButtonColor: '#DD6B55',
                        confirmButtonText: 'Delete Playlist',
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

            //license delete alert function
            $("[id^=confirm_license_delete]").submit(function (e) {
                var form = this;
                e.preventDefault();
                swal({
                        title: "Danger Will Robinson!",
                        text: "If you click 'Delete Genre' this will permanently \nDELETE this Genre!",
                        // type: "warning",
                        showCancelButton: true,
                        confirmButtonColor: '#DD6B55',
                        confirmButtonText: 'Delete Genre',
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