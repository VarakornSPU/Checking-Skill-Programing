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
    li.innerHTML = `${task} <button class="complete-btn" onclick="toggleComplete(this)">✔️ ทำเสร็จ</button> <button class="remove-btn" onclick="removeTask(this)">❌</button>`;

    ul.appendChild(li);
    saveTask(task);
    input.value = "";
}

function removeTask(btn) {
    let li = btn.parentElement;
    li.remove();
    removeTaskFromStorage(li.innerText.replace("❌", "").replace("✔️ ทำเสร็จ", "").trim());
}

function saveTask(task) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push({ task, completed: false });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    let ul = document.getElementById("todo-list");

    tasks.forEach(taskObj => {
        let li = document.createElement("li");
        li.innerHTML = `${taskObj.task} <button class="complete-btn" onclick="toggleComplete(this)">✔️ ทำเสร็จ</button> <button class="remove-btn" onclick="removeTask(this)">❌</button>`;
        if (taskObj.completed) {
            li.classList.add("completed");
        }
        ul.appendChild(li);
    });
}

function removeTaskFromStorage(task) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks = tasks.filter(t => t.task !== task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function toggleComplete(btn) {
    let li = btn.parentElement;
    let taskText = li.innerText.replace("✔️ ทำเสร็จ", "").replace("❌", "").trim();
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    let taskObj = tasks.find(t => t.task === taskText);

    if (taskObj) {
        taskObj.completed = !taskObj.completed; // เปลี่ยนสถานะของงาน
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    li.classList.toggle("completed"); // เปลี่ยนสไตล์ของงาน
}
