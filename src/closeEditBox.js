//Close the "add task" form

export default function closeEditBox(boxNo) {
    console.log("closeEditBox")
    document.getElementById(`${boxNo}editCont`).style.display = "none"
    document.getElementById(`${boxNo}editTaskNameInput`).value = ""
    document.getElementById(`${boxNo}editShortDescInput`).value = ""

    console.log("closeEditBox2")
}