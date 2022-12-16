//Delete a task bar with the assigned number
import showEditTaskBox from "./showEditTaskBox";


export default function editTaskBox(boxNo) {
    const relevantCont = document.getElementById(`${boxNo}Edit`)  
    relevantCont.addEventListener('click', showEditTaskBox(boxNo));
}