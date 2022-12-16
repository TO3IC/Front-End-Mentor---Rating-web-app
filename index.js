var form = document.querySelector(".rating");
var thank = document.querySelector(".thank");
var ratingAmount = document.querySelector(".rating-amount");
var ratingradio = document.querySelectorAll(".rating-radio");
var rate = null;

ratingradio.forEach((e) => {
  e.addEventListener("click", () => {
    rate = e.value;
  });
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  form.style.display = "none";
  thank.style.display = "flex";
  ratingAmount.innerHTML = `You selected ${rate} out of 5!`;
});
