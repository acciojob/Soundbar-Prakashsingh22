const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

const buttonsContainer = document.getElementById('buttons');

// Create buttons dynamically
sounds.forEach(sound => {
  const btn = document.createElement('button');
  btn.classList.add('btn');
  btn.innerText = sound;

  btn.addEventListener('click', () => {
    stopAllSounds();
    const audio = new Audio(`sounds/${sound}.mp3`);
    audio.play();
  });

  buttonsContainer.appendChild(btn);
});

// Add a stop button
const stopBtn = document.createElement('button');
stopBtn.classList.add('btn', 'stop');
stopBtn.innerText = 'stop';
stopBtn.addEventListener('click', stopAllSounds);
buttonsContainer.appendChild(stopBtn);

// Stop function
function stopAllSounds() {
  sounds.forEach(sound => {
    const audio = new Audio(`sounds/${sound}.mp3`);
    audio.pause();
    audio.currentTime = 0;
  });
}
