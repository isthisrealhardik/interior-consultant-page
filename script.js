let menu = document.querySelector(".Menu");
let Ele = document.querySelector(".Ele");
let closeButton = document.querySelector(".close");

menu.addEventListener("click", () => {
    Ele.classList.remove('hidden');
    Ele.classList.add('Ele');
})

closeButton.addEventListener("click", () => {
    Ele.classList.add('hidden');
    Ele.classList.remove('Ele');
})