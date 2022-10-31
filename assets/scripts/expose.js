// expose.js

window.addEventListener('DOMContentLoaded', init);


function init() {
  let sel = document.querySelector('select');
  let volume = document.querySelector('input');
  let button = document.querySelector('button');

  if(!vol_set){
    audio.volume = 0.5;
  }
 
  button.addEventListener('click', () => {
    if(on){
      jsConfetti.addConfetti();
    }
    audio.play();
  });
  sel.addEventListener('change', update_horn);
  volume.addEventListener('input',update_volume);
}


var jsConfetti = new JSConfetti();
var audio = document.querySelector('audio');
var images = document.querySelectorAll('img');
var on = 0;
var vol_set = 0;

function update_horn(event){
  const image_horn = images[0];

  if(event.target.value == "air-horn"){
    image_horn.src = 'assets/images/air-horn.svg';
    audio.src = 'assets/audio/air-horn.mp3';
    on =0;
  }
  else if(event.target.value == "car-horn"){
    image_horn.src = 'assets/images/car-horn.svg';
    audio.src = 'assets/audio/car-horn.mp3';
    on =0;
  }
  else if(event.target.value == "party-horn"){
    image_horn.src = 'assets/images/party-horn.svg';
    audio.src = 'assets/audio/party-horn.mp3';
    on =1;
  }
}

function update_volume(event){
  vol_set = 1;
  const image_volume = images[1];

  audio.volume = event.target.value /100;
  if(event.target.value == 0){
    image_volume.src = 'assets/icons/volume-level-0.svg';
  }
  else if(event.target.value < 33){
    image_volume.src = 'assets/icons/volume-level-1.svg';
  }
  else if(event.target.value < 67){
    image_volume.src = 'assets/icons/volume-level-2.svg';
  }
  else{
    image_volume.src = 'assets/icons/volume-level-3.svg';
  }
}
