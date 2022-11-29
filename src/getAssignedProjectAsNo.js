export default function getAssignedProjectAsNo() {
    //set assigned project
    let projectOption = document.querySelector('#projectList');
    const projectNo = projectOption.options[projectOption.selectedIndex].id;


    if (projectNo == "0Project") {
        let assignedProject = 0;
        return assignedProject
    } else if (projectNo == "1Project") {
        let assignedProject = 1;
        return assignedProject
    } else if (projectNo == "2Project") {
        let assignedProject = 2;
        return assignedProject
    } else if (projectNo == "3Project") {
        let assignedProject = 3;
        return assignedProject
    } else if (projectNo == "4Project") {
        let assignedProject = 4;
        return assignedProject
    } else if (projectNo == "5Project") {
        let assignedProject = 5;
        return assignedProject
    } else if (projectNo == "6Project") {
        let assignedProject = 6;
        return assignedProject
    } 
}