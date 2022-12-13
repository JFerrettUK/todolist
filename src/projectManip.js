import Project from './createProjectObject';
import Task from './createTaskObject';
import getProjectNo from './getProjectNo';
import createInputEditTaskArray from './createInputEditTaskArray';
import createTaskArray from './createTaskArray';
import createInputTaskArray from './createInputTaskArray';
import getAssignedProjectAsNo from './getAssignedProjectAsNo';
import getLastBox from './getLastBox';
import getProjectNoFromInput from './getProjectNoFromInput';
import getProjectNoFromDOM from './getProjectNoFromDOM';
import hideAllTaskBox from './hideAllTaskBox';

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
            replaceProject: function(projectNo, replacementArray) {
                projectList.splice(projectNo, 1, replacementArray)
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

        if (nameProjValue.length < 4) {
            alert("Project name must be at least 4 characters long");
            return;
        }

        const newProject = new Project(`${projectNo}Project`, nameProjValue);
        projectList.addNewProject(newProject);
    });

    //add task to project

    const taskSubmitButton = document.getElementById("taskSubmitButton")

    //addEditProjectManipListeners here so it can edit projectList
    function addEditProjectManipListeners() {
        let boxNo = getLastBox()
        
        if (boxNo == 0) {
            return
        } else if (boxNo == 1) {
            const saveTaskEdit0 = document.getElementById("0editTaskSubmitButton");
            saveTaskEdit0.addEventListener('click', () => {
                //get the assigned project number
                const assignedProject = getProjectNoFromDOM(0)
                const projectNo = getProjectNoFromInput(assignedProject)

                //get the assigned project object
                const project = projectList.getProject(projectNo)

                //save new task data as an array
                const inputArray = createInputEditTaskArray(0);
                const input = createTaskArray(inputArray);
                const replacementTask = new Task(input);
                //taskNo
                const taskNo = replacementTask.getTaskNo()

                //replace the task within the project using getTaskNo
                project.replaceTask(taskNo, replacementTask)

                //replace the project in projectList
                projectList.replaceProject(projectNo, project)

                console.log(projectList.getArray())

                return 
            });   
        } else if (boxNo == 2) {
            const saveTaskEdit1 = document.getElementById("1editTaskSubmitButton");
            saveTaskEdit1.addEventListener('click', () => {
                const assignedProject = getProjectNoFromDOM(1)
                const projectNo = getProjectNoFromInput(assignedProject)

                const project = projectList.getProject(projectNo)

                const inputArray = createInputEditTaskArray(1);
                const input = createTaskArray(inputArray);
                const replacementTask = new Task(input);

                const taskNo = replacementTask.getTaskNo()

                project.replaceTask(taskNo, replacementTask)

                projectList.replaceProject(projectNo, project)

                return 
            });   
        } else if (boxNo == 3) {
            const saveTaskEdit2 = document.getElementById("2editTaskSubmitButton");
            saveTaskEdit2.addEventListener('click', () => {
                const assignedProject = getProjectNoFromDOM(2)
                const projectNo = getProjectNoFromInput(assignedProject)

                const project = projectList.getProject(projectNo)

                const inputArray = createInputEditTaskArray(2);
                const input = createTaskArray(inputArray);
                const replacementTask = new Task(input);

                const taskNo = replacementTask.getTaskNo()

                project.replaceTask(taskNo, replacementTask)

                projectList.replaceProject(projectNo, project)

                return 
            });   
        } else if (boxNo == 4) {
            const saveTaskEdit3 = document.getElementById("3editTaskSubmitButton");
            saveTaskEdit3.addEventListener('click', () => {
                const assignedProject = getProjectNoFromDOM(3)
                const projectNo = getProjectNoFromInput(assignedProject)

                const project = projectList.getProject(projectNo)

                const inputArray = createInputEditTaskArray(3);
                const input = createTaskArray(inputArray);
                const replacementTask = new Task(input);
                const taskNo = replacementTask.getTaskNo()

                project.replaceTask(taskNo, replacementTask)

                projectList.replaceProject(projectNo, project)

                return 
            });   
        } else if (boxNo == 5) {
            const saveTaskEdit4 = document.getElementById("4editTaskSubmitButton");
            saveTaskEdit4.addEventListener('click', () => {
                const assignedProject = getProjectNoFromDOM(4)
                const projectNo = getProjectNoFromInput(assignedProject)

                const project = projectList.getProject(projectNo)

                const inputArray = createInputEditTaskArray(4);
                const input = createTaskArray(inputArray);
                const replacementTask = new Task(input);
                const taskNo = replacementTask.getTaskNo()

                project.replaceTask(taskNo, replacementTask)

                projectList.replaceProject(projectNo, project)

                return 
            });   
        } else if (boxNo == 6) {
            const saveTaskEdit5 = document.getElementById("5editTaskSubmitButton");
            saveTaskEdit5.addEventListener('click', () => {
                const assignedProject = getProjectNoFromDOM(5)
                const projectNo = getProjectNoFromInput(assignedProject)

                const project = projectList.getProject(projectNo)

                const inputArray = createInputEditTaskArray(5);
                const input = createTaskArray(inputArray);
                const replacementTask = new Task(input);
                const taskNo = replacementTask.getTaskNo()

                project.replaceTask(taskNo, replacementTask)

                projectList.replaceProject(projectNo, project)

                return 
            });   
        } else if (boxNo == 7) {
            const saveTaskEdit6 = document.getElementById("6editTaskSubmitButton");
            saveTaskEdit6.addEventListener('click', () => {
                const assignedProject = getProjectNoFromDOM(6)
                const projectNo = getProjectNoFromInput(assignedProject)

                const project = projectList.getProject(projectNo)

                const inputArray = createInputEditTaskArray(6);
                const input = createTaskArray(inputArray);
                const replacementTask = new Task(input);
                const taskNo = replacementTask.getTaskNo()

                project.replaceTask(taskNo, replacementTask)

                projectList.replaceProject(projectNo, project)

                return 
            });   
        } else if (boxNo == 8) {
            const saveTaskEdit7 = document.getElementById("7editTaskSubmitButton");
            saveTaskEdit7.addEventListener('click', () => {
                const assignedProject = getProjectNoFromDOM(7)
                const projectNo = getProjectNoFromInput(assignedProject)

                const project = projectList.getProject(projectNo)

                const inputArray = createInputEditTaskArray(7);
                const input = createTaskArray(inputArray);
                const replacementTask = new Task(input);
                const taskNo = replacementTask.getTaskNo()

                project.replaceTask(taskNo, replacementTask)

                projectList.replaceProject(projectNo, project)

                return 
            });   
        } else if (boxNo == 9) {
            const saveTaskEdit8 = document.getElementById("8editTaskSubmitButton");
            saveTaskEdit8.addEventListener('click', () => {
                const assignedProject = getProjectNoFromDOM(8)
                const projectNo = getProjectNoFromInput(assignedProject)

                const project = projectList.getProject(projectNo)

                const inputArray = createInputEditTaskArray(8);
                const input = createTaskArray(inputArray);
                const replacementTask = new Task(input);

                const taskNo = replacementTask.getTaskNo()

                project.replaceTask(taskNo, replacementTask)

                projectList.replaceProject(projectNo, project)

                return 
            });    
        } else if (boxNo == 10) {
            const saveTaskEdit9 = document.getElementById("9editTaskSubmitButton");
            saveTaskEdit9.addEventListener('click', () => {
                const assignedProject = getProjectNoFromDOM(9)
                const projectNo = getProjectNoFromInput(assignedProject)

                const project = projectList.getProject(projectNo)

                const inputArray = createInputEditTaskArray(9);
                const input = createTaskArray(inputArray);
                const replacementTask = new Task(input);

                const taskNo = replacementTask.getTaskNo()

                project.replaceTask(taskNo, replacementTask)

                projectList.replaceProject(projectNo, project)

                return 
            });     
        } else if (boxNo == 11) {
            const saveTaskEdit10 = document.getElementById("10editTaskSubmitButton");
            saveTaskEdit10.addEventListener('click', () => {
                const assignedProject = getProjectNoFromDOM(10)
                const projectNo = getProjectNoFromInput(assignedProject)

                const project = projectList.getProject(projectNo)

                const inputArray = createInputEditTaskArray(10);
                const input = createTaskArray(inputArray);
                const replacementTask = new Task(input);
                const taskNo = replacementTask.getTaskNo()

                project.replaceTask(taskNo, replacementTask)

                projectList.replaceProject(projectNo, project)

                return 
            });   
        } else if (boxNo == 12) {
            const saveTaskEdit11 = document.getElementById("11editTaskSubmitButton");
            saveTaskEdit11.addEventListener('click', () => {
                const assignedProject = getProjectNoFromDOM(11)
                const projectNo = getProjectNoFromInput(assignedProject)

                const project = projectList.getProject(projectNo)

                const inputArray = createInputEditTaskArray(11);
                const input = createTaskArray(inputArray);
                const replacementTask = new Task(input);
                const taskNo = replacementTask.getTaskNo()

                project.replaceTask(taskNo, replacementTask)

                projectList.replaceProject(projectNo, project)

                return 
            });   
        } else if (boxNo == 13) {
            const saveTaskEdit12 = document.getElementById("12editTaskSubmitButton");
            saveTaskEdit12.addEventListener('click', () => {
                const assignedProject = getProjectNoFromDOM(12)
                const projectNo = getProjectNoFromInput(assignedProject)

                const project = projectList.getProject(projectNo)

                const inputArray = createInputEditTaskArray(12);
                const input = createTaskArray(inputArray);
                const replacementTask = new Task(input);
                const taskNo = replacementTask.getTaskNo()

                project.replaceTask(taskNo, replacementTask)

                projectList.replaceProject(projectNo, project)

                return 
            });    
        } else if (boxNo == 14) {
            const saveTaskEdit13 = document.getElementById("13editTaskSubmitButton");
            saveTaskEdit13.addEventListener('click', () => {
                const assignedProject = getProjectNoFromDOM(13)
                const projectNo = getProjectNoFromInput(assignedProject)

                const project = projectList.getProject(projectNo)

                const inputArray = createInputEditTaskArray(13);
                const input = createTaskArray(inputArray);
                const replacementTask = new Task(input);
                const taskNo = replacementTask.getTaskNo()

                project.replaceTask(taskNo, replacementTask)

                projectList.replaceProject(projectNo, project)

                return 
            });   
        } else if (boxNo == 15) {
            const saveTaskEdit14 = document.getElementById("14editTaskSubmitButton");
            saveTaskEdit14.addEventListener('click', () => {
                const assignedProject = getProjectNoFromDOM(14)
                const projectNo = getProjectNoFromInput(assignedProject)

                const project = projectList.getProject(projectNo)

                const inputArray = createInputEditTaskArray(14);
                const input = createTaskArray(inputArray);
                const replacementTask = new Task(input);
                const taskNo = replacementTask.getTaskNo()

                project.replaceTask(taskNo, replacementTask)

                projectList.replaceProject(projectNo, project)

                return 
            });   
        }
    }
    
    taskSubmitButton.addEventListener("click", function (){
        //make the task from inputs
        let array = createInputTaskArray()
        const input = createTaskArray(array);
        const arrayObj = new Task(input);

        //stop if due date not working
        if (document.getElementById('dueDate').value == '') {
            return
        }      

        //append the task in the relevant project
        const whichProject = getAssignedProjectAsNo();

        let project = projectList.getProject(whichProject);
        project.appendTask(arrayObj);

        projectList.replaceProject(whichProject, project);

        addEditProjectManipListeners()

        console.log(projectList.getArray())

    });

    //add listeners for clicking and selecting which projects display

    addEditProjectManipListeners()

    //finds the relevant project when editing a task box
    function getProject(valueHere) {
        hideAllTaskBox()
        let projectArray = projectList.getArray();
        let relevantProject = projectArray[valueHere]
        let tasksHere = relevantProject.getTasks()

        //problem is here! Can't filter by project after editing and saving a task.
        tasksHere.forEach(function (tasksHere) {
            let x = tasksHere.taskNo;
            console.log(x)
            x -= 1;
            document.getElementById(`${x}Cont`).style.display = "grid";
        });
    }

    function addProjectListeners() {

        let countAll = getProjectNo()
        
            if ((countAll) == 1) {
                const project0 = document.getElementById(`0ProjectHead`);
                project0.addEventListener('click', () => {getProject(0)});
            } else if ((countAll) == 2) {
                const project1 = document.getElementById(`1ProjectHead`);
                project1.addEventListener('click', () => {getProject(1)});
            } else if (countAll == 3) {
                const project2 = document.getElementById(`2ProjectHead`);
                project2.addEventListener('click', () => {getProject(2)});
            } else if (countAll == 4) {
                const project3 = document.getElementById(`3ProjectHead`);
                project3.addEventListener('click', () => {getProject(3)});
            } else if (countAll == 5) {
                const project4 = document.getElementById(`4ProjectHead`);
                project4.addEventListener('click', () => {getProject(4)});
            } else if (countAll == 6) {
                const project5 = document.getElementById(`5ProjectHead`);
                project5.addEventListener('click', () => {getProject(5)});
            } else if (countAll == 7) {
                const project6 = document.getElementById(`6ProjectHead`);
                project6.addEventListener('click', () => {getProject(6)});
            } else if (countAll == 8) {
                const project7 = document.getElementById(`7ProjectHead`);
                project7.addEventListener('click', () => {getProject(7)});
            } else if (countAll == 9) {
                const project8 = document.getElementById(`8ProjectHead`);
                project8.addEventListener('click', () => {getProject(8)});
            } else if (countAll == 10) {
                const project9 = document.getElementById(`9ProjectHead`);
                project9.addEventListener('click', () => {getProject(9)});
            } else if (countAll == 11) {
                const project10 = document.getElementById(`10ProjectHead`);
                project10.addEventListener('click', () => {getProject(10)});
            } else if (countAll == 12) {
                const project11 = document.getElementById(`11ProjectHead`);
                project11.addEventListener('click', () => {getProject(11)});
            } else if (countAll == 13) {
                const project12 = document.getElementById(`12ProjectHead`);
                project12.addEventListener('click', () => {getProject(12)});
            } else if (countAll == 14) {
                const project13 = document.getElementById(`13ProjectHead`);
                project13.addEventListener('click', () => {getProject(13)});
            } else if (countAll == 15) {
                const project14 = document.getElementById(`14ProjectHead`);
                project14.addEventListener('click', () => {getProject(14)});
            }
        }

    projectSubmitButton.addEventListener("click", function (){
        const nameProjValue = document.getElementById('textInput').value;
        if (nameProjValue.length < 4) {
            return;
        }

        addProjectListeners()
    });

    addProjectListeners()

    return projectList
}