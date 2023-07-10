const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const submit_button = document.querySelector(".submit_button");

const label_name = document.getElementById("label_name");
const label_lastName = document.getElementById("label_lastName");
const label_email = document.getElementById("label_email");
const label_password = document.getElementById("label_password");

const icon_name = document.getElementById("icon_name");
const icon_lastName = document.getElementById("icon_lastName");
const icon_email = document.getElementById("icon_email");
const icon_password = document.getElementById("icon_password");

function onClick(el) {
  el.preventDefault();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const loginData = {
    firstName: firstName.value,
    lastName: lastName.value,
    email: email.value,
    password: password.value,
  };
  if (email.value === "" || !emailRegex.test(email.value)) {
    icon_email.classList.add("error_icon");
    label_email.classList.add("error_label");
    email.classList.add("error_input");
  } else {
    icon_email.classList.remove("error_icon");
    label_email.classList.remove("error_label");
    email.classList.remove("error_input");
  }
  if (firstName.value === "") {
    icon_name.classList.add("error_icon");
    label_name.classList.add("error_label");
    firstName.classList.add("error_input");
  } else {
    icon_name.classList.remove("error_icon");
    label_name.classList.remove("error_label");
    firstName.classList.remove("error_input");
  }
  if (lastName.value === "") {
    icon_lastName.classList.add("error_icon");
    label_lastName.classList.add("error_label");
    lastName.classList.add("error_input");
  } else {
    icon_lastName.classList.remove("error_icon");
    label_lastName.classList.remove("error_label");
    lastName.classList.remove("error_input");
  }
  if (password.value === "") {
    icon_password.classList.add("error_icon");
    label_password.classList.add("error_label");
    password.classList.add("error_input");
  } else {
    icon_password.classList.remove("error_icon");
    label_password.classList.remove("error_label");
    password.classList.remove("error_input");
  }
  localStorage.setItem("loginData", JSON.stringify(loginData));
}
submit_button.addEventListener("click", onClick);
