let btn = document.getElementById("addTaskBtn");
let ul = document.getElementById("taskList");
let inp = document.getElementById("task");
let errorMsg = document.getElementById("error-msg");

btn.addEventListener("click", function () {
    let taskValue = inp.value.trim();

    if (taskValue === "") {
        errorMsg.style.display = "block"; // Show error message
        return;
    }

    errorMsg.style.display = "none"; // Hide error if input is valid

    let item = document.createElement("li");

    // Create Checkbox
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("check");

    // Task Text
    let taskText = document.createElement("span");
    taskText.innerText = " " + taskValue + " ";

    // Delete Button
    let delBtn = document.createElement("button");
    delBtn.innerText = "Delete";
    delBtn.classList.add("delete");

    // Append elements
    item.appendChild(checkbox);
    item.appendChild(taskText);
    item.appendChild(delBtn);
    ul.appendChild(item);

    inp.value = ""; // Clear input after adding

    // Event for completing task
    checkbox.addEventListener("change", function () {
        if (checkbox.checked) {
            taskText.classList.add("completed");
        } else {
            taskText.classList.remove("completed");
        }
    });

    // Event for deleting task
    delBtn.addEventListener("click", function () {
        item.remove();
    });
});