'use strict';
import { initBurger } from "./burger.js";
 
initBurger();

let registrationForm = document.getElementById("registrationForm");
let feedbackForm = document.getElementById("feedbackForm");
let logInForm = document.getElementById("logInForm");

registrationForm.addEventListener("submit", function (event) {
  event.preventDefault();
  validateRegistrationForm();
});

feedbackForm.addEventListener("submit", function (ev) {
  ev.preventDefault();
  validateFeedbackForm();
});

logInForm.addEventListener("submit", function (e) {
  e.preventDefault();
  validateLogInForm();
});

function validateRegistrationForm(events) {
  let regEmailInput = document.getElementById("regEmail");
  let regPasswordInput = document.getElementById("regPassword");
  let regPasswordInput2 = document.getElementById("regPassword2");
  let regEmailError = document.getElementById("regEmailError");
  let regPasswordError = document.getElementById("regPasswordError");
  let regPasswordError2 = document.getElementById("regPasswordError2");
  let radioElements = document.querySelectorAll('[name="gender"]');
  let checkBoxAgree = document.getElementById("checkfield").checked;
  let genderError = document.getElementById("errorGender");
  let agreeError = document.getAnimations("errorAgree");

  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(regEmailInput.value)) {
    regEmailError = "Please enter a valid email address";
  } else {
    regEmailError.textContent = "";
  }

  // Password should be at least 6 characters
  if (regPasswordInput.value.length < 6) {
    regPasswordError.textContent = "Password should be at least 6 characters";
  } else {
    regPasswordError.textContent = "";
  }

  if (regPasswordInput.value !== regPasswordInput2.value) {
    regPasswordError2.textContent = "Passwords do not match";
  } else {
    regPasswordError2.textContent = "";
  }

  // radio
  let gender = false;
  radioElements.forEach((item) => {
    if (item.checked) {
      gender = true;
    }
  });

  if (!gender) {
    genderError.textContent = "Please select your gender";
  } else {
    genderError.textContent = "";
  }

  // checkbox
  if (!checkBoxAgree) {
    agreeError.textContent = "You must agree to our terms and conditions";
  } else {
    agreeError.textContent = "";
  }

  // If no errors, submit the form
  if (
    regEmailError.textContent === "" &&
    regPasswordError.textContent === "" &&
    regPasswordError2.textContent === "" &&
    genderError.textContent === "" &&
    agreeError.textContent === ""
  ) {
    events.target.submit();
  }
}

// log in
let logInBtn = document.getElementById("logInBtn");
let logInDiv = document.getElementById("logIn");

logInBtn.addEventListener("click", function () {
  logInDiv.classList.toggle("show-form");
});

function validateLogInForm(event) {
  let logInEmailInput = document.getElementById("logInEmail");
  let logInPasswordInput = document.getElementById("logInPassword");
  let logInEmailError = document.getElementById("logInEmailError");
  let logInPasswordError = document.getElementById("logInPasswordError");

  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(logInEmailInput.value)) {
    logInEmailError.textContent = "Please enter a valid email address";
  } else {
    logInEmailError.textContent = "";
  }

  // Password should be at least 6 characters
  if (logInPasswordInput.value.length < 6) {
    logInPasswordError.textContent = "Password should be at least 6 characters";
  } else {
    logInPasswordError.textContent = "";
  }

  // If no errors, submit the form
  if (
    (logInEmailError.textContent === "") &
    (logInPasswordError.textContent === "")
  ) {
    event.target.submit();
  }
}

// feedback
function validateFeedbackForm() {
  let feedbackEmailInput = document.getElementById("feedbackEmail");
  let feedbackMessageInput = document.getElementById("feedbackMessage");
  let feedbackEmailError = document.getElementById("feedbackEmailError");
  let feedbackMessageError = document.getElementById("feedbackMessageError");

  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(feedbackEmailInput.value)) {
    feedbackEmailError.textContent = "Please enter a valid email address";
  } else {
    feedbackEmailError.textContent = "";
  }

  if (feedbackMessageInput.value.trim() === "") {
    feedbackMessageError.textContent = "Feedback message cannot be empty";
  } else {
    feedbackMessageError.textContent = "";
  }
}

let password = document.getElementById("regPassword");
let password2 = document.getElementById("regPassword2");
let password3 = document.getElementById("logInPassword");
let eyeIcon = document.getElementById("eyeIcon");
let eyeIcon2 = document.getElementById("eyeIcon2");
let eyeIcon3 = document.getElementById("eyeIcon3");

// first eye
eyeIcon.addEventListener("click", function () {
  if (password.type == "password") {
    password.setAttribute("type", "text");
    eyeIcon.classList.remove("fa-eye");
    eyeIcon.classList.add("fa-eye-slash");
  } else {
    password.setAttribute("type", "password");
    eyeIcon.classList.remove("fa-eye-slash");
    eyeIcon.classList.add("fa-eye");
  }
});
// second eye
eyeIcon2.addEventListener("click", function () {
  if (password2.type == "password") {
    password2.setAttribute("type", "text");
    eyeIcon2.classList.remove("fa-eye");
    eyeIcon2.classList.add("fa-eye-slash");
  } else {
    password2.setAttribute("type", "password");
    eyeIcon2.classList.remove("fa-eye-slash");
    eyeIcon2.classList.add("fa-eye");
  }
});
// therd eye
eyeIcon3.addEventListener("click", function () {
  if (password3.type == "password") {
    password3.setAttribute("type", "text");
    eyeIcon3.classList.remove("fa-eye");
    eyeIcon3.classList.add("fa-eye-slash");
  } else {
    password3.setAttribute("type", "password");
    eyeIcon3.classList.remove("fa-eye-slash");
    eyeIcon3.classList.add("fa-eye");
  }
});
// burger
let burgerIcon = document.getElementById("burgerIcon");
let mainNav = document.getElementById("mainNav");

burgerIcon.addEventListener("click", function () {
  mainNav.classList.toggle("showNav");
});

window.addEventListener("resize", function () {
  if (window.innerWidth > 768) {
    mainNav.classList.remove("showNav");
  }
});

// cat owners
let currentPage = 1;
let totalPages;

function getUsers(page) {
  let requist = new XMLHttpRequest();

  requist.addEventListener("load", function () {
    let gotInfoText = requist.responseText;
    let gotIfoJs = JSON.parse(gotInfoText);

    let fragment = new DocumentFragment();
    gotIfoJs.data.forEach((item) => {
      let li = document.createElement("li");
      li.innerText = `${item.first_name} ${item.last_name}`;
      li.classList = "cat-owners-li";
      let image = document.createElement("img");
      image.src = item.avatar;
      image.setAttribute("alt", "user");
      image.classList.add("image-user");

      li.appendChild(image);

      fragment.appendChild(li);
    });
    document.getElementById("ul-id").innerHTML = " ";
    document.getElementById("ul-id").appendChild(fragment);

    totalPages = gotIfoJs.total_pages;
  });

  requist.addEventListener("error", function () {
    let p = document.createElement("p");
    p.innerText = "Server Error";
    document.getElementById("div-id").appendChild(p);
  });

  requist.open("GET", "https://reqres.in/api/users?page=" + page);
  requist.send();
}

getUsers(currentPage);

// header scroll
let myHeader = document.getElementById("myHeader");

window.onscroll = function () {
  if (window.scrollY >300) {
    myHeader.classList.add("hidden");
  } else {
    myHeader.classList.remove("hidden");
  }
};