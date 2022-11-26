//create a project task option in the task menu from the value in a project box
import getProjectNo from './getProjectNo';

export default function createProjectTaskOption() {   
    let numberOfProj = getProjectNo()

    const newProjectValue = document.getElementById('textInput').value;
    const projectList = document.getElementById('projectList');

    const newOption = document.createElement('option');
    newOption.setAttribute("class", `newProjects`);
    newOption.setAttribute("id", `${numberOfProj}Project`);
    newOption.textContent = `${newProjectValue}`;

    projectList.appendChild(newOption);
}