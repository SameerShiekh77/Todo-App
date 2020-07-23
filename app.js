let list = document.getElementById('list');

function addItem() {
    // create list
    let points = document.getElementById('todo-points');
    let todoList = document.createElement('li');
    let todoListText = document.createTextNode(points.value);
    todoList.appendChild(todoListText);
    list.appendChild(todoList);
    list.setAttribute('class', 'font');
    points.value = '';

    // create Edit button
    let EditBtn = document.createElement('img');
    EditBtn.setAttribute('src', './images/edit.png');
    EditBtn.setAttribute('class', 'editBtn');
    EditBtn.setAttribute('title', 'Edit your list');
    EditBtn.setAttribute('onclick', 'editBtn(this)');
    todoList.appendChild(EditBtn);


    // create Delete button
    let deletBtn = document.createElement('img');
    deletBtn.setAttribute('src', './images/delete.jpg');
    deletBtn.setAttribute('class', 'deletBtn');
    deletBtn.setAttribute('title', 'Delete your list');
    deletBtn.setAttribute('onclick', 'deletBtn(this)');
    todoList.appendChild(deletBtn);


}

function delAll() {
    let ask = confirm("Are you confirm to delte all your today work list?");
    if (ask == true) {
        list.innerHTML = '';
    }
}

function editBtn(a) {
    let value = a.parentElement.firstChild.nodeValue;
    let update = prompt("Enter Update Value", value);
    a.parentElement.firstChild.nodeValue = update;
}

function deletBtn(a) {
    let ask = confirm('Are you confirm to delete this list?');
    if (ask == true) {
        a.parentElement.remove();
    }
}