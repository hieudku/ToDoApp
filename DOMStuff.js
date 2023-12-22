import {Project, Task} from "./script.js";

export const projectData = [];

//Create and display new Project elements function
export function addProject() {
    const clickAddProject = document.getElementById("addProjectBtn");
    const toMyProject = document.getElementById("addProj");
    const showProject = document.getElementById("asideBar");
    
    clickAddProject.addEventListener("click", event => {
        event.preventDefault();

        //Create a new project element
        const projectItem = document.createElement("div");
        projectItem.setAttribute("class", "projectCards");
        showProject.append(projectItem); 
        projectItem.textContent = toMyProject.value;
        const getPrjName = projectItem.textContent

        projectData.push(getPrjName);
        console.log(projectData);
        return getPrjName;
    });
}

export function addTask() {
    const projectCards = document.getElementsByClassName("projectCards");
    const displayTask = document. getElementById("content");
    const showTasks = document.getElementById("content");
        Array.from(projectCards).forEach(card => {
            card.addEventListener("click", () => {

                const newTask = new Task();
                showTasks.createElement("input");
                showTasks.setAttribute("type", "text", "class", "taskItem");
                displayTask.appendChild();
                console.log("success");
            });
        })

}

function createTaskDiv(projectData) {
    const displayTask = document. getElementById("content");
    const clickAddTask = document.getElementById("addProjectBtn");
    clickAddTask.addEventListener("click", () => {

    })
    displayTask
}