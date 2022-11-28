import Project from './createProjectObject';
import Task from './createTaskObject';
import getProjectNo from './getProjectNo';
import submitNewProject from './submitNewProject';
import createInputTaskArray from './createInputTaskArray';
import createTaskArray from './createTaskArray';
import createTaskBox from './createTaskBox';
import closeTaskBox from './closeTaskBox';
import { create } from 'lodash';


export default function projectManip() {
    const projectList = (function () {

        //the array for the gameboard i.e. what should be displayed on the screen
        let projectList = []
    
        //turn order variable -- who's controlling the game?
        let controller = 0;
    
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
            addNewProject: function(todoListProject) {
                projectList.push(todoListProject)
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
    const submitButton = document.getElementById("submitButton")

    submitButton.addEventListener("click", function (){
        let projectNo = getProjectNo();

        const nameProjValue = document.getElementById('textInput').value;

        const newProject = new Project(`${projectNo}Project`, nameProjValue);
        projectList.addNewProject(newProject);
        console.log(projectList.getArray())
    });

    //add a task to projectList [0]
    const taskSubmitButton = document.getElementById("taskSubmitButton")

    taskSubmitButton.addEventListener("click", function (){
        let array = createInputTaskArray()
        console.log(array)

        //issues here and below
        const input = createTaskArray(array);
        console.log(input.task())
        console.log(input)

        const arrayObj = new Task(input);
        console.log(arrayObj);
        console.log(arrayObj.getTaskName());
    });
}