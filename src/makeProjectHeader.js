//Add a sub-Header in the nav-bar with the input "name" value of a new submitted project

import minus1ProjectNo from './minus1ProjectNo';

export default function makeProjectHeader(projectName) {
    const projectHere = document.getElementById('projectsHere');
    const breakPoint = document.createElement('br');

    if (projectName.length < 4) {
        alert("Project name must be at least 4 characters long");
        return;
    } else {
        let projectNo = minus1ProjectNo()

        const project = document.createElement('span');
        project.setAttribute("class", `newProjectTxt`);

        project.setAttribute("id", `${projectNo}ProjectHead`);   
        project.textContent = `- ${projectName}`;

        projectHere.appendChild(project);
        projectHere.appendChild(breakPoint);
    }
}