const cube = document.querySelector(".cube");
const bounceButton = document.querySelector(".bounce-button");
const secretButton = document.querySelector(".hidden-button");
const hiddenText = document.querySelector(".text")
const resetButton = document.querySelector(".reset-button")

const buttons = document.querySelectorAll(".button");

secretButton.style.display = "none";

let clickCount = 0;

bounceButton.addEventListener("click", () => {
    cube.style.animation = "bounce 1s ease-in-out";

    clickCount++;

    if (clickCount >= 3) {
        secretButton.style.display = "block";
    }

    setTimeout(() => {
        cube.style.animation = "";
    }, 1000);
})

secretButton.addEventListener("click", () => {
    cube.style.width = "100vw";
    cube.style.height = "100vh";
    cube.style.transition = "0.5s"
    cube.style.position = "absolute";

    hiddenText.classList.remove("hidden-text");

    buttons.forEach((button) => {button.style.display = "none"});

    setTimeout(() => {
        resetButton.style.display = "block";
    }, 1000);
});

resetButton.addEventListener(() => {
    cube.classList.add("cube");
})