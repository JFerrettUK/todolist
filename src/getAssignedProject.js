export default function getAssignedProject() {
    //set assigned project
    let projectOption = document.querySelector('#projectList');
    const projectNo = projectOption.options[projectOption.selectedIndex].id;
    return projectNo
}