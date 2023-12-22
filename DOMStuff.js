

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

// **1** Create and display new Project elements function
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

// **2** Manipulate project card and tasks properties.
export function addTask(projItem, showTasks, selected) {
    projItem.style.backgroundColor = "#83c991";
    showTasks.style.display = "flex";
}

// **3** Add, create and display each tasks when submitted
export function displayTasks(displayTask, taskItem, getTask) {
    taskItem.setAttribute("class", "taskCard");
    taskItem.textContent = getTask.value;
    displayTask.appendChild(taskItem);
}