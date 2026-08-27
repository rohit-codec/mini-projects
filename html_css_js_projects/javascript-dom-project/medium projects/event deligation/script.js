const taskForm = document.querySelector("#taskForm");
const taskInput = document.querySelector("#taskInput");
const taskList = document.querySelector("#taskList");
const taskCount = document.querySelector("#taskCount");
const emptyMessage = document.querySelector("#emptyMessage");


// --------------------------------------------------
// ADD TASK
// --------------------------------------------------

taskForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const taskText = taskInput.value.trim();

    // Don't add empty task
    if (taskText === "") {
        return;
    }


    // Create task
    const task = document.createElement("li");

    task.classList.add("task");


    task.innerHTML = `
        <span class="task-text">
            ${taskText}
        </span>

        <div class="task-actions">

            <button class="complete-btn">
                Complete
            </button>

            <button class="delete-btn">
                Delete
            </button>

        </div>
    `;


    // Add task to list
    taskList.appendChild(task);


    // Clear input
    taskInput.value = "";

    updateTaskCount();

    updateEmptyMessage();

});


// --------------------------------------------------
// EVENT DELEGATION
// --------------------------------------------------

// ONE event listener for the entire task list

taskList.addEventListener("click", function (event) {

    /*
        event.target tells us the actual element
        that was clicked.
    */

    const clickedButton = event.target.closest("button");


    // If user didn't click a button
    if (!clickedButton) {
        return;
    }


    // Find the task containing the clicked button
    const task = clickedButton.closest(".task");


    // Complete button
    if (clickedButton.classList.contains("complete-btn")) {

        task.classList.toggle("completed");

        // Change button text
        if (task.classList.contains("completed")) {

            clickedButton.textContent = "Undo";

        } else {

            clickedButton.textContent = "Complete";

        }

    }


    // Delete button
    if (clickedButton.classList.contains("delete-btn")) {

        task.remove();

        updateTaskCount();

        updateEmptyMessage();

    }

});


// --------------------------------------------------
// UPDATE TASK COUNT
// --------------------------------------------------

function updateTaskCount() {

    const totalTasks = taskList.children.length;

    taskCount.textContent =
        `${totalTasks} ${totalTasks === 1 ? "Task" : "Tasks"}`;
}


// --------------------------------------------------
// EMPTY MESSAGE
// --------------------------------------------------

function updateEmptyMessage() {

    if (taskList.children.length === 0) {

        emptyMessage.style.display = "block";

    } else {

        emptyMessage.style.display = "none";

    }

}