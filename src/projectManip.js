import createProjectObject from './createProjectObject';

import createTaskObject from './createProjectObject';
import getProjectNo from './getProjectNo';


export default function projectManip() {
    const projectList = (function () {

        //the array for the gameboard i.e. what should be displayed on the screen
        let projectList = []
    
        const todoListProject = new createProjectObject("todoList", "1Proj")
        console.log(todoListProject)

        //turn order variable -- who's controlling the game?
        let controller = 0;
    
        return {
            getArray: function() { 
                return projectList 
            },
    
            getController: function() {
                return controller;
            },
    
            nextTurn: function() {
                controller += 1;
            },

            addNewProject: function(todoListProject) {
                projectList.push(todoListProject)
            },
        }
    })();

    function makeDefaultProject() {        
        const defaultProject = new createProjectObject("TodoList", "0Project");
        projectList.addNewProject(defaultProject);
    }

    makeDefaultProject()

    document.getElementById("submitButton").addEventListener("click", function(){
        let projectNo = getProjectNo()
        projectNo -= 1

        let newProjectValue = document.getElementById('textInput').value;
        console.log(newProjectValue)

        const newProject = new createProjectObject(newProjectValue, `${projectNo}Project`)
        projectList.addNewProject(newProject)
        console.log(projectList.getArray())
    });
}