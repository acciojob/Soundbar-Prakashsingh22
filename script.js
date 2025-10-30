// List of sounds (must match file names in sounds folder)
const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

// Get the container element
const buttons = document.getElementById('buttons');

// Create buttons for each sound
sounds.forEach(sound => {
  const btn = document.createElement('button');
  btn.classList.add('btn');
  btn.innerText = sound;

  const audio = document.createElement('audio');
  audio.src = `sounds/${sound}.mp3`;
  audio.id = sound;
  document.body.appendChild(audio);

  btn.addEventListener('click', () => {
    stopAllSounds();
    document.getElementById(sound).play();
  });

  buttons.appendChild(btn);
});

// Create stop button
const stopBtn = document.createElement('button');
stopBtn.classList.add('btn', 'stop');
stopBtn.innerText = 'stop';
stopBtn.addEventListener('click', stopAllSounds);
buttons.appendChild(stopBtn);

// Function to stop all sounds
function stopAllSounds() {
  sounds.forEach(sound => {
    const audio = document.getElementById(sound);
    audio.pause();
    audio.currentTime = 0;
  });
}
