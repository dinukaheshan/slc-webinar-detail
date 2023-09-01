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


// Disabling form submissions if there are invalid fields
(function () {
    'use strict';

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation');

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault();
                    event.stopPropagation();
                }

                form.classList.add('was-validated');
            }, false);
        });
})();


// Create a function to initialize the phone number input
function initializePhoneNumberInput(inputId, countryDropdownId) {
    var phoneInput = document.querySelector("#" + inputId);
    var countryDropdown = document.querySelector("#" + countryDropdownId);

    // Initialize the phone number input
    var phone_number = window.intlTelInput(phoneInput, {
        preferredCountries: ["gb"],
        separateDialCode: true,
        allowDropdown: false,
        utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
    });

    // Change country code using select dropdown
    countryDropdown.addEventListener("change", function () {
        var selectedOption = countryDropdown.options[countryDropdown.selectedIndex];
        var countryData = selectedOption.getAttribute("data-country-code");

        // Change the preferred country
        phone_number.setCountry(countryData);
    });
}

// Call the initialization function for both phone inputs when the DOM is ready
document.addEventListener("DOMContentLoaded", function () {
    initializePhoneNumberInput("phone", "inputCountry");
    initializePhoneNumberInput("phone-1", "inputCountry-1");
});
