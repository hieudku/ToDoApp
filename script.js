import * as DOM from "./DOMStuff.js";




    const clickAddProject = document.getElementById("addProjectBtn");
    const toMyProject = document.getElementById("addProj");
    const showProject = document.getElementById("asideBar");

        clickAddProject.addEventListener("click", event => {
            event.preventDefault();
            DOM.addAProject(toMyProject, showProject);
        });

