let submitButton = document.querySelector(".submit__button");
let ratingButtons = document.querySelectorAll(".rating__button");
let ratingNumberBox = document.querySelector(".rating__number");
let ratingNumber = 0;
let ratingContainer = document.querySelector(".rating__container");
let thankyouContainer = document.querySelector(".thankyou__container");


ratingButtons.forEach((ratingButton) => {
  ratingButton.addEventListener("click", setRating);
});

function setRating() {
  const rating = this.innerHTML;
  ratingNumber = rating;
  ratingButtons.forEach((ratingButton) => {
    ratingButton.classList.remove("rating__button--active");
    if (ratingButton.innerHTML <= rating) {
      ratingButton.classList.add("rating__button--active");
    }
  });

  submitButton.addEventListener("click", () => {
    ratingContainer.classList.add("container--hide");
    thankyouContainer.classList.remove("container--hide");
    ratingNumberBox.innerHTML = ratingNumber;
  });
}
