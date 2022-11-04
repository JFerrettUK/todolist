export default function makeProjectPage() {
    const projectMainHeader = document.getElementById('page-main');
    
    const projectTitleHead = document.createElement('div');
    projectTitleHead.setAttribute("id", "titleHead");

    const projecTitleText = document.createElement('span');
    projecTitleText.setAttribute("id", "titleText");
    projecTitleText.setAttribute("class", "titleText");
    projecTitleText.textContent = "Projects";

    projectMainHeader.appendChild(projectTitleHead);
    projectTitleHead.appendChild(projecTitleText);
}