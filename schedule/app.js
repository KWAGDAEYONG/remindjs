function App(){
    var todos=[
        {todo: "공부하기", done:false},
        {todo: "놀기" , done:true},
        {todo: "밥먹기" , done:false}
    ],
    todoContainerEl = document.querySelector(".todo-container"),
    plusBtnEl = document.querySelector(".add-todo button"),
    titleDate = document.querySelector(".title h2");

    for(var i = 0; i<todos.length; i++){
        var todoEl = createTodoEl(todos[i]);
        todoContainerEl.appendChild(todoEl);
        todoEl.addEventListener('click', (function () {
            /*console.log(i);*/
            var num = i;
            return function(evt){
                console.log('체크버튼 입력');
                todos[num].done = evt.target.checked;
                renderTodoCounts();
            }
        })());
    }

    renderTodoCounts();

    plusBtnEl.addEventListener('click',function(e){
        var textEl = document.querySelector('.add-todo input[type="text"]'),
             todoEl = createTodoEl({todo:textEl.value, done:false});
        todoContainerEl.appendChild(todoEl);
        textEl.value = '';
        todos.push({todo: textEl.value, done:false});
        renderTodoCounts();
    });

    function renderTodoCounts(){
        var now = new Date();
        titleDate.innerHTML = now.getMonth()+'월 '+now.getDate()+'일 ('+ todoCounts() +')';
    }

    function todoCounts(){
        var counts = 0;
        for(var i = 0; i<todos.length; i++){

            if(todos[i].done===false) {
                console.log("count:"+counts);
                counts++;
            }
        }
        return counts;
    }

    function createTodoEl(todo){
        var todoEl = document.createElement("div");
        todoEl.innerHTML = '<input type="checkbox"'+((todo.done)? 'checked' : '')+'><label>'+todo.todo+'</label>';
        todoEl.className = 'todo';
        return todoEl;
    }
}

App();