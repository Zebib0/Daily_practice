const inputBox = document.getElementById("input-box");
const listContain = document.getElementById("list-container");
const catagories = document.getElementById("catagories")


function addTask(){
    if(inputBox.value === ''){
        alert("No task recorderd");
    }

    else{
        if (catagories === ''){
        
        }
        let li = document.createElement("li");
        li.innerHTML= inputBox.value;
        listContain.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}
listContain.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData()
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData()
    }
}, false);


function saveData(){
    localStorage.setItem("data", listContain.innerHTML);
}
function showTask(){
    listContain.innerHTML = localStorage.getItem("data");
}
showTask()

function groupTasks(){
    if (catagories == 'All'){

    }
}
