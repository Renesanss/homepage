console.log("Siemka!");

let section__button = document.querySelector(".section__button");
let section__photo = document.querySelector(".section__photo");


section__button.addEventListener("click", () => {
    section__photo.remove();
});


let theme__button = document.querySelector(".theme__button");
let body = document.querySelector(".body");
let themeName = document.querySelector(".themeName");

theme__button.addEventListener("click", () => {
    body.classList.toggle("dark");

    themeName.innerText = body.classList.contains("dark") ? "jasny" : "ciemny";

});

