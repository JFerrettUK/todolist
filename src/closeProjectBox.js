//Close the "add project" form

export default function closeProjectBox() {
    document.getElementById(`addProjectText`).style.display = "flex"
    document.getElementById(`addFormCont`).style.display = "none"
    document.getElementById('textInput').value = "";
}