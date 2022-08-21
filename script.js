const ratingComponent = document.querySelector(".rating");
const thanksComponent = document.querySelector(".thank-you");
const submitBtn = document.querySelector(".btn-submit");
const rates = document.getElementById("rate");
const selectBtn = document.querySelector(".btn-select");

submitBtn.addEventListener("click", () => {
   thanksComponent.classList.add("hidden");
   ratingComponent.style.display = none;
})

