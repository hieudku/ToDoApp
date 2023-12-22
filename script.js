import * as DOM from "./DOMStuff.js";

const ProjectList = [];
const TaskList = [];

const createProject = createProjectFunc();
const createTask = createTasks();

function createProjectFunc() {
    // Add a project button
    const clickAddProject = document.getElementById("addProjectBtn");
    const toMyProject = document.getElementById("addProj");
    const showProject = document.getElementById("asideBar");

        clickAddProject.addEventListener("click", event => {
            event.preventDefault();
            let displayProject = DOM.addAProject(toMyProject, showProject);

            ProjectList.push(displayProject);
            console.log(createProject);
            console.log(ProjectList);
            return toString(displayProject);
        });
}

function createTasks() {
    let projectCards = document.querySelectorAll(".projectCards");
    const showTasks = document.getElementById("content");

    projectCards.forEach(card => {
        card.addEventListener("click", event => {
            event.preventDefault();
            
        })
    })


}