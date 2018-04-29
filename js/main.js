const butconf = document.querySelector('button#confirmar');
const playera = document.querySelector('audio.player');
const playerv = document.querySelector('video.player');
const butdesacel = document.querySelector('button#desacelerar');
const butacel = document.querySelector('button#acelerar');
const butreset = document.querySelector('button#reset');
const input = document.querySelector('input');
const span = document.querySelector('span#playspeed');
const div = document.querySelector('div');
const butskip = document.querySelector('button#skip');
const butback = document.querySelector('button#back');
const butstart = document.querySelector('button#start');
const aux1 = 0.25;
const aux2 = 8;
const aux3 = 10;
let playspeed = 1;
span.innerHTML = playspeed + 'x';
butconf.addEventListener('click', function() {
    const reader = new FileReader(input.files[0]);
    reader.addEventListener('loadend', function(e) {
        div.style.display = 'block';
        if (reader.result.includes('audio') === true) {
            playera.src = reader.result;
            playera.style.display = 'block';
            playerv.src = '';
            playerv.style.display='none';
        } else if (reader.result.includes('video') === true) {
            playerv.src = reader.result;
            playerv.style.display = 'block';
            playera.src = '';
            playera.style.display = 'none';
        }
        playspeed = 1;
        span.innerHTML = playspeed + 'x';
    });
    if (input.files[0] !== undefined) {
        reader.readAsDataURL(input.files[0]);
    }
});
butacel.addEventListener('click', function() {
    if (playspeed < aux2) {
        playspeed = playspeed + aux1;
    }
    span.innerHTML = playspeed + 'x';
    if (playera.style.display === 'block') {
        playera.playbackRate = playspeed;
    } else if (playerv.style.display === 'block') {
        playerv.playbackRate = playspeed;
    }
});
butdesacel.addEventListener('click', function() {
    if (playspeed > aux1) {
        playspeed = playspeed-aux1;
    }
    span.innerHTML = playspeed + 'x';
    if (playera.style.display === 'block') {
        playera.playbackRate = playspeed;
    } else if (playerv.style.display === 'block') {
        playerv.playbackRate = playspeed;
    }
});
butreset.addEventListener('click', function() {
    playspeed = 1;
    span.innerHTML = playspeed+'x';
    if (playera.style.display === 'block') {
        playera.playbackRate = playspeed;
    } else if (playerv.style.display === 'block') {
        playerv.playbackRate = playspeed;
    }
});
butskip.addEventListener('click', function() {
    if (playera.style.display === 'block') {
        playera.currentTime += aux3;
    } else if (playerv.style.display === 'block') {
        playerv.playbackRate += aux3;
    }
});
butback.addEventListener('click', function() {
    if (playera.style.display === 'block') {
        playera.currentTime -= aux3;
    } else if (playerv.style.display === 'block') {
        playerv.playbackRate -= aux3;
    }
});
butstart.addEventListener('click', function() {
    if (playera.style.display === 'block') {
        playera.currentTime = 0;
    } else if (playerv.style.display === 'block') {
        playerv.playbackRate = 0;
    }
});
