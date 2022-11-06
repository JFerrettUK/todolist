export default function submitNewProject(projectArray) {
    projectArray.push(document.getElementById('textInput').value);
    console.log(projectArray);
}