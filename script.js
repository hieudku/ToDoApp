import { compareAsc, format } from './node_modules/date-fns';
import * as DOM from './DOMStuff';

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

DOM.addProject();