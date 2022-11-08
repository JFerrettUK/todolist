export default function deleteTaskBox(boxNo) {
    document.getElementById(`${boxNo}Trash`)

    const relevantBox = document.getElementById(`${boxNo}Box`)
    relevantBox.innerHTML = "";
}