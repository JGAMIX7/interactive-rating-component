const ratingComponent = document.querySelector(".rating");
const thanksComponent = document.querySelector(".thank-you");
const submitBtn = document.querySelector(".btn-submit");
const selectBtn = document.querySelectorAll(".btn-select");
const rating = document.getElementById("rate");

submitBtn.addEventListener("click", () => {
   ratingComponent.classList.add("hidden");
   thanksComponent.classList.remove("hidden");
});

selectBtn.forEach((rate) => {
   rate.addEventListener("click", () => {
      rating.innerHTML = rate.innerHTML;
   });
});