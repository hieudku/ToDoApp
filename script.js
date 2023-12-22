import * as DOM from "./DOMStuff.js";

const ProjectList = [];
const TaskList = [];

const createProject = createProjectFunc();
createTasks() ;

// **1** Create and display new Project elements function
function createProjectFunc() {
    // Add a project button
    const clickAddProject = document.getElementById("addProjectBtn");
    const toMyProject = document.getElementById("addProj");
    const showProject = document.getElementById("asideBar");

        clickAddProject.addEventListener("click", event => {

            event.preventDefault();
            let displayProject = DOM.addAProject(toMyProject, showProject);

            showTasks();

            ProjectList.push(displayProject);
            console.log(createProject);
            console.log(ProjectList);
            return toString(displayProject);
        });
}

// **2** Manipulate project card and tasks properties.
function showTasks() {
    const projectItems = document.getElementsByClassName("projectCards");
    const selected = false;
    let selectedCount = 0;

    Array.from(projectItems).forEach(projItem => {

        projItem.addEventListener("click", () => {

            const showTasks = document.getElementById("content");
            selected == true;
            
            // Call function to adjust DOM properties
            DOM.addTask(projItem, showTasks, selected);
        })
    })
}
// **3** Add, create and display each tasks when submitted
function createTasks() {

    const taskAdd = document.getElementById("addTaskBtn");
    const displayTask = document.getElementById("content");
    const getTask = document.getElementById("taskItem");

    taskAdd.addEventListener("click", t => {
        const taskItem = document.createElement("div");

        // Call function to adjust DOM properties
        DOM.displayTasks(displayTask, taskItem, getTask);
    })
}