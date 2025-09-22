const addTodo = (item) => {
    const li = document.createElement('li');
    const div = document.createElement('div');
    const p = document.createElement('p');
    const btnDiv = document.createElement('div');
    const button = document.createElement('button');
    const deleteBtn = document.createElement('button');

    p.textContent = item;
    button.textContent = "Pending";
    deleteBtn.textContent = "Delete";
    button.classList.add('status-btn');
    deleteBtn.classList.add('delete-btn');
    btnDiv.classList.add('btn-div');
    button.addEventListener('click', () => {
        toggleStatus(button);
    });

    deleteBtn.addEventListener('click', () => {
        li.remove();
    });
    btnDiv.appendChild(button);
    btnDiv.appendChild(deleteBtn);

    div.appendChild(p);
    div.appendChild(btnDiv);
    li.appendChild(div);
    ul.appendChild(li);
};



const res = fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(data => {
        console.log(data)
        data = data.slice(0, 5)
        data.forEach(item => {
            addTodo(item.title)
        })
    })

const ul = document.getElementById('todo-list')



const addTodoBtn = document.getElementById('add-todo-btn')
addTodoBtn.addEventListener('click', () => {
    document.getElementById('add-todo-form').style.display = 'flex'
    document.getElementById('add-todo-btn').style.display = 'none'
})

const submitbtn = document.getElementById('submit-btn')
submitbtn.addEventListener('click', () => {
    const todo = document.getElementById('todo-input').value
    if (todo !== "") {
        addTodo(todo)
        document.getElementById('todo-input').value = ''
    }

    document.getElementById('add-todo-form').style.display = 'none'
    document.getElementById('add-todo-btn').style.display = 'block'
})

const toggleStatus = (button) => {
    if (button.textContent === "Pending") {
        button.textContent = "Completed"
        button.style.backgroundColor = "green"
    } else {
        button.textContent = "Pending"
        button.style.backgroundColor = "red"
    }
}