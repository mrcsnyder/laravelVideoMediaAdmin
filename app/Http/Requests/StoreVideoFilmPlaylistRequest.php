<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

use Illuminate\Support\Facades\Validator;


use Illuminate\Support\Facades\Redirect;

use Illuminate\Support\Facades\DB;



class StoreVideoFilmPlaylistRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        // extends Validator only for this request which is different than most because it is a composite primary key we are checking for...

        Validator::extend( 'composite_unique_video', function ( $attribute, $value, $parameters, $validator ) {

            // remove first parameter and assume it is the table name
            $table = array_shift( $parameters );

            // start building the conditions
            $fields = [ $attribute => $value ]; // current field

//            if(!is_int($fields)){
//
//                return Redirect::back()->with('message','Track Added to Playlist!');
//            }

//            dd($fields);

            if($fields["video_id"]=="Select Video for Playlist") {

                return Redirect::back()->with('alert','Please choose a track!');


//                return 'Please choose a track';

            }


//            dd(($fields['track_id']));

            // iterates over the other parameters and build the conditions for all the required fields
            while ( $field = array_shift( $parameters ) ) {
                $fields[ $field ] = StoreVideoFilmPlaylistRequest::get( $field );

            }

            // query the table with all the conditions
            $result = DB::table( $table )->select( DB::raw( 1 ) )->where( $fields )->first();

            return empty( $result );
        });
//        , 'Sorry, you already added that track to this playlist! :(' );


        return [

            'video_id' => 'string|composite_unique_video:playlist_video,video_id,playlist_id',


        ];
    }
}
