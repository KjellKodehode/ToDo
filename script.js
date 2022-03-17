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
        toDo.textContent = input.value + " <-%-> " + date.toDateString();
        li.append(toDo);
        list.append(li);
        addDeleteButton(li);
        input.value="";
    }
}

function addDeleteButton(li){
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'delete';
    deleteButton.classList.add('btn', 'btn__delete');
    li.append(deleteButton);
    deleteButton.addEventListener('click', ()=> deleteButton.parentNode.remove());
}
