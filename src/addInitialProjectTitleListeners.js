import changeProjectTitle from './changeProjectTitle';
import showAllTaskBox from './showAllTaskBox';

export default function addInitialProjectTitleListeners(projNo) {

    let countAll = projNo
    
    const projects = document.getElementById(`projectHeader`);
    projects.addEventListener('click', () => {showAllTaskBox()});

    const inbox = document.getElementById(`inboxText`);
    inbox.addEventListener('click', () => {showAllTaskBox()});

    if ((countAll) == 1) {
        const project0 = document.getElementById(`0ProjectHead`);
        const project0Text = project0.innerText;
        project0.addEventListener('click', () => {changeProjectTitle(project0Text)});
    } else if ((countAll) == 2) {
        const project1 = document.getElementById(`1ProjectHead`);
        const project1Text = project1.innerText;
        project1.addEventListener('click', () => {changeProjectTitle(project1Text)});
    } else if (countAll == 3) {
        const project2 = document.getElementById(`2ProjectHead`);
        const project2Text = project2.innerText;
        project2.addEventListener('click', () => {changeProjectTitle(project2Text)});
    } else if (countAll == 4) {
        const project3 = document.getElementById(`3ProjectHead`);
        const project3Text = project3.innerText;
        project3.addEventListener('click', () => {changeProjectTitle(project3Text)});
    } else if (countAll == 5) {
        const project4 = document.getElementById(`4ProjectHead`);
        const project4Text = project4.innerText;
        project4.addEventListener('click', () => {changeProjectTitle(project4Text)});
    } else if (countAll == 6) {
        const project5 = document.getElementById(`5ProjectHead`);
        const project5Text = project5.innerText;
        project5.addEventListener('click', () => {changeProjectTitle(project5Text)});
    } else if (countAll == 7) {
        const project6 = document.getElementById(`6ProjectHead`);
        const project6Text = project6.innerText;
        project6.addEventListener('click', () => {changeProjectTitle(project6Text)});
    } else if (countAll == 8) {
        const project7 = document.getElementById(`7ProjectHead`);
        const project7Text = project7.innerText;
        project7.addEventListener('click', () => {changeProjectTitle(project7Text)});
    } else if (countAll == 9) {
        const project8 = document.getElementById(`8ProjectHead`);
        const project8Text = project8.innerText;
        project8.addEventListener('click', () => {changeProjectTitle(project8Text)});
    } else if (countAll == 10) {
        const project9 = document.getElementById(`9ProjectHead`);
        const project9Text = project9.innerText;
        project9.addEventListener('click', () => {changeProjectTitle(project9Text)});
    } else if (countAll == 11) {
        const project10 = document.getElementById(`10ProjectHead`);
        const project10Text = project10.innerText;
        project10.addEventListener('click', () => {changeProjectTitle(project10Text)});
    } else if (countAll == 12) {
        const project11 = document.getElementById(`11ProjectHead`);
        const project11Text = project11.innerText;
        project11.addEventListener('click', () => {changeProjectTitle(project11Text)});
    } else if (countAll == 13) {
        const project12 = document.getElementById(`12ProjectHead`);
        const project12Text = project12.innerText;
        project12.addEventListener('click', () => {changeProjectTitle(project12Text)});
    } else if (countAll == 14) {
        const project13 = document.getElementById(`13ProjectHead`);
        const project13Text = project13.innerText;
        project13.addEventListener('click', () => {changeProjectTitle(project13Text)});
    } else if (countAll == 15) {
        const project14 = document.getElementById(`14ProjectHead`);
        const project14Text = project14.innerText;
        project14.addEventListener('click', () => {changeProjectTitle(project14Text)});
    }
}