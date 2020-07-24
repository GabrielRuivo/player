var songs = ['./assets/audio/24kmagic.mp3', './assets/audio/UptownFunk.mp3', './assets/audio/lazySong.mp3'];
var poster = ['./assets/img/24kmagic.jpg', './assets/img/img-uptownFunk.jpg', './assets/img/lazySong.jpg'];

console.log(songs.length-1)

var songTitle = document.getElementById('songTitle');
var fillBar = document.getElementById('fill');

var song = new Audio();

var currentSong = 0;

window.onload = playSong;

function playSong(){
  song.src = songs[currentSong];
  songTitle.textContent = songs[currentSong]
  .replace('./assets/audio/', '')
  .replace('.mp3', '')
  if(currentSong > 0) {
    song.play()
  } else {
    song.pause();
    disablePreButtonWhenFirst();
  }
}

function renderImgAndBg(){
  let imgAlbum = document.querySelector('#image img');
  imgAlbum.setAttribute('src', poster[currentSong])

  let imgBg = document.querySelector('#bg img');
  imgBg.setAttribute('src', poster[currentSong]);
}

renderImgAndBg();

function playSongWhenBack() {
  song.src = songs[currentSong];
  songTitle.textContent = songs[currentSong].replace('./assets/audio/', '').replace('.mp3', '');

  if(currentSong >= 0){
    song.play();
  }
}

function playOrPauseSong() {
  if(song.paused) {
    song.play();
    let playimg = document.querySelector(".play")
    playimg.setAttribute("src", "./assets/img/icons/pause.png");
    disablePreButtonWhenFirst();
    disableNextButtonWhenLast();

  } else  {
    song.pause();
    let pauseimg = document.querySelector(".play")
    pauseimg.setAttribute("src", "./assets/img/icons/play-button.png");
    disablePreButtonWhenFirst()
  }
}

song.addEventListener('timeupdate', function () {
  var position = song.currentTime / song.duration;
  fillBar.style.width = position * 100 + '%';
  console.log(parseFloat(position).toFixed(2))
})

song.addEventListener('timeupdate', function nextMusicAuto () {
  if(song.currentTime - song.duration == 0){
    if(currentSong == songs.length-1){
      song.play()
    }
    function pauseAndNext(){
      song.pause();
      let pauseimg = document.querySelector(".play")
      pauseimg.setAttribute("src", "./assets/img/play.svg");
    }
    pauseAndNext();
    currentSong++;
    playOrPauseSong();
    renderImgAndBg(); 
    playSong();
    disablePreButtonWhenFirst();
    disableNextButtonWhenLast(); 
  }
})

function next() {
  function pauseAndNext(){
    song.pause();
    let pauseimg = document.querySelector(".play")
    pauseimg.setAttribute("src", "./assets/img/play.svg");
  }
  pauseAndNext();
  
  currentSong++;
  playOrPauseSong();
  renderImgAndBg(); 
  playSong();
  disablePreButtonWhenFirst();
  disableNextButtonWhenLast(); 
}

function pre() {
  if(currentSong == 0 && song.paused) {
    disablePreButtonWhenFirst()
  }
  function pauseAndBack(){
    song.pause();
    let pauseimg = document.querySelector(".play")
    pauseimg.setAttribute("src", "./assets/img/play.svg");
  }
  pauseAndBack();
  currentSong--;
  playOrPauseSong();
  renderImgAndBg();
  playSongWhenBack();
  disablePreButtonWhenFirst();
  disableNextButtonWhenLast();
}

function disablePreButtonWhenFirst() {
  if(currentSong == 0) {
    document.getElementById('pre').disabled = true;
    console.log('back desabilitado')
  } else if (currentSong > 0) {
    document.getElementById('pre').disabled = false;
    console.log('back habilitado')
  }
}

function disableNextButtonWhenLast(){
  if(currentSong == songs.length-1){
    document.getElementById('next').disabled = true;
    console.log('next desabilitado')
  } else if (currentSong < songs.length-1){
    document.getElementById('next').disabled = false;
    console.log('next habilitado')
  }
}

