//Delete a task bar with the assigned number
import getLastBox from "./getLastBox";
import closeTaskBox from "./closeTaskBox";
import showEditTaskBox from "./showEditTaskBox";


export default function deleteTaskBox(boxNo) {
    const relevantCont = document.getElementById(`${boxNo}Cont`)  
    relevantCont.addEventListener('click', showEditTaskBox);

    //make an edit box for each task that can be opened above
}