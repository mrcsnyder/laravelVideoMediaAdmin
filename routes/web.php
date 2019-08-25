<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

//resource routes for Video Tracks...
//ADD MIDDLEWARE- - POWER!
Route::resource('/videos', 'VideosController');

//resource routes for Video Genres...
//ADD MIDDLEWARE- - POWER!
Route::resource('/video-licenses', 'VideoLicensesController', ['except' => ['show']]);

//show page for public facing video licenses...
Route::get('/video-licenses/{id}', ['as' => 'video-admin.video-licenses.show', 'uses' => 'VideoLicensesController@show']);

//video license playlist route...
//ADD MIDDLEWARE- - POWER!
Route::get('/video-licenses/{id}/create-license-playlist', 'VideoLicensesController@createLicensePlaylist');

//store playlist associated with license...
//ADD MIDDLEWARE- - POWER!
Route::post('/create-licensed-playlist', 'VideoLicensesController@storeLicensePlaylist');

//resource routes for Audio Playlists...
//ADD MIDDLEWARE- - POWER!
Route::resource('/', 'VideoPlaylistsController', ['except' => ['show, edit, update']]);

//custom route for editing playlists (adding videos to playlist, removing, and updating the title of the playlist)
Route::get('/playlists-edit/{id}/edit', 'VideoPlaylistsController@edit')->name('playlists-edit');

//custom route for editing playlist's title from playlist edit page...
Route::patch('/playlists-update/{id}', 'VideoPlaylistsController@update')->name('playlists-update');


//show page for public facing playlist...
Route::get('/playlists/{id}', ['as' => 'video-admin.playlists.show', 'uses' => 'VideoPlaylistsController@show']);

//audio license playlist route...
//ADD MIDDLEWARE- - POWER!
Route::get('/video-licenses/{id}/create-license-playlist', 'VideoLicensesController@createLicensePlaylist');

//store playlist associated with license...
//ADD MIDDLEWARE- - POWER!
Route::post('/create-licensed-playlist', 'VideoLicensesController@storeLicensePlaylist');

//add track to playlist (edit playlist view)...
//ADD MIDDLEWARE- - POWER!
Route::post('/video_playlist', 'VideoPlaylistsController@addVideo')->name('/video_playlist');

//remove track from playlist...
//ADD MIDDLEWARE- - POWER!
Route::post('/remove-from-playlist', 'VideoPlaylistsController@removeTrack');

//remove playlist from license...
//ADD MIDDLEWARE- - POWER!
Route::post('/remove-playlist-from-license', 'VideoLicensesController@removePlaylist');


