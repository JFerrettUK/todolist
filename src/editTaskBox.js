//Delete a task bar with the assigned number
import getLastBox from "./getLastBox";
import closeTaskBox from "./closeTaskBox";
import showEditTaskBox from "./showEditTaskBox";


export default function editTaskBox(boxNo) {
    console.log("editTaskBox")
    const relevantCont = document.getElementById(`${boxNo}Edit`)  
    relevantCont.addEventListener('click', showEditTaskBox(boxNo));

    //make an edit box for each task that can be opened above
}