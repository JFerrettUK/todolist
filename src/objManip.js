import createProjectObject from './createProjectObject';
import createTaskObject from './createProjectObject';
import getProjectNo from './getProjectNo';


export default function objManip() {
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
    
    document.getElementById("titleHead").addEventListener("click", function(){
        console.log(projectList.getArray())
        console.log(projectList.getController())
        projectList.nextTurn()
        const newProject = new createProjectObject("todoList", "0Proj")
        projectList.addNewProject(newProject)
    });
}