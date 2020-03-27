const form = document.querySelector(".js-name");
const nameInput = form.querySelector("input");
const greeting = document.querySelector(".js-greeting");
const SHOWING_CN = "showing"

const USER_LS = "currentUser";

function saveName(text){
    localStorage.setItem(USER_LS, text);
}

function handleSubmit(e){
    e.preventDefault();
    const currentValue = nameInput.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

function askForName(){
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text){
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    const currentHour = new Date().getHours();
    if(currentHour < 6 || currentHour >= 18){
        greeting.innerText = `Good Night, ${text}`;
    }else if(currentHour >= 6 && currentHour < 12){
        greeting.innerText = `Good Morning, ${text}`;      
    }else if(currentHour >= 12 && currentHour < 18){
        greeting.innerText = `Good Afternoon, ${text}`;      
    }

}

function loadName(){
    const currentUser = localStorage.getItem(USER_LS);

    if(currentUser === null){
        askForName();
    }else{
       paintGreeting(currentUser);
    }
}
function init(){
    loadName();
}
init();