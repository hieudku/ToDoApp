export const x = "5";
function addProject() {
    const clickAddProject = document.getElementById("addProjectBtn");
    const toMyProject = document.getElementById("addProj").value;
    clickAddProject.addEventListener("click", event => {
        toMyProject.textContent = toMyProject.value;
    })
}
