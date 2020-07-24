var songs = ['./assets/audio/24kmagic.mp3', './assets/audio/UptownFunk.mp3'];
var poster = ['poster24k', 'posteruptownfunk'];

console.log(songs.length)

var songTitle = document.getElementById('songTitle');
var fillBar = document.getElementById('fill');

var song = new Audio();

var currentSong = 0;

/* window.onload = playSong; */

function playSong(){
  song.src = songs[currentSong];
  song.title = textContent = songs[currentSong];
  if(currentSong > 0 || currentSong == 0) {
    song.play()
  } else {
    song.pause();
  }
}

function playOrPauseSong() {
  if(song.paused) {
    song.play();
    let playimg = document.querySelector(".play")
    playimg.setAttribute("src", "./assets/img/pause.svg");
  } else {
    song.pause();
    let pauseimg = document.querySelector(".play")
    pauseimg.setAttribute("src", "./assets/img/play.svg");
  }
}

song.addEventListener('timeupdate', function () {
  var position = song.currentTime / song.duration;
  fillBar.style.width = position * 100 + '%';
})

function next() {
  currentSong++;
  if(currentSong > songs.length-1){
    console.log('acabou')
  }
  playSong()
}

function pre() {
  currentSong--;
  if(currentSong < 0){
    console.log('inicio')
  }
  playSong()
}

