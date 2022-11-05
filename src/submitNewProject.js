export default function submitNewProject() {
    let projectValue = document.getElementById('textInput').value;
    console.log(projectValue)
    
    document.getElementById(`addProjectText`).style.display = "flex"
    document.getElementById(`addFormCont`).style.display = "none"
}