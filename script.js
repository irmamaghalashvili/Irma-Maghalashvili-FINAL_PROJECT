"use strict";

    document.addEventListener('DOMContentLoaded', function () {
        const registrationForm = document.getElementById('registrationForm');
        const feedbackForm = document.getElementById('feedbackForm');

        registrationForm.addEventListener('submit', function (event) {
            event.preventDefault();
            validateRegistrationForm();
        });

        feedbackForm.addEventListener('submit', function (event) {
            event.preventDefault();
            validateFeedbackForm();
        });

        function validateRegistrationForm() {
            const regEmailInput = document.getElementById('regEmail');
            const regPasswordInput = document.getElementById('regPassword');
            const regEmailError = document.getElementById('regEmailError');
            const regPasswordError = document.getElementById('regPasswordError');

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailRegex.test(regEmailInput.value)) {
                regEmailError.textContent = 'Please enter a valid email address';
            } else {
                regEmailError.textContent = '';
            }

            // Password should be at least 6 characters
            if (regPasswordInput.value.length < 6) {
                regPasswordError.textContent = 'Password should be at least 6 characters';
            } else {
                regPasswordError.textContent = '';
            }
        }

        function validateFeedbackForm() {
            const feedbackEmailInput = document.getElementById('feedbackEmail');
            const feedbackMessageInput = document.getElementById('feedbackMessage');
            const feedbackEmailError = document.getElementById('feedbackEmailError');
            const feedbackMessageError = document.getElementById('feedbackMessageError');

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailRegex.test(feedbackEmailInput.value)) {
                feedbackEmailError.textContent = 'Please enter a valid email address';
            } else {
                feedbackEmailError.textContent = '';
            }

            if (feedbackMessageInput.value.trim() === '') {
                feedbackMessageError.textContent = 'Feedback message cannot be empty';
            } else {
                feedbackMessageError.textContent = '';
            }
        }
    });




    document.addEventListener('DOMContentLoaded', function () {
        const burgerIcon = document.getElementById('burgerIcon');
        const mainNav = document.getElementById('mainNav');
    
        burgerIcon.addEventListener('click', function () {
            mainNav.classList.toggle('showNav');
        });
    
        window.addEventListener('resize', function () {
            if (window.innerWidth > 768) {
                mainNav.classList.remove('showNav');
            }
        });
    });

    

    
