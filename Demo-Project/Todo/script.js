document.addEventListener("DOMContentLoaded", loadTasks); // โหลดรายการตอนเปิดเว็บ

function addTask() {
    let input = document.getElementById("todo-input");
    let task = input.value.trim();
    
    if (task === "") {
        alert("กรุณากรอกงานที่ต้องทำ!");
        return;
    }

    let ul = document.getElementById("todo-list");
    let li = document.createElement("li");
    li.innerHTML = `${task} <button class="remove-btn" onclick="removeTask(this)">❌</button>`;

    ul.appendChild(li);
    saveTask(task);
    input.value = "";
}

function removeTask(btn) {
    let li = btn.parentElement;
    li.remove();
    removeTaskFromStorage(li.innerText.replace("❌", "").trim());
}

function saveTask(task) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    let ul = document.getElementById("todo-list");

    tasks.forEach(task => {
        let li = document.createElement("li");
        li.innerHTML = `${task} <button class="remove-btn" onclick="removeTask(this)">❌</button>`;
        ul.appendChild(li);
    });
}

function removeTaskFromStorage(task) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks = tasks.filter(t => t !== task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}
