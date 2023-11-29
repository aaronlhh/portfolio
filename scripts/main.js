const toggle_switch = document.querySelector("label.switch");
const switch_button = document.querySelector("label.switch > input");
const root_theme = document.querySelector(':root');
toggle_switch.classList.remove("nojs");

if(localStorage.getItem("theme") == "light"){
    localStorage.setItem("theme", "light");
    root_theme.style.setProperty("--background-color", "white");
    switch_button.checked = true;
}else if(localStorage.getItem("theme") == "dark"){
    localStorage.setItem("theme", "dark");
    root_theme.style.setProperty("--background-color", "grey");
    switch_button.checked = false;
}

// toggle switch
switch_button.addEventListener("click", ()=>{
    if(!switch_button.checked){
        localStorage.setItem("theme", "dark");
        root_theme.style.setProperty("--background-color", "grey");
    }else{
        localStorage.setItem("theme", "light");
        root_theme.style.setProperty("--background-color", "white");
    }
});




