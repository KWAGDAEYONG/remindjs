function App(){
    var todos=[
        {todo: "공부하기", done:false},
        {todo: "놀기" , done:true},
        {todo: "밥먹기" , done:false}
    ],
    todoContainerEl = document.querySelector(".todo-container");
    plusBtnEl = document.querySelector(".add-todo button");
    for(var i = 0; i<todos.length; i++){
        var todoEl = createTodoEl(todos[i]);
        todoContainerEl.appendChild(todoEl);
    }

    plusBtnEl.addEventListener('click',function(e){
        var textEl = document.querySelector('.add-todo input[type="text"]'),
            todoEl = createTodoEl({todo:textEl.value, done:false});

        todoContainerEl.appendChild(todoEl);
        textEl.value = '';
    });

    function createTodoEl(todo){
        var todoEl = document.createElement("div");
        todoEl.innerHTML = '<input type="checkbox"'+((todo.done)? 'checked' : '')+'><label>'+todo.todo+'</label>';
        todoEl.className = 'todo';
        return todoEl;
    }
}

App();