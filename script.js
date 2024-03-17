const card = document.querySelector(".card");
const ball = document.querySelector(".ball")

card.addEventListener("mouseover", function () {
    ball.style.top = "66%";
    ball.style.left = "20%";

})
card.addEventListener("mouseout", function () {
    ball.style.top = "8%";
    ball.style.left = "50%";
})