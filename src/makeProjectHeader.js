//Add a sub-Header in the nav-bar with the input "name" value of a new submitted project

export default function makeProjectHeader(projectName) {
    const projectHere = document.getElementById('projectsHere');
    const breakPoint = document.createElement('br');

    if (projectName.length < 4) {
        alert("Project name must be at least 4 characters long");
        return;
    } else {
        const project = document.createElement('span');
        project.setAttribute("class", "newProjTxt");
        project.setAttribute("id", `${projectName}ProjHead`);   
        project.textContent = `- ${projectName}`;

        projectHere.appendChild(project);
        projectHere.appendChild(breakPoint);
    }
}