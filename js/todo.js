// 메모리에 올라와서 사용될 todo list 데이터
let todoListIdx = -1;
let todoList = null;

// 데이터베이스에서 todolist를 불러오는 메서드
const loadTodoList = () => {

    // todo list 초기화
    let rawList = localStorage.getItem("todoList");
    
    if(rawList == null || rawList == "[]"){
        todoList = [];
    }else{
        
        todoList = JSON.parse(rawList);    
    }
    
    // idx 초기화
    const rawIdx = localStorage.getItem("todoListIdx");
    
    if(rawIdx == -1 || rawIdx == undefined){
        todoListIdx = 0;
    }else{
        todoListIdx = parseInt(rawIdx);   
    }

    renderTodo();
};


// 메모리에 올라온 todo list 데이터를 기반으로 화면에 보여줌
const renderTodo = () => {

    const container = document.querySelector("#todo-list");
    container.innerHTML = "";

    if(todoList.length === 0){
        return;
    }

    todoList.forEach(todo => {
        
        const  li = document.createElement("li");
        li.innerHTML = 
                        `<span>${todo.text}</span>`+ 
                        `<button onClick='removeTodo(${todo.idx})' type='button' class='close-todo'></button>`;
        li.dataset.idx = todo.idx;

        container.append(li);
    });

};

// 새로운 todo 입력칸에 데이터를 입력하고 엔터를 누를 경우 새로운 todo를 등록하는 메서드를 실행
document.querySelector("#insert-todo").addEventListener("keyup", e => {
    if(e.keyCode == 13){
        // 엔터를 눌렀으면
        const inputTag = document.querySelector("#insert-todo");
        const todoValue = inputTag.value;
        inputTag.value = "";

        if(todoValue !== ""){
            addNewTodo(todoValue);
        }
    } 
});

// 새로운 todo 문장을 메모리에 추가하고 데이터베이스에 저장
const addNewTodo = todoValue => {
    todoList.push({
       idx:todoListIdx++,
       text: todoValue
    });
    updateTodoListDatabase();
};

// 메모리에 있는 todo 리스트를 데이터베이스에 저장한 후, 다시 데이터베이스에서 메모리로 todo list를 로드한다.
const updateTodoListDatabase = () => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
    localStorage.setItem("todoListIdx", todoListIdx.toString());
    loadTodoList();
};

const removeTodo = idx => {
    todoList = todoList.filter(todo => todo.idx !== idx);
    updateTodoListDatabase();
};

