const taskId = document.getElementById('task_id');
const taskDescription = document.getElementById('task_description');
const listContainer = document.getElementById('list_container');

function addTask() {
    if (taskId.value === '' || taskDescription.value === ''){
        alert("Please fill the required inputs first.");
    } else{
        let li = document.createElement("li");
        li.innerHTML = "<div>" + "<p>" + taskId.value + "</p>" + "<p>" + taskDescription.value + "</p>"

    }
}