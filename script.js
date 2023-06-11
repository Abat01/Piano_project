const notes = document.querySelectorAll('.note')
// -----------------------given a note by default
let allAudios =  [],audio = new Audio('./audios/a.wav')

//-----------------------we must to apply function to all our note elements
const pianoPlay =  (note) => {
  audio.src = `./audios/${note}.wav`
  audio.play();

  const clicKey = document.querySelector(`[data-key="${notes}]"`)
  clicKey.classList.add('active')
  setTimeout(()=> {
 clicKey.classList.remove("active");
  },150)
}

//-------------------- clickable bolmasy uchin  adding addEventListener
notes.forEach(note => {
  allAudios.push(note.dataset.key)
  // console.log(note.dataset.key);
  note.addEventListener('click', () => pianoPlay(note.dataset.key)) 

})


const pressKey = (e)=> {
// ----------synansh again   ---->console.log(e);
pianoPlay(e.key)
}

document.addEventListener("keydown", pressKey)


function slideVolume(e){
audio.volume = e.target.value;
}
volume.addEventListener('input', slideVolume)