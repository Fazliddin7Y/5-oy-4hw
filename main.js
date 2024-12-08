document.addEventListener("DOMContentLoaded", () => {
    const todoInput = document.getElementById("todo-input");
    const addBtn = document.getElementById("add-btn");
    const todoList = document.getElementById("todo-list");

    // Todo yaratish funksiyasi
    function createTodoItem(text) {
        const li = document.createElement("li");
        li.className = "flex justify-between items-center bg-gray-100 px-4 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-200";

        const span = document.createElement("span");
        span.textContent = text;
        span.className = "flex-1 text-gray-800";

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "❌";
        deleteBtn.className = "ml-4 bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition-all duration-200";

        // Vazifani o'chirish
        deleteBtn.addEventListener("click", () => {
            li.remove();
        });

        li.appendChild(span);
        li.appendChild(deleteBtn);
        return li;
    }

    // Vazifa qo'shish funksiyasi
    function addTodo() {
        const text = todoInput.value.trim();
        if (text) {
            const todoItem = createTodoItem(text);
            todoList.appendChild(todoItem);
            todoInput.value = "";
        } else {
            alert("Vazifa matnini kiriting!");
        }
    }

    // Qo'shish tugmasi bosilganda
    addBtn.addEventListener("click", addTodo);

    // Shift tugmasi bosilganda "Qo'shish" tugmasining funksiyasi ishlaydi
    document.addEventListener("keydown", (event) => {
        if (event.key === "Shift") {
            addBtn.click(); // "Qo'shish" tugmasining asosiy funksiyasini chaqiradi
        }
    });
});
