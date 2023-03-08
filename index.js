"use strict";

const form = document.querySelector("#my-form");
const inputs = form.querySelectorAll(
  'input[type="text"], input[type="email"], input[type="tel"], input[type="password"]'
);
const successEl = document.querySelector(".success");
let error = false;

const setError = (el, message, radio) => {
  if (!radio) {
    el.focus();
  } else {
    const radioInput = el.parentElement.querySelector("input[name=gender]");
    radioInput.focus();
  }

  el.parentElement.classList.add("error");
  el.parentElement.querySelector(".error-msg").innerText = message;
  error = true;
};

const setSuccess = () => {
  successEl.classList.add("active");
  form.reset();
};

const removeError = (el) => {
  el.parentElement.classList.remove("error");
  error = false;
};

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const gender = document.querySelector('input[name="gender"]:checked');
  successEl.classList.remove("active");

  for (let i = 0; i < inputs.length; i++) {
    const input = inputs[i];
    removeError(input);

    if (!input.value) {
      setError(
        input,
        `${
          input.name.split("")[0].toUpperCase() + input.name.slice(1)
        } field is required`
      );
      return false;
    }
  }

  if (!gender)
    setError(
      document.querySelector(".radio-input"),
      "Please select a gender",
      true
    );
  else {
    removeError(document.querySelector(".radio-input"));
  }

  !error && setSuccess();
});
