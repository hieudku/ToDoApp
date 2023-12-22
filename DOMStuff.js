

export const projectData = [];

export class Project {
    constructor (projectName) {
        this.projectName = projectName;
    }
}


export class Task {
    constructor (taskName, taskDesc, taskPriority, taskDue) {
        this.taskName = taskName;
        this.taskDesc = taskDesc;
        this.taskPriority = taskPriority;
        this.taskDue = taskDue;
    }
}

//Create and display new Project elements function
export function addAProject(toMyProject, showProject) {

        //Create a new project element
        const projectItem = document.createElement("div");
        projectItem.setAttribute("class", "projectCards");
        showProject.append(projectItem); 
        projectItem.textContent = toMyProject.value;
        const getPrjName = projectItem.textContent

        projectData.push(getPrjName);
        
        return getPrjName;
}

export function addTask(projectCards) {

                /*
                const newTask = new Task();
                showTasks.createElement("input");
                showTasks.setAttribute("type", "text", "class", "taskItem");
                displayTask.appendChild();
                console.log("success");
                */

}

function createTaskDiv(projectData) {
    const displayTask = document. getElementById("content");
    const clickAddTask = document.getElementById("addProjectBtn");
    clickAddTask.addEventListener("click", () => {

    })
    displayTask
}