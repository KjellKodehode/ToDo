const input = document.querySelector('input');
const list = document.querySelector('ul');
let date = new Date();

document.querySelector('button').addEventListener('click', () =>{
    addToDo();
})

function addToDo(){
    if(!input.value){
        alert("Enter something to do !")
    }else{
        const li = document.createElement('li');
        li.classList.add('flex');
        const toDo = document.createElement('p');
        toDo.textContent = addCheckBox(li) + "⚙️" + " " + input.value + " <-⌛-> " + date.toDateString();
        li.append(toDo);
        list.append(li);
        addDeleteButton(li);
        input.value="";
    }
}

function addCheckBox(li){
    const checkBox = document.createElement("input");
    checkBox.setAttribute('type', 'checkbox');
    li.append(checkBox);
}

function addDeleteButton(li){
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'remove';
    deleteButton.classList.add('btn', 'btn__delete');
    li.append(deleteButton);
    deleteButton.addEventListener('click', ()=> deleteButton.parentNode.remove());
}


// -----------------------

// function myFunction() {
//     var x = document.createElement("INPUT");
//     x.setAttribute("type", "checkbox");
//     document.body.appendChild(x);
//   }


// let list = document.querySelector('ul');
// list.addEventListener('click', function(ev){
//     if(ev.target.tagName === "LI"){
//         ev.target.classList.toggle("checked");
//     }
// })

// Add a "checked" symbol when clicking on a list item
// let list = document.querySelector("ul");
// list.addEventListener("click", function(ev) {
//     if (ev.target.tagName === "LI") {
//         ev.target.classList.toggle("checked");
//     }
// }, false);