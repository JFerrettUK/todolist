

import Project from './createProjectObject';
import Task from './createTaskObject';
import getProjectNo from './getProjectNo';
import createInputEditTaskArray from './createInputEditTaskArray';
import createTaskArray from './createTaskArray';
import getAssignedProjectAsNo from './getAssignedProjectAsNo';
import addEditProjectManipListeners from './addEditProjectManipListeners';
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

        const nameProjValue = document.getElementById('textInput').value;

        const newProject = new Project(`${projectNo}Project`, nameProjValue);
        projectList.addNewProject(newProject);
    });

    const taskSubmitButton = document.getElementById("taskSubmitButton")

    taskSubmitButton.addEventListener("click", function (){
        addEditProjectManipListeners()
    });

    addEditProjectManipListeners()
}