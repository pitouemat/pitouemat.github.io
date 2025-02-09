let audioPlayer = document.getElementById('audioPlayer');
let playBtn = document.getElementById('playBtn');
let pauseBtn = document.getElementById('pauseBtn');
let progressBar = document.getElementById('progressBar');

// Botão de pausa
pauseBtn.addEventListener('click', (e) => {
    e.preventDefault();
    playBtn.style.display = 'inline';
    pauseBtn.style.display = 'none';
    audioPlayer.pause();
    return false;
});

// Botão de play
playBtn.addEventListener('click', (e) => {
    e.preventDefault();
    playBtn.style.display = 'none';
    pauseBtn.style.display = 'inline';
    audioPlayer.play();
    return false;
});


const playSong = (file) => {
    audioPlayer.src = file;
    audioPlayer.play();
    playBtn.style.display = "none";
    pauseBtn.style.display = "inline";
};


document.querySelectorAll('div.card_music').forEach(item => {
    item.addEventListener('click', event => {
        let image = item.getAttribute('data-image');
        let artist = item.getAttribute('data-artist');
        let song = item.getAttribute('data-song');
        let file = item.getAttribute('data-file');

        let PlayerArtistComponent = document.getElementById('player_artist');
        PlayerArtistComponent.innerHTML = `<img src ="${image}" /> <h3>${artist}<br><span>${song}</span></h3>`;

        playSong(file);

        let player = document.querySelector('div.player');
        player.style.visibility = 'visible';
    });
});


audioPlayer.addEventListener('timeupdate', () => {
    if (!isNaN(audioPlayer.duration)) {
        progressBar.max = audioPlayer.duration;
        progressBar.value = audioPlayer.currentTime;
    }
});


progressBar.addEventListener('input', () => {
    let wasPlaying = !audioPlayer.paused; 
    audioPlayer.currentTime = progressBar.value;
    if (wasPlaying) {
        audioPlayer.play(); 
    }
});
