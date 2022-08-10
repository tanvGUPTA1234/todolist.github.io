main.js
Who has access

System properties
Type
JavaScript
Size
1 KB
Storage used
1 KB
Location
my todo List App
Owner
Motibul Rahman
Modified
16 Feb 2021 by Motibul Rahman
Opened
12: 57 pm by me
Created
31 May 2021
No description
Viewers can download
const inputVal = document.getElementsByClassName('inputVal')[0];

const addTaskBtn = document.getElementsByClassName('btn')[0];


addTaskBtn.addEventListener('click', function() {

    if (inputVal.value.trim() != 0) {
        let localItems = JSON.parse(localStorage.getItem('localItem'))
        if (localItems === null) {
            taskList = []

        } else {
            taskList = localItems;
        }
        taskList.push(inputVal.value)
        localStorage.setItem('localItem', JSON.stringify(taskList));
    }

    showItem()
})

function showItem() {
    let localItems = JSON.parse(localStorage.getItem('localItem'))
    if (localItems === null) {
        taskList = []

    } else {
        taskList = localItems;
    }


    let html = '';
    let itemShow = document.querySelector('.todoLists');
    taskList.forEach((data, index) => {


        html += `
    <div class="todoList">
    <p class="pText">${data}</p>
    <button class="deleteTask" onClick="deleteItem(${index})">x</button>
    </div>
    `
    })
    itemShow.innerHTML = html;
}
showItem()

function deleteItem(index) {
    let localItems = JSON.parse(localStorage.getItem('localItem'))
    taskList.splice(index, 1)
    localStorage.setItem('localItem', JSON.stringify(taskList));
    showItem()
}

function clearTask() {

    localStorage.clear()
    showItem()
}