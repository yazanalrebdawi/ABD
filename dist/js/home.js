const sliderContainer = document.querySelector(".slider-container");
const slideRight = document.querySelector(".right-slide");
const slideLeft = document.querySelector(".left-slide");
const upButton = document.querySelector(".up-button");
const downButton = document.querySelector(".down-button");
const slidesLength = slideRight.querySelectorAll("div").length;
let activeSlideIndex = 0;

slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`;

upButton.addEventListener("click", () => changeSlide("up"));
downButton.addEventListener("click", () => changeSlide("down"));
setInterval(() => {
  changeSlide("up");
}, 1500);
const changeSlide = (direction) => {
  const sliderHeight = sliderContainer.clientHeight;
  if (direction === "up") {
    activeSlideIndex++;
    if (activeSlideIndex > slidesLength - 1) {
      activeSlideIndex = 0;
    }
  } else if (direction === "down") {
    activeSlideIndex--;
    if (activeSlideIndex < 0) {
      activeSlideIndex = slidesLength - 1;
    }
  }

  slideRight.style.transform = `translateY(-${
    activeSlideIndex * sliderHeight
  }px)`;
  slideLeft.style.transform = `translateY(${
    activeSlideIndex * sliderHeight
  }px)`;
};
// increament section
let section = document.querySelector("section");
const couters = document.querySelectorAll(".counter");
couters.forEach((counter) => {
  counter.textContent = "0";
  function UpdateCounter() {
    const target = +counter.getAttribute("data-target");
    const c = +counter.textContent;
    const increament = target / 1200;
    if (c < target) {
      counter.textContent = `${Math.ceil(c + increament)}`;
      setTimeout(() => {
        UpdateCounter();
      }, 1);
    } else {
      counter.textContent = target;
    }
  }
  window.addEventListener("scroll", () => {
    if (window.scrollY >= section.offsetTop + 450) {
      UpdateCounter();
    }
  });
});
// registeration menu
const registeration_menu = document.getElementById("reg_menu");
const menu_btn = document.getElementById("menu-button");
menu_btn.addEventListener("click", () =>
  registeration_menu.classList.toggle("hidden")
);
