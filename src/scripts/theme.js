/* Desenvolva sua lógica aqui ... */
const button = document.querySelector(".header__btn");
const html=document.querySelector("html")

export const changeTheme = () => {
    let darkmode=false;

    html.classList.toggle("dark-mode")
    if(html.className=="dark-mode"){
        darkmode=true
    }
    button.classList.toggle("header__btn--dark-mode")
    
    localStorage.setItem("theme", JSON.stringify(darkmode))
}
button.addEventListener("click", changeTheme)

export const themePreferences = () => {
    const darkmode = JSON.parse(localStorage.getItem("theme"))

    if(darkmode){
        html.classList.add("dark-mode")
        button.classList.add("header__btn--dark-mode")
    }
}

