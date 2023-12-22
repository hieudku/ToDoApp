import * as DOM from "./DOMStuff.js";

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

export const projectArray = [];

let myProject = new Project();
myProject = DOM.addProject();



let myTasks = new Task();
myTasks = DOM.addTask();


console.log(DOM.projectData);