export default function makeProjectHeader(projectName) {
    const projectHere = document.getElementById('projectsHere');
    
    const project = document.createElement('span');
    project.setAttribute("class", "newProjectText");
    project.setAttribute("id", `${projectName}ProjectHeader`);   
    project.textContent = `- ${projectName}`;

    projectHere.appendChild(project);
}