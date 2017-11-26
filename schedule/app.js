var todoApp = {
    todos : [],
    todoContainerEl : $(".todo-container"),
    plusBtn : $(".add-todo button"),
    titleDateEl : $(".title h2"),
    init: function(todos){
        this.todos = todos;
        this.renderTodos();

        this.plusBtn.on("click", function(evt){
            var todoTextEl = $('.add-todo input[type="text"]')
                , todoText = todoTextEl.val();
            this.addTodo(todoText);
            this.renderTodos();
            todoTextEl.val('');
        }.bind(this));
    },

    renderTodos : function(){
        this.todoContainerEl.empty();
        for(var i = 0; i<this.todos.length; i++){
            var todoEl = this.createTodoEl(this.todos[i]);
            this.todoContainerEl.append(todoEl);
            this.renderTitle();
            todoEl.find('input[type="checkbox"]').on('click',(function(){
                var num = i;
                return function (evt) {
                    this.todos[num].done = evt.target.checked;
                    this.renderTitle();
                }.bind(this);
            }.bind(this))());
        }
    },
    createTodoEl(todo) {
        return $('<div>',{class:'todo'}).append($('<input>',{type : "checkbox"}).attr('checked',todo.done)).append($('<label>').html(todo.todo));
    },
    addTodo: function(text){
        this.todos.push({todo:text, done:false});
    },
    renderTitle: function() {
        this.titleDateEl.html(this.getToday() + '(' + this.todoCounts() + ')');
    },
    getToday: function(now){
        var now = new Date();
        return now.getMonth()+ '월'+now.getDate()+' 일';
    },
    todoCounts: function(){
        var counts = 0;
        for(var i = 0; i<this.todos.length; i++){
            if(this.todos[i].done==false) counts++;
        }
        return counts;
    }
}

todoApp.init([
    {todo: "공부하기", done:false},
    {todo: "밥먹기", done:true},
    {todo: "게임하기", done:false}
])