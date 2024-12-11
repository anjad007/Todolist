const todoArray=[];

function addtodoEnter (event){
  if (event.key==='Enter'){
    addTodo();
  }
}

function renderTodolist(){

  console.log(todoArray);

  let todolistHTML='';
  for(let i=0; i<todoArray.length; i++){
    const todoObject = todoArray[i];
    
    const name=todoObject.name;
    const duedate=todoObject.dueDate;
    const html=`
    <div class="todolist-div">
    <p class="name">${name}</p> 
    <p class="duedate">${duedate}</p>
    <button class="delete-btn" onclick='
    todoArray.splice(${i},1);
    renderTodolist();
    '>Delete</button>
    </div>`;
    todolistHTML+=html;
    
    
  }

  document.querySelector('.js-todonames')
  .innerHTML=`${todolistHTML}`;
}


function addTodo (){
  const todolist=document.querySelector('.js-todo');
  const dueDate=document.querySelector('.js-due-date');

  const date=dueDate.value;
  const name =todolist.value;

  todoArray.push({
    name: name,
    dueDate:date
  });

  todolist.value='';
  dueDate.value='';

  renderTodolist();
}