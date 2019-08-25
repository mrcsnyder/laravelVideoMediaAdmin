## Steps to prepare to run this project locally on your computer:

1. Download Docker Desktop from Docker Hub.  If you do not have an account at Docker Hub already then create one here:
	https://hub.docker.com/

2. After your account is created and verified (it is likely they will send you an email to verify your account with) then the next step is to log into your account and near the bottom right there is a button that says ‘Download Docker Desktop’.  Please select the appropriate operating system and log into your account.  After it has been installed then search for the program in your applications and start the application up.  It may take a few minutes to get Docker started.  Once it is started you will be able to use Docker on your machine.  Docker is fabulous because it allows you to work on the same project with the use of containers so it ensures that al developers are working with the same settings.  


## Get your Computer Ready for Laravel:

1. Install Composer Globally:

### Mac:

https://getcomposer.org/doc/00-intro.md#installation-linux-unix-macos


### Windows:  

https://getcomposer.org/doc/00-intro.md#installation-windows



## Get the Project Ready on you Local Machine to Build Docker containers:

1. Clone the laravelVideoMediaAdmin repo from my GitHub account at into your development directory with this command:


```
git clone https://github.com/mrcsnyder/laravelVideoMediaAdmin.git
```
 

2. On the Google Drive folder go into the LaravelVideoMediaAdmin-Files subfolder and download the env file (this file has the database credentials necessary for this project to work locally with the Docker containers you are about to build).  Then copy this file and add it to the root level of the laravelVideoMediaAdmin project you cloned to your development folder.  Change the name of this file to ‘.env’.  


3. Now it is time to build the Docker containers using Docker compose.  If you have never done this, then do not worry!  This is very easy, but it can take a few minutes depending on how fast your internet connection and computer are!  The files are already ready to go inside of the project so it should build without a problem!


## Build the Docker container, update composer, and migrate your database files:



1. cd into the root level of the laravelVideoMediaAdmin project and run this command: 

```
docker-compose up -d
```


2. After everything has been built check to ensure that your docker containers are ‘UP’ & running by doing this command in command prompt or terminal:
docker-compose ps



3. If all looks like it is running then perform this command (if composer was not installed then please see the “Steps to prepare to run this project locally on your computer” section at the top of this Readme and ensure that Composer is installed):
```
composer update
```

4. Next run the following command to migrate your database files:

```
php artisan migrate
```

5. Finally, open a browser and you should be able to access the Video Admin application by visiting:  
http://localhost:8080/



## Basic Video Admin Application Usage:


Here are some basics about how this application works.  If you wish to have a better demo then please feel free to send me a message or contact me and I will walk you through it!


### Add a Video:

1. The first step would be to click the ‘Add Video’ button at the top.  Next you will find a test video (mp4 named ‘test-video.mp4’) that I have added to the /public/videos folder in this project.  Copy that somewhere on your local machine, or navigate there when selecting the file you wish to upload.  Your video should be uploaded to the local storage of the project and then visible from the View Videos button.  


### Add a Genre:

2. The next step is to Add a Genre with the ‘’+ Add Genre’ button.  After adding a Genre (e.g. ‘Alternative Rock’) you will be redirected back to the Home page and your Genre should show up.  


### Add a playlist to a Genre:

3. Underneath a Genre’s card there is an ‘+ Add Playlist’ button.  Click that and enter in a name for your Playlist.  After clicking the ‘Create Playlist’ button you will be redirected back to the home page and you will see the playlist underneath its Genre.  


### Edit Playlist:

4. Next, you edit or add an uploaded video to your playlist by clicking the ‘Edit Playlist’ button underneath of an added Playlist on the home page.  When on the edit page you should see the option to update the title of your playlist and also a dropdown for you to select from uploaded videos which video you want to attach to a playlist.  If you click on the linked title of your playlist you should be able to view a responsive playlist of your video(s).    


### View Playlist:

5. On the home page underneath a Genre you will see the linked names of the playlists you added.  To view a responsive video playlist then click the linked name and a new tab will open that allows you to watch all of the videos added to a playlist.


Again, if you need help with or understanding any of this then please feel free to reach out to me and I will be happy to help!
