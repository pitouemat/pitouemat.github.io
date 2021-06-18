let audioPlayer = document.getElementById('audioPlayer');

let loaded = false;

let playBtn = document.getElementById('playBtn');
let pauseBtn = document.getElementById('pauseBtn');

document.getElementById('pauseBtn').addEventListener('click', (e) => {
    e.preventDefault();

    playBtn.style.display = 'inline';
    pauseBtn.style.display = 'none';

    audioPlayer.pause()


    return false;
});


document.getElementById('playBtn').addEventListener('click', (e) => {
    e.preventDefault();

    playBtn.style.display = 'none';
    pauseBtn.style.display = 'inline';

    audioPlayer.play()


    return false;
});

const playSong = (file) => {
    if (loaded == false){
        audioPlayer.innerHTML = `<source src = "`+file+`" type = "audio/mp3" />`;
        loaded = true;
    }

    audioPlayer.play();

    playBtn.style.display = "none";
    pauseBtn.style.display = "inline";
}

document.querySelectorAll('div.main_col').forEach(item =>{
    item.addEventListener('click',event =>{
        let image = item.getAttribute('data-image');
        let artist = item.getAttribute('data-artist');
        let song = item.getAttribute('data-song');
        let file = item.getAttribute('data-file');

        let PlayerArtsitComponent = document.getElementById('player_artist')

        PlayerArtsitComponent.innerHTML = `<img src ="`+image+`" /> <h3>`+artist+`<br><span>`+song+`</span></h3>`

        playSong(file);
        
    })
})

document.querySelectorAll('div.image_music').forEach(item =>{
    item.addEventListener('click', event =>{
        let image = item.getAttribute('data-image');
        let artist = item.getAttribute('data-artist');
        let song = item.getAttribute('data-song')
        let file = item.getAttribute('data-file');

        let PlayerArtsitComponent = document.getElementById('player_artist')

        PlayerArtsitComponent.innerHTML = `<img src ="`+image+`" /> <h3>`+artist+`<br><span>`+song+`</span></h3>`

        playSong(file);

    })
})
