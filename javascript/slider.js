"use strict";

document.addEventListener('DOMContentLoaded', function () {
    const sliderContainer = document.querySelector('.slider-container');
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    let currentIndex = 0;

    function updateSlider() {
        const newTransformValue = -currentIndex * 100 + '%';
        slider.style.transform = 'translateX(' + newTransformValue + ')';
    }

    function moveSlider(direction) {
        if (direction === 'prev') {
            currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        } else {
            currentIndex = (currentIndex + 1) % slides.length;
        }
        updateSlider();
    }

    setInterval(function () {
        moveSlider('next');
    }, 5000);

    const nextButton = document.getElementById('nextButton');
    const prevButton = document.getElementById('prevButton');

    if (nextButton && prevButton) {
        nextButton.addEventListener('click', function () {
            moveSlider('next');
        });

        prevButton.addEventListener('click', function () {
            moveSlider('prev');
        });
    }
});
