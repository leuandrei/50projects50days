const sounds = ['parry', 'crit', 'bonfire', 'location', 'fogwall', 'death'];

sounds.forEach(sound => {
    const btn = document.createElement('button');
    btn.classList.add('btn');

    btn.innerText = sound;

    btn.addEventListener('click', () => {
        //stopAndPlay(sound);
        document.getElementById(sound).play();
    })

    document.getElementById('buttons').appendChild(btn);
})

function stopAndPlay(song) {
    sounds.forEach(sound => {
        const stopSong = document.getElementById(sound);

        stopSong.pause();
        stopSong.currentTime = 0;
    })
    song.play();
}