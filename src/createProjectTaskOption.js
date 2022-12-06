//create a project task option in the task menu from the value in a project box
import getProjectNo from './getProjectNo';
import submitNewProject from './submitNewProject';


export default function createProjectTaskOption() {   
    let numberOfProj = getProjectNo()

    const newProjectValue = submitNewProject();
    const projectList = document.getElementById('projectList');

    if (newProjectValue.length < 4) {
        return;
    }

    const newOption = document.createElement('option');
    newOption.setAttribute("class", `newProjects`);
    newOption.setAttribute("id", `${numberOfProj}Project`);
    newOption.textContent = `${newProjectValue}`;

    projectList.appendChild(newOption);
}