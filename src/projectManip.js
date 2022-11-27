import createProjectObject from './createProjectObject';
import createTaskObject from './createProjectObject';
import getProjectNo from './getProjectNo';
import submitNewProject from './submitNewProject';
import createInputTaskArray from './createInputTaskArray';
import createTaskArray from './createTaskArray';
import createTaskBox from './createTaskBox';
import closeTaskBox from './closeTaskBox';


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
        const defaultProject = new createProjectObject("0Project");
        projectList.addNewProject(defaultProject);
    }

    makeDefaultProject()

    //creates a new project with same name as drop input (in "projectList" / 
    //named "[no]Project") and header IDs ("[no]ProjectHead")
    const submitButton = document.getElementById("submitButton")

    submitButton.addEventListener("click", function (){
        let projectNo = getProjectNo();
        projectNo -= 1;

        const newProject = new createProjectObject(`${projectNo}Project`);
        projectList.addNewProject(newProject);
    });

    //add a task to projectList [1]
    submitButton.addEventListener("click", function (){
        const testValue = document.getElementById('textInput').value;
        console.log(testValue)
        console.log(projectList.getProject(1));
    });


    //create a task object
    const submitTask = document.getElementById("taskSubmitButton");

    submitTask.addEventListener("click", function (){
        const array = createInputTaskArray();
        const input = createTaskArray(array);
        const defaultProject = new createTaskObject(input);
        console.log(defaultProject);
    });
}