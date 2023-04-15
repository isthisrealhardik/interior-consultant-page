let menu = document.querySelector(".Menu");
let Ele = document.getElementById("Ele");
let closeButton = document.querySelector(".close");

menu.addEventListener("click", () => {
    Ele.style.display = "flex";
})

closeButton.addEventListener("click", () => {
    Ele.style.display = 'none';
})