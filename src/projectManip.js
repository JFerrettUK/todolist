import Project from './createProjectObject';
import Task from './createTaskObject';
import getProjectNo from './getProjectNo';
import createInputEditTaskArray from './createInputEditTaskArray';
import createTaskArray from './createTaskArray';
import createInputTaskArray from './createInputTaskArray';
import getAssignedProjectAsNo from './getAssignedProjectAsNo';
import getLastBox from './getLastBox';


export default function projectManip() {
    const projectList = (function () {

        //the array for the gameboard i.e. what should be displayed on the screen
        let projectList = []
       
        return {
            //get the entire array of projects
            getArray: function() { 
                return projectList 
            },
            
            //get a single project from the array based on its index
            getProject: function(projectNo) {
                return projectList[projectNo]
            },

            //add a new project to the array
            addNewProject: function(projectHere) {
                projectList.push(projectHere)
            },

            //add a new project to the array
            replaceProject: function(whichProject, replacementArray) {
                projectList.splice(whichProject, 1, replacementArray)
            },
            
        }
    })();

    function makeDefaultProject() {        
        const defaultProject = new Project("0Project", "TodoList");
        projectList.addNewProject(defaultProject);
    }

    makeDefaultProject()

    //creates a new project with same name as drop input (in "projectList" / 
    //named "[no]Project") and header IDs ("[no]ProjectHead")
    const projectSubmitButton = document.getElementById("submitButton")

    projectSubmitButton.addEventListener("click", function (){
        let projectNo = getProjectNo();
        projectNo -= 1;

        const nameProjValue = document.getElementById('textInput').value;
        console.log(nameProjValue)

        if (nameProjValue.length < 4) {
            alert("Project name must be at least 4 characters long");
            return;
        }

        const newProject = new Project(`${projectNo}Project`, nameProjValue);
        projectList.addNewProject(newProject);
        console.log(projectList.getArray())
    });

    //add task to project

    const taskSubmitButton = document.getElementById("taskSubmitButton")

    taskSubmitButton.addEventListener("click", function (){
        //make the task from inputs
        let array = createInputTaskArray()
        const input = createTaskArray(array);
        const arrayObj = new Task(input);

        //append the task in the relevant project

        const whichProject = getAssignedProjectAsNo();

        let project = projectList.getProject(whichProject);
        project.appendTask(arrayObj);

        projectList.replaceProject(whichProject, project);
        console.log(projectList.getProject(whichProject));
    });


    //addEditProjectManipListeners here so it can edit projectList
    function addEditProjectManipListeners() {

        let boxNo = getLastBox()
        
        if (boxNo == 0) {
            return
        } else if (boxNo == 1) {
            const saveEdit0 = document.getElementById("0editTaskSubmitButton");
            saveEdit0.addEventListener('click', () => {
                let array = createInputEditTaskArray(0);
                console.log(array)
                return 
            });   
        } else if (boxNo == 2) {
            const saveEdit1 = document.getElementById("1editTaskSubmitButton");
            saveEdit1.addEventListener('click', () => {
                let array = createInputEditTaskArray(1);
                console.log(array)
                return array
            });   
        } else if (boxNo == 3) {
            const saveEdit2 = document.getElementById("2editTaskSubmitButton");
            saveEdit2.addEventListener('click', () => {console.log("test2")});       
            saveEdit2.addEventListener('click', () => {
                let array = createInputEditTaskArray(2);
                console.log(array)
                return array
            });   
        } else if (boxNo == 4) {
            const saveEdit3 = document.getElementById("3editTaskSubmitButton");
            saveEdit3.addEventListener('click', () => {
                let array = createInputEditTaskArray(3);
                console.log(array)
                return array
            });   
        } else if (boxNo == 5) {
            const saveEdit4 = document.getElementById("4editTaskSubmitButton");
            saveEdit4.addEventListener('click', () => {
                let array = createInputEditTaskArray(4);
                console.log(array)
                return array
            });   
        } else if (boxNo == 6) {
            const saveEdit5 = document.getElementById("5editTaskSubmitButton");
            saveEdit5.addEventListener('click', () => {createInputEditTaskArray(5)});
            saveEdit5.addEventListener('click', () => {
                let array = createInputEditTaskArray(5);
                console.log(array)
                return array
            });   
            const saveEdit6 = document.getElementById("6editTaskSubmitButton");
            saveEdit6.addEventListener('click', () => {
                let array = createInputEditTaskArray(6);
                console.log(array)
                return array
            });   
        } else if (boxNo == 8) {
            const saveEdit7 = document.getElementById("7editTaskSubmitButton");
            saveEdit7.addEventListener('click', () => {
                let array = createInputEditTaskArray(7);
                console.log(array)
                return array
            });   
        } else if (boxNo == 9) {
            const saveEdit8 = document.getElementById("8editTaskSubmitButton");
            saveEdit8.addEventListener('click', () => {
                let array = createInputEditTaskArray(8);
                console.log(array)
                return array
            });   
        } else if (boxNo == 10) {
            const saveEdit9 = document.getElementById("9editTaskSubmitButton");
            saveEdit9.addEventListener('click', () => {
                let array = createInputEditTaskArray(9);
                console.log(array)
                return array
            });   
        } else if (boxNo == 11) {
            const saveEdit10 = document.getElementById("10editTaskSubmitButton");
            saveEdit10.addEventListener('click', () => {
                let array = createInputEditTaskArray(10);
                console.log(array)
                return array
            });   
        } else if (boxNo == 12) {
            const saveEdit11 = document.getElementById("11editTaskSubmitButton");
            saveEdit11.addEventListener('click', () => {
                let array = createInputEditTaskArray(11);
                console.log(array)
                return array
            });   
        } else if (boxNo == 13) {
            const saveEdit12 = document.getElementById("12editTaskSubmitButton");
            saveEdit12.addEventListener('click', () => {
                let array = createInputEditTaskArray(12);
                console.log(array)
                return array
            });   
        } else if (boxNo == 14) {
            const saveEdit13 = document.getElementById("13editTaskSubmitButton");
            saveEdit13.addEventListener('click', () => {
                let array = createInputEditTaskArray(13);
                console.log(array)
                return array
            });   
        } else if (boxNo == 15) {
            const saveEdit14 = document.getElementById("14editTaskSubmitButton");
            saveEdit14.addEventListener('click', () => {
                let array = createInputEditTaskArray(14);
                console.log(array)
                return array
            });   
        }
    }

    taskSubmitButton.addEventListener("click", function (){
        addEditProjectManipListeners()
    });

    addEditProjectManipListeners()
}