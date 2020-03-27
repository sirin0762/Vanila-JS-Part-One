const toDoForm = document.querySelector(".js-toDoForm");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".js-toDoList");
const today = document.querySelector(".js-today");
const SHOWING = "showing";
const TODO_LS = "toDos";

let toDos = [];

function handleDelete(e){
    const btn = e.target;
    const li = btn.parentNode;
    toDoList.removeChild(li); 
    const cleanToDo = toDos.filter(function(toDo){
        return toDo.id !== parseInt(li.id);
    });
    toDos = cleanToDo;
    saveToDos();
}

function saveToDos(){
    localStorage.setItem(TODO_LS, JSON.stringify(toDos));
}

function paintToDo(value){
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = value;
    const delBtn = document.createElement("button");
    delBtn.classList.add("toDo_delBtn");
    delBtn.addEventListener("click", handleDelete);
    const newId = toDos.length +1;
    const toDoObj = {
        value : value,
        id : newId
    }
    li.id = newId;
    li.classList.add("list");
    toDos.push(toDoObj);
    li.appendChild(span);
    li.appendChild(delBtn);;
    toDoList.appendChild(li);
    saveToDos();
}

function handleSubmit(e){
    e.preventDefault();
    const value = toDoInput.value;
    paintToDo(value);
    toDoInput.value = "";
}

function loadToDo(){
    const loadedToDo = localStorage.getItem(TODO_LS);
    if(loadedToDo !== null){
        today.classList.remove("today");
        const loaedToDoObj = JSON.parse(loadedToDo);
        loaedToDoObj.forEach(element => {
            paintToDo(element.value);      
        });
    }
    return;
}

function init(){
    loadToDo();
    toDoForm.addEventListener("submit", handleSubmit);
    return;
}

init();