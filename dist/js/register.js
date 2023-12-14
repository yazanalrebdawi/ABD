//  elements
const labels = document.querySelectorAll("#wave");
const password_input = document.getElementById("password");
const title_regeter = document.querySelector("#title");
const email_label = document.getElementsByClassName("email");
const password_label = document.getElementsByClassName("password");
const btn_register = document.getElementById("btn_register");
const email_input = document.getElementById("email");
const form = document.getElementById("form");

// wave Animation effect
labels.forEach((label) => {
  label.innerHTML = label.textContent
    .split("")
    .map(
      (letter, index) =>
        `<span style=' transition-delay:${index * 50}ms'>${letter}</span>`
    )
    .join("");
});
// change the eye icon
const eye_icon = document.querySelector(".input_shape + label + #icon");
eye_icon.addEventListener("click", chnage_password);
password_input.addEventListener("click", chnage_password);

function chnage_password() {
  if (password_input.type == "password") {
    password_input.type = "text";
    eye_icon.classList.remove("fa-eye");
    eye_icon.classList.add("fa-eye-slash");
  } else if (password_input.type == "text") {
    password_input.type = "password";
    eye_icon.classList.add("fa-eye");
    eye_icon.classList.remove("fa-eye-slash");
  }
}
// reveal library effect

const boilerplate = ScrollReveal({
  origin: top,
  distance: "80px",
  duration: 2000,
  reset: true,
});
boilerplate.reveal(title_regeter, { origin: "right" });
boilerplate.reveal(email_label, { origin: "left" });
boilerplate.reveal(password_label, { origin: "left" });
boilerplate.reveal(btn_register, { origin: "bottom", delay: 400 });
