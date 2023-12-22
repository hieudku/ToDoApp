import * as DOM from "./DOMStuff.js";

const ProjectList = [];
const TaskList = [];

const createProject = createProjectFunc();

function createProjectFunc() {
    // Add a project button
    const clickAddProject = document.getElementById("addProjectBtn");
    const toMyProject = document.getElementById("addProj");
    const showProject = document.getElementById("asideBar");

        clickAddProject.addEventListener("click", event => {
            event.preventDefault();
            let displayProject = DOM.addAProject(toMyProject, showProject);

            createTasks();

            ProjectList.push(displayProject);
            console.log(createProject);
            console.log(ProjectList);
            return toString(displayProject);
        });
}

function createTasks() {
    const projectItems = document.getElementsByClassName("projectCards");
    const showTasks = document.getElementById("content");

    Array.from(projectItems).forEach(card => {
        card.addEventListener("click", () => {
            alert("success");
        })
    })


}