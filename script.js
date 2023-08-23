/**
 * VIDEO JS
 * Plays and closes both videos, and restarts the videos from the beginning.
 */
function playVideo(videoId) {
    var video = document.getElementById(videoId);
    video.currentTime = 0; // Reset video to start
    video.play();
}

function pauseVideo(videoId) {
    var video = document.getElementById(videoId);
    video.pause();
    video.currentTime = 0;
}

document.querySelector("#play-btn-1").addEventListener("click", function () {
    playVideo("video1");
});

document.querySelector("#close-btn-1").addEventListener("click", function () {
    pauseVideo("video1");
});


// Review Slider 
const slider1 = new Splide('#first-slider', {
    type: 'loop',
    perPage: 1,
    perMove: 1,
    pagination: false,
    arrows: false,
    focus: 0,
    breakpoints: {
        991: {
            perPage: 1,
        },
        767: {
            perPage: 1,
        }
    }
});

slider1.mount();

btnNext.addEventListener('click', e => {
    slider1.go('+1');
});

btnPrev.addEventListener('click', e => {
    slider1.go('-1');
});

// Upcoming Webinar Slider 
const slider2 = new Splide('#second-slider', {
    type: 'loop',
    perPage: 2,
    perMove: 1,
    gap: 30,
    pagination: false,
    arrows: false,
    focus: 0,
    breakpoints: {
        991: {
            perPage: 1,
        },
        767: {
            perPage: 1,
        }
    }
});

slider2.mount();

btnNext2.addEventListener('click', e => {
    slider2.go('+1');
});

btnPrev2.addEventListener('click', e => {
    slider2.go('-1');
});
