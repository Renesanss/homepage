{
    const welcome = () => {
        console.log("Hello world!")
    }


    const theme_buttonClick = () => {
        const body = document.querySelector(".body");
        const themeName = document.querySelector(".themeName");
        body.classList.toggle("dark");

        themeName.innerText = body.classList.contains("dark") ? "jasny" : "ciemny";
    };

    const init = () => {
        const theme__button = document.querySelector(".theme__button");


        theme__button.addEventListener("click", theme_buttonClick);
        welcome();
    }

    init();

    const section__button = document.querySelector(".section__button");
    const section__photo = document.querySelector(".section__photo");

    section__button.addEventListener("click", () => {
        section__photo.remove();
    });

}

