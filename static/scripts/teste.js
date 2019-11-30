const playerElement = document.querySelector('#my-player');
const controls = playerElement.querySelector('.controls');
const information = playerElement.querySelector('.information')
const progressTotal = information.querySelector('.totalProgress')
const progress = progressTotal.querySelector('.currentProgress')

const playBtn = controls.querySelector('#play');
const pauseBtn = controls.querySelector('#pause');
const forwardBtn = controls.querySelector('#forward');
const backwardBtn = controls.querySelector('#backward');

const audioElement = playerElement.querySelector('audio');

playBtn.addEventListener('click', () => {
    audioElement.play();
    document.getElementById('play').style.display = 'none';
    document.getElementById('pause').style.display = 'flex'
});

pauseBtn.addEventListener('click', () => {
    audioElement.pause();
    document.getElementById('pause').style.display = 'none';
    document.getElementById('play').style.display = 'flex'
})

forwardBtn.addEventListener('click', () => {
    audioElement.currentTime += 10;
});

backwardBtn.addEventListener('click', () => {
    audioElement.currentTime -= 10;
});

audioElement.addEventListener('timeupdate', ()  => {
    const {
        duration,
        currentTime,
    } = audioElement;
    progress.style.width = `${ 100 * (currentTime / duration) }%`;
});

progressTotal.addEventListener('click', (event) => {

    let positionX = event.clientX;
    let overflow = controls.offsetWidth;
    progress.style.width = `${positionX - overflow}px`;

    let perCent = 100 * (progress.offsetWidth / progressTotal.offsetWidth);
    audioElement.currentTime = (audioElement.duration * perCent) / 100;
})





