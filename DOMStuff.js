
//Create and display new Project elements function
export function addProject() {
    const clickAddProject = document.getElementById("addProjectBtn");
    const toMyProject = document.getElementById("addProj");
    const showProject = document.getElementById("asideBar");
    

    clickAddProject.addEventListener("click", event => {
        event.preventDefault();

        //Create a new project element
        const appendProject = document.createElement("div");
        appendProject.setAttribute("class", "projectCards");
        showProject.append(appendProject); 
        appendProject.textContent = toMyProject.value;
        
        console.log(appendProject.textContent);
        
    })
}

export function appendProjectToDiv() {
    const container = document.getElementById("content");
}