import * as DOM from "./DOMStuff.js";

class Project {
    constructor (projectName) {
        this.projectName = projectName;
    }
}


class Task {
    constructor (taskName, taskDesc, taskPriority, taskDue) {
        this.taskName = taskName;
        this.taskDesc = taskDesc;
        this.taskPriority = taskPriority;
        this.taskDue = taskDue;
    }
}


let myProject = new Project();

myProject = DOM.addProject();
DOM.appendProject