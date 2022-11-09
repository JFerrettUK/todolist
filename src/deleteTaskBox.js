export default function deleteTaskBox(boxNo) {
    const relevantCont = document.getElementById(`${boxNo}Cont`)
    
    relevantCont.remove();
}