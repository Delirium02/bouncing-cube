const cube = document.querySelector(".cube");
const bounceButton = document.querySelector(".bounce-button");

bounceButton.addEventListener("click", () => {
    cube.style.animation = "bounce 1s ease-in-out";

    setTimeout(() => {
        cube.style.animation = "";
    }, 1000);
})