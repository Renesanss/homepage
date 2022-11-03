{
    const welcome = () => {
        console.log("Hello world!")
    }


    const onThemeButtonClick = () => {
        const body = document.querySelector(".body");
        const themeName = document.querySelector(".themeName");
        body.classList.toggle("dark");

        themeName.innerText = body.classList.contains("dark") ? "jasny" : "ciemny";
    };

    const init = () => {
        const themeButton = document.querySelector(".theme__button");


        themeButton.addEventListener("click", onThemeButtonClick);
        welcome();
    }

    init();

    const photoRemove = () => {
        const section__button = document.querySelector(".section__button");
        const section__photo = document.querySelector(".section__photo");
    
        section__button.addEventListener("click", () => {
            section__photo.remove();
        });
    }
   photoRemove();

}

