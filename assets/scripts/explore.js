// explore.js

window.addEventListener('DOMContentLoaded', init);

var voices;
const synth = window.speechSynthesis;
const voiceSelect = document.querySelector('select');
const inputTxt = document.querySelector('textarea');
const sel = document.querySelector('select');
const image = document.querySelector('img');
const btn = document.querySelector('button');

let selectedVoice = 0;


function init() {
  
  synth.addEventListener('voiceschanged', populateVoice);
  sel.addEventListener('change',update_voice);
  btn.addEventListener('click',speak)

}

function speak(){
  const utterThis = new SpeechSynthesisUtterance(inputTxt.value);
  utterThis.voice = voices[selectedVoice];
  synth.speak(utterThis);
  utterThis.addEventListener('start',()=>{
    image.src = 'assets/images/smiling-open.png';
  });
  utterThis.addEventListener('end',()=>{
    image.src = 'assets/images/smiling.png';
  });
}

function populateVoice(){
  voices = synth.getVoices();
  for (let i = 0; i < voices.length ; i++) {
    const option = document.createElement('option');
    option.textContent = `${voices[i].name} (${voices[i].lang})`;
    option.value = i;
    voiceSelect.appendChild(option);
  }
}
function update_voice(event){
  selectedVoice = event.target.value;
}

