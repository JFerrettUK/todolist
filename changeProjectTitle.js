//load inbox page content into page-main

export default function changeProjectTitle(projectName) {    
    let trueProjectName = projectName.slice(2);
    document.getElementById('titleText').innerText = trueProjectName
}