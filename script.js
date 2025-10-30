// Array of available sounds
const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

// Reference to the container
const buttons = document.getElementById('buttons');

// Create one button per sound
sounds.forEach(sound => {
  const btn = document.createElement('button');
  btn.classList.add('btn');
  btn.innerText = sound;

  btn.addEventListener('click', () => {
    stopAllSounds();
    const audio = new Audio(`sounds/${sound}.mp3`);
    audio.play();
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
    const audio = new Audio(`sounds/${sound}.mp3`);
    audio.pause();
    audio.currentTime = 0;
  });
}
