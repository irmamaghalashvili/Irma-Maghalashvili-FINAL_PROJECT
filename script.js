"use strict";

document.addEventListener("DOMContentLoaded", function () {
  const registrationForm = document.getElementById("registrationForm");
  const feedbackForm = document.getElementById("feedbackForm");

  registrationForm.addEventListener("submit", function (event) {
    event.preventDefault();
    validateRegistrationForm();
  });

  feedbackForm.addEventListener("submit", function (event) {
    event.preventDefault();
    validateFeedbackForm();
  });

  function validateRegistrationForm() {
    const regEmailInput = document.getElementById("regEmail");
    const regPasswordInput = document.getElementById("regPassword");
    const regEmailError = document.getElementById("regEmailError");
    const regPasswordError = document.getElementById("regPasswordError");

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(regEmailInput.value)) {
      regEmailError.textContent = "Please enter a valid email address";
    } else {
      regEmailError.textContent = "";
    }

    // Password should be at least 6 characters
    if (regPasswordInput.value.length < 6) {
      regPasswordError.textContent = "Password should be at least 6 characters";
    } else {
      regPasswordError.textContent = "";
    }
  }

  function validateFeedbackForm() {
    const feedbackEmailInput = document.getElementById("feedbackEmail");
    const feedbackMessageInput = document.getElementById("feedbackMessage");
    const feedbackEmailError = document.getElementById("feedbackEmailError");
    const feedbackMessageError = document.getElementById(
      "feedbackMessageError"
    );

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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
});

document.addEventListener("DOMContentLoaded", function () {
  const burgerIcon = document.getElementById("burgerIcon");
  const mainNav = document.getElementById("mainNav");

  burgerIcon.addEventListener("click", function () {
    mainNav.classList.toggle("showNav");
  });

  window.addEventListener("resize", function () {
    if (window.innerWidth > 768) {
      mainNav.classList.remove("showNav");
    }
  });
});

// cat owners
let currentPage = 1;
let totalPages;

function getUsers(page) {
  let requist = new XMLHttpRequest();

  requist.addEventListener("load", function () {
    let gotInfoText = requist.responseText;
    let gotIfoJs = JSON.parse(gotInfoText);

    const fragment = new DocumentFragment();
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
