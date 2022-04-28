const input = document.querySelector('input');
const list = document.querySelector('ul');
let date = new Date();

// focus on input field
function focusInput(){
    let input = document.getElementById("input").focus();
}

// select input field on page load
window.onload = focusInput()

// When clicking on the button, create list
document.querySelector('button').addEventListener('click', () =>{
    addToDo();
})

// When clicking Enter key, create list
input.addEventListener("keydown", (e) => {
    if(e.key !== "Enter") return
    addToDo();
})

// Creating the todo list
function addToDo(){
    // if nothing in input alert and focus after ok is clicked
    if(!input.value || input.value.match(/^ *$/)){
        alert("Enter something to do !")
        window.confirm = focusInput();
    }else{
        const li = document.createElement('li');
        li.classList.add('flex');
        const toDo = document.createElement('p');
        toDo.textContent =  "⚙️" + " " + input.value + " 🕧-> " + date.toDateString();
        li.append(toDo);
        list.append(li);
        addDeleteButton(li);
        input.value="";
        focusInput();
    }
}


// function addCheckBox(li){
//     const checkBox = document.createElement("input");
//     checkBox.setAttribute('type', 'checkbox');
//     li.append(checkBox);
// }

function addDeleteButton(li){
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'remove';
    deleteButton.classList.add('btn', 'btn__delete');
    li.append(deleteButton);
    deleteButton.addEventListener('click', ()=> deleteButton.parentNode.remove());
}


// -----------------------