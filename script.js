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


// Get all the phone input field elements
const phoneInputFields = document.querySelectorAll("input[type='tel']");

// Loop through all the phone input fields
phoneInputFields.forEach(phoneInputField => {
    // Initialize the phone input with preferred countries
    const phoneInput = window.intlTelInput(phoneInputField, {
        preferredCountries: ["gb", "us"],
        utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
    });

    //deny enter letters and spcial characters
    phoneInputField.addEventListener("beforeinput", event => {
        const input = event.data;
        if (event.inputType === "insertText" && !/^[0-9]+$/.test(input)) {
            event.preventDefault();
        }
    });

    // Add a submit event listener to the parent form element
    phoneInputField.form.addEventListener("submit", () => {
        // Get the selected country data
        const selectedCountryData = phoneInput.getSelectedCountryData();

        // Get the input value in the E.164 format for the selected country
        const inputNumber = phoneInput.getNumber(intlTelInputUtils.numberFormat.E164);

        // Get the country code from the input number
        const countryCode = inputNumber.substring(1, selectedCountryData.dialCode.length + 1);

        // Set the input field value to the formatted phone number and the country code
        phoneInputField.value = `${phoneInput.getNumber()}`;
    });
});