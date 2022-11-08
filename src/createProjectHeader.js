export default function createProjectHeader(projectName) {
    const projectHere = document.getElementById('projectsHere');
    
    const breakPoint = document.createElement('br');

    const project = document.createElement('span');
    project.setAttribute("class", "newProjTxt");
    project.setAttribute("id", `${projectName}ProjHead`);   
    project.textContent = `- ${projectName}`;

    projectHere.appendChild(project);
    projectHere.appendChild(breakPoint);
}