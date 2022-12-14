//Delete a task bar with the assigned number
import getLastBox from "./getLastBox";

export default function deleteTaskBox(boxNo) {
    const relevantCont = document.getElementById(`${boxNo}Cont`)

    relevantCont.remove();
}