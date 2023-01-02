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
import createTaskBox from './createTaskBox';
import createTaskArrayLocalSpace from './createTaskArrayLocalSpace';
import addInitialDeleteListeners from './addInitialDeleteListeners';
import addInitialEditListeners from './addInitialEditListeners';
import addInitialProjectTitleListeners from './addInitialProjectTitleListeners';
import getLastProject from './getLastProject';

import { replace } from 'lodash';

export default function projectManip() {
    const projectList = (function () {

        //the array for the gameboard i.e. what should be displayed on the screen
        let projectArray = []
       
        return {
            //get the entire array of projects
            getArray: function() { 
                return projectArray 
            },
            
            //get a single project from the array based on its index
            getProject: function(projectNo) {
                return projectArray[projectNo]
            },

            //add a new project to the array
            addNewProject: function(projectHere) {
                projectArray.push(projectHere)
            },

            //add a new project to the array
            replaceProject: function(projectNo, replacementArray) {
                projectArray.splice(projectNo, 1, replacementArray)
            },

            //add a new project to the array
            replaceProjectArray: function(replacementArray) {
                projectArray = replacementArray;
            },
        }
    })();

    function arrayInLocal() {
        let projectArray = projectList.getArray();
        localStorage.setItem("myLocalStore", JSON.stringify(projectArray));
    }

    function makeInitialProjects() { 
        let myLocalData = JSON.parse(window.localStorage.getItem("myLocalStore"))
       
        if (myLocalData == null) {
            const defaultProject = new Project("0Project", "TodoList");
            projectList.addNewProject(defaultProject);
            console.log("noLocalData")
        } else {
            //OBJ: make a default array as though it's a new page
            const defaultProject = new Project("0Project", "TodoList");
            projectList.addNewProject(defaultProject);

            //OBJ: replace that array with localStorage
            projectList.replaceProjectArray(myLocalData);
            function turnLocalProjIntoObj () {
                let array = myLocalData;

                //loop through projects and make each an object
                for (let i = 0; i < array.length; i++) {
                    let project = array[i]
                    let projectID = project.id
                    let projectName = project.name

                    let idNo = getProjectNoFromInput(projectID)

                    let newProject = new Project(projectID, projectName)
                    projectList.replaceProject(idNo, newProject)
                }
            }
            turnLocalProjIntoObj()

            //OBJ: remake tasks as classes
            function getTaskList() {
                let array  = JSON.parse(window.localStorage.getItem("myLocalStore"))
                let tasks = array.tasks
                let completeTaskList = []

                //loop through those projects to get tasks
                for (let i = 0; i < array.length; i++) {
                    let taskList = array[i].tasks
                    
                    //append each task in a new list
                    for (let i = 0; i < taskList.length; i++) {
                        completeTaskList.push(taskList[i])
                    }
                }

                return completeTaskList
            }
            let completeTaskList = getTaskList()
            function remakeTaskAsClass() {
                let tasksAsClassesArray = []
                for (let i = 0; i < completeTaskList.length; i++) {
                    let taskArray = []
                
                    taskArray[0] = i
                    taskArray[1] = completeTaskList[i].taskName
                    taskArray[2] = completeTaskList[i].projectName
                    taskArray[3] = completeTaskList[i].priority
                    taskArray[4] = completeTaskList[i].shortDesc
                    taskArray[5] = completeTaskList[i].dueDate

                    let complTaskArray = createTaskArray(taskArray)

                    tasksAsClassesArray[i] = new Task(complTaskArray)
                }

                return tasksAsClassesArray
            }
            let allLocalTaskClasses = remakeTaskAsClass()

            //OBJ: replace tasks in the project objects
            function replaceTasksInProjects() {
                let project0 = -1
                let project1 = -1
                let project2 = -1
                let project3 = -1
                let project4 = -1
                let project5 = -1
                let project6 = -1
                let project7 = -1
                let project8 = -1
                let project9 = -1
                let project10 = -1
                let project11 = -1
                let project12 = -1
                let project13 = -1

                for (let i = 0; i < allLocalTaskClasses.length; i++) {
                    //get NEW project name and task no
                    let projectName = allLocalTaskClasses[i].projectName
                    let projectNo = getProjectNoFromInput(projectName)
                    let newTask = allLocalTaskClasses[i]
                    let taskNo = allLocalTaskClasses[i].taskNo

                    //get OLD project and task
                    let oldProject = projectList.getProject(projectNo)

                    //make a function that checks how many projectNames have occured
                    function countProjectNames() { 
                        if (projectName == `0Project`) {
                            project0++
                        } else if (projectName == `1Project`) {
                            project1++
                        } else if (projectName == `2Project`) {
                            project2++
                        } else if (projectName == `3Project`) {
                            project3++
                        } else if (projectName == `4Project`) {
                            project4++
                        } else if (projectName == `5Project`) {
                            project5++
                        } else if (projectName == `6Project`) {
                            project6++
                        } else if (projectName == `7Project`) {
                            project7++
                        } else if (projectName == `8Project`) {
                            project8++
                        } else if (projectName == `9Project`) {
                            project9++
                        } else if (projectName == `10Project`) {
                            project10++
                        } else if (projectName == `11Project`) {
                            project11++
                        } else if (projectName == `12Project`) {
                            project12++
                        } else if (projectName == `13Project`) {
                            project13++
                        }
                    }
                    countProjectNames()

                    if (projectName == `0Project`) {
                        oldProject.replaceTask(project0, newTask)
                    } else if (projectName == `1Project`) {
                        oldProject.replaceTask(project1, newTask)
                    } else if (projectName == `2Project`) {
                        oldProject.replaceTask(project2, newTask)
                    } else if (projectName == `3Project`) {
                        oldProject.replaceTask(project3, newTask)
                    } else if (projectName == `4Project`) {
                        oldProject.replaceTask(project4, newTask)
                    } else if (projectName == `5Project`) {
                        oldProject.replaceTask(project5, newTask)
                    } else if (projectName == `6Project`) {
                        oldProject.replaceTask(project6, newTask)
                    } else if (projectName == `7Project`) {
                        oldProject.replaceTask(project7, newTask)
                    } else if (projectName == `8Project`) {
                        oldProject.replaceTask(project8, newTask)
                    } else if (projectName == `9Project`) {
                        oldProject.replaceTask(project9, newTask)
                    } else if (projectName == `10Project`) {
                        oldProject.replaceTask(project10, newTask)
                    } else if (projectName == `11Project`) {
                        oldProject.replaceTask(project11, newTask)
                    } else if (projectName == `12Project`) {
                        oldProject.replaceTask(project12, newTask)
                    } else if (projectName == `13Project`) {
                        oldProject.replaceTask(project13, newTask)
                    }

                    projectList.replaceProject(projectNo, oldProject)

                }
            }
            replaceTasksInProjects()

            //DOM: make project headers in the projectHeader element of the DOM 
            function makeProjectHeaderLocalSpace() {
                let completeList = projectList.getArray()
                document.getElementById('projectsHere').innerHTML = '';

                for (let i = 0; i < completeList.length; i++) {
                    let projectName = completeList[i].name

                    let projectHere = document.getElementById('projectsHere');
                    let breakPoint = document.createElement('br');
                               
                    let project = document.createElement('span');
                    project.setAttribute("class", `newProjectTxt`);
                
                    project.setAttribute("id", `${i}ProjectHead`);   
                    project.textContent = `- ${projectName}`;
                
                    projectHere.appendChild(project);
                    projectHere.appendChild(breakPoint);
                }
            }
            makeProjectHeaderLocalSpace()

            //DOM: make project options in the projectTask form element of the DOM 
            function createProjectTaskOptionLocalSpace() {
                let completeList = projectList.getArray()

                const projectListHere = document.getElementById('projectList');
                document.getElementById('projectList').innerHTML = '';
            
                for (let i = 0; i < completeList.length; i++) {
                    const newOption = document.createElement('option');
                    newOption.setAttribute("class", `newProjects`);
                    newOption.setAttribute("id", `${i}Project`);

                    let projectName = completeList[i].name
                    newOption.textContent = `${projectName}`;
                
                    projectListHere.appendChild(newOption);
                }
            }
            createProjectTaskOptionLocalSpace()
            
            //DOM: gets the number of boxes and makes projectTitle listeners for each
            function makeAllProjectTitleListeners() {
                let noOfProjects = getLastProject()

                for (let i = 0; i <= noOfProjects; i++) {
                    addInitialProjectTitleListeners(i)
                }
            }
            makeAllProjectTitleListeners()

            //DOM: replace tasks in the project objects
            function makeTaskBoxes() {
                for (let i = 0; i < allLocalTaskClasses.length; i++) {
                    let taskArray = createTaskArrayLocalSpace(allLocalTaskClasses[i])
                    createTaskBox(taskArray)
                }
            }
            makeTaskBoxes()

            //problem is how InitialDeleteTaskListeners finds the task:
            //when a box is deleted, it stays in the DOM. It is removed from the system,
            //meaning getLastBox no longer works

            //OBJ: addInitialDeleteTaskListeners here so it can edit projectList
            function addInitialDeleteTaskListeners(taskNo) {          

                if (taskNo == 0) {
                    const trash0 = document.getElementById("0Trash");
                                
                    trash0.addEventListener('click', () => {
                        //get which project this box is using
                        const assignedProject = getProjectNoFromDOM(0)
                        const projectNo = getProjectNoFromInput(assignedProject)
            
                        const project = projectList.getProject(projectNo)
        
                        //find this box's task no
                        let taskNo = document.getElementById("0taskNo")
        
                        project.deleteTask(taskNo)
        
                        projectList.replaceProject(projectNo, project)
                        arrayInLocal()

                    });
                } else if (taskNo == 1) {
                    const trash1 = document.getElementById("1Trash");
            
                    trash1.addEventListener('click', () => {
                        const assignedProject = getProjectNoFromDOM(1)
                        const projectNo = getProjectNoFromInput(assignedProject)
            
                        const project = projectList.getProject(projectNo)
        
                        //find this box's task no
                        let taskNo = document.getElementById(`1taskNo`)
        
                        project.deleteTask(taskNo)
        
                        projectList.replaceProject(projectNo, project)
                        arrayInLocal()

                    });
                } else if (taskNo == 2) {
                    const trash2 = document.getElementById("2Trash");
            
                    trash2.addEventListener('click', () => {
                        const assignedProject = getProjectNoFromDOM(2)
                        const projectNo = getProjectNoFromInput(assignedProject)
            
                        const project = projectList.getProject(projectNo)
        
                        //find this box's task no
                        let taskNo = document.getElementById(`2taskNo`)
        
                        project.deleteTask(taskNo)
        
                        projectList.replaceProject(projectNo, project)
                        arrayInLocal()

                    });
                } else if (taskNo == 3) {
                    const trash3 = document.getElementById("3Trash");
            
                    trash3.addEventListener('click', () => {
                        const assignedProject = getProjectNoFromDOM(3)
                        const projectNo = getProjectNoFromInput(assignedProject)
            
                        const project = projectList.getProject(projectNo)
        
                        //find this box's task no
                        let taskNo = document.getElementById(`3taskNo`)
        
                        project.deleteTask(taskNo)
        
                        projectList.replaceProject(projectNo, project)
                        arrayInLocal()

                    });
                } else if (taskNo == 4) {
                    const trash4 = document.getElementById("4Trash");
            
                    trash4.addEventListener('click', () => {
                        const assignedProject = getProjectNoFromDOM(4)
                        const projectNo = getProjectNoFromInput(assignedProject)
            
                        const project = projectList.getProject(projectNo)
        
                        //find this box's task no
                        let taskNo = document.getElementById(`4taskNo`)
        
                        project.deleteTask(taskNo)
        
                        projectList.replaceProject(projectNo, project)
                        arrayInLocal()

                    });
                } else if (taskNo == 5) {
                    const trash5 = document.getElementById("5Trash");
            
                    trash5.addEventListener('click', () => {
                        const assignedProject = getProjectNoFromDOM(5)
                        const projectNo = getProjectNoFromInput(assignedProject)
            
                        const project = projectList.getProject(projectNo)
        
                        //find this box's task no
                        let taskNo = document.getElementById(`5taskNo`)
        
                        project.deleteTask(taskNo)
        
                        projectList.replaceProject(projectNo, project)
                        arrayInLocal()

                    });
                } else if (taskNo == 6) {
                    const trash6 = document.getElementById("6Trash");
            
                    trash6.addEventListener('click', () => {
                        const assignedProject = getProjectNoFromDOM(6)
                        const projectNo = getProjectNoFromInput(assignedProject)
            
                        const project = projectList.getProject(projectNo)
        
                        //find this box's task no
                        let taskNo = document.getElementById(`6taskNo`)
        
                        project.deleteTask(taskNo)
        
                        projectList.replaceProject(projectNo, project)
                        arrayInLocal()

                    });
                } else if (taskNo == 7) {
                    const trash7 = document.getElementById("7Trash");
            
                    trash7.addEventListener('click', () => {
                        const assignedProject = getProjectNoFromDOM(7)
                        const projectNo = getProjectNoFromInput(assignedProject)
            
                        const project = projectList.getProject(projectNo)
        
                        //find this box's task no
                        let taskNo = document.getElementById(`7taskNo`)
        
                        project.deleteTask(taskNo)
        
                        projectList.replaceProject(projectNo, project)
                        arrayInLocal()

                    });
                } else if (taskNo == 8) {
                    const trash8 = document.getElementById("8Trash");
            
                    trash8.addEventListener('click', () => {
                        const assignedProject = getProjectNoFromDOM(8)
                        const projectNo = getProjectNoFromInput(assignedProject)
            
                        const project = projectList.getProject(projectNo)
        
                        //find this box's task no
                        let taskNo = document.getElementById(`8taskNo`)
        
                        project.deleteTask(taskNo)
        
                        projectList.replaceProject(projectNo, project)
                        arrayInLocal()

                    });
                } else if (taskNo == 9) {
                    const trash9 = document.getElementById("9Trash");
            
                    trash9.addEventListener('click', () => {
                        const assignedProject = getProjectNoFromDOM(9)
                        const projectNo = getProjectNoFromInput(assignedProject)
            
                        const project = projectList.getProject(projectNo)
        
                        //find this box's task no
                        let taskNo = document.getElementById(`9taskNo`)
        
                        project.deleteTask(taskNo)
        
                        projectList.replaceProject(projectNo, project)
                        arrayInLocal()

                    });
                } else if (taskNo == 10) {
                    const trash10 = document.getElementById("10Trash");
            
                    trash10.addEventListener('click', () => {
                        const assignedProject = getProjectNoFromDOM(10)
                        const projectNo = getProjectNoFromInput(assignedProject)
            
                        const project = projectList.getProject(projectNo)
        
                        //find this box's task no
                        let taskNo = document.getElementById(`10taskNo`)
        
                        project.deleteTask(taskNo)
        
                        projectList.replaceProject(projectNo, project)
                        arrayInLocal()
        
                    });
                } else if (taskNo == 11) {
                    const trash11 = document.getElementById("11Trash");
            
                    trash11.addEventListener('click', () => {
                        const assignedProject = getProjectNoFromDOM(11)
                        const projectNo = getProjectNoFromInput(assignedProject)
            
                        const project = projectList.getProject(projectNo)
        
                        //find this box's task no
                        let taskNo = document.getElementById(`11taskNo`)
        
                        project.deleteTask(taskNo)
        
                        projectList.replaceProject(projectNo, project)
                        arrayInLocal()

                    });
                } else if (taskNo == 12) {
                    const trash12 = document.getElementById("12Trash");
            
                    trash12.addEventListener('click', () => {
                        const assignedProject = getProjectNoFromDOM(12)
                        const projectNo = getProjectNoFromInput(assignedProject)
            
                        const project = projectList.getProject(projectNo)
        
                        //find this box's task no
                        let taskNo = document.getElementById(`12taskNo`)
        
                        project.deleteTask(taskNo)
        
                        projectList.replaceProject(projectNo, project)
                        arrayInLocal()
        
                    });
                } else if (taskNo == 13) {
                    const trash13 = document.getElementById("13Trash");
            
                    trash13.addEventListener('click', () => {
                        const assignedProject = getProjectNoFromDOM(13)
                        const projectNo = getProjectNoFromInput(assignedProject)
            
                        const project = projectList.getProject(projectNo)
        
                        //find this box's task no
                        let taskNo = document.getElementById(`13taskNo`)
        
                        project.deleteTask(taskNo)
        
                        projectList.replaceProject(projectNo, project)
                        arrayInLocal()

                    });
                } else if (taskNo == 14) {
                    const trash14 = document.getElementById("14Trash");
            
                    trash14.addEventListener('click', () => {
                        const assignedProject = getProjectNoFromDOM(14)
                        const projectNo = getProjectNoFromInput(assignedProject)
            
                        const project = projectList.getProject(projectNo)
        
                        //find this box's task no
                        let taskNo = document.getElementById(`14taskNo`)
        
                        project.deleteTask(taskNo)
        
                        projectList.replaceProject(projectNo, project)
                        arrayInLocal()

                    });
                }
            }

            // function makeAllDeleteTaskListeners() {
            //     let noOfTasks = getLastBox()

            //     for (let i = 0; i < noOfTasks; i++) {
            //         addInitialDeleteTaskListeners(i)
            //     }
            // }
            // makeAllDeleteTaskListeners()
            
            //DOM: gets the number of boxes and makes Delete listeners for each
            function makeAllDeleteListeners() {
                let noOfBoxes = getLastBox()
                for (let i = 0; i <= noOfBoxes; i++) {
                    addInitialDeleteListeners(i)
                }
            }
            makeAllDeleteListeners()
            
            //DOM: gets the number of boxes and makes Edit listeners for each
            function makeAllEditListeners() {
                let noOfBoxes = getLastBox()
                for (let i = 0; i <= noOfBoxes; i++) {
                    addInitialEditListeners(i);    
                }
            }
            makeAllEditListeners();    

            //DOM: filter project list in DOM
            function makeInitialProjectObjListeners() {                
                let noOfProjects = getLastProject()

                function getInitialProject(projectHere) {
                    hideAllTaskBox()
                    let projectArray = projectList.getArray();
                    let relevantProject = projectArray[projectHere]
                    let tasksHere = relevantProject.getTasks()
            
                    tasksHere.forEach(function (tasksHere) {
                        let x = tasksHere.taskNo;
                        document.getElementById(`${x}Cont`).style.display = "grid";
                    });
                }

                for (let i = 0; i < noOfProjects; i++) {
                    const project = document.getElementById(`${i}ProjectHead`);
                    project.addEventListener('click', () => {getInitialProject(i)});
                }
            }
            makeInitialProjectObjListeners();

            //addInitialEditProjectManipListeners here so it can edit projectList
            function addInitialEditProjectManipListeners() {
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
                        let taskNo = replacementTask.getTaskNo()
                        taskNo -= 1
        
                        //replace the task within the project using getTaskNo
                        project.replaceTask(taskNo, replacementTask)
        
                        //replace the project in projectList
                        projectList.replaceProject(projectNo, project)
        
                        arrayInLocal()
        
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
        
                        let taskNo = replacementTask.getTaskNo()
                        taskNo -= 1
        
                        project.replaceTask(taskNo, replacementTask)
        
                        projectList.replaceProject(projectNo, project)
        
                        arrayInLocal()
        
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
        
                        let taskNo = replacementTask.getTaskNo()
                        taskNo -= 1
        
                        project.replaceTask(taskNo, replacementTask)
        
                        projectList.replaceProject(projectNo, project)
        
                        arrayInLocal()
        
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
        
                        let taskNo = replacementTask.getTaskNo()
                        taskNo -= 1
                        
                        project.replaceTask(taskNo, replacementTask)
        
                        projectList.replaceProject(projectNo, project)
        
                        arrayInLocal()
        
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
        
                        let taskNo = replacementTask.getTaskNo()
                        taskNo -= 1
                        
                        project.replaceTask(taskNo, replacementTask)
        
                        projectList.replaceProject(projectNo, project)
        
                        arrayInLocal()
        
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
        
                        let taskNo = replacementTask.getTaskNo()
                        taskNo -= 1
                        
                        project.replaceTask(taskNo, replacementTask)
        
                        projectList.replaceProject(projectNo, project)
        
                        arrayInLocal()
        
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
        
                        let taskNo = replacementTask.getTaskNo()
                        taskNo -= 1
                        
                        project.replaceTask(taskNo, replacementTask)
        
                        projectList.replaceProject(projectNo, project)
        
                        arrayInLocal()
        
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
        
                        let taskNo = replacementTask.getTaskNo()
                        taskNo -= 1
                        
                        project.replaceTask(taskNo, replacementTask)
        
                        projectList.replaceProject(projectNo, project)
        
                        arrayInLocal()
        
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
        
                        let taskNo = replacementTask.getTaskNo()
                        taskNo -= 1
                        
                        project.replaceTask(taskNo, replacementTask)
        
                        projectList.replaceProject(projectNo, project)
        
                        arrayInLocal()
        
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
        
                        let taskNo = replacementTask.getTaskNo()
                        taskNo -= 1
                        
                        project.replaceTask(taskNo, replacementTask)
        
                        projectList.replaceProject(projectNo, project)
        
                        arrayInLocal()
        
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
        
                        let taskNo = replacementTask.getTaskNo()
                        taskNo -= 1
                        
                        project.replaceTask(taskNo, replacementTask)
        
                        projectList.replaceProject(projectNo, project)
        
                        arrayInLocal()
        
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
        
                        let taskNo = replacementTask.getTaskNo()
                        taskNo -= 1
                        
                        project.replaceTask(taskNo, replacementTask)
        
                        projectList.replaceProject(projectNo, project)
        
                        arrayInLocal()
        
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
        
                        let taskNo = replacementTask.getTaskNo()
                        taskNo -= 1
                        
                        project.replaceTask(taskNo, replacementTask)
        
                        projectList.replaceProject(projectNo, project)
        
                        arrayInLocal()
        
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
        
                        let taskNo = replacementTask.getTaskNo()
                        taskNo -= 1
                        
                        project.replaceTask(taskNo, replacementTask)
        
                        projectList.replaceProject(projectNo, project)
        
                        arrayInLocal()
        
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
        
                        let taskNo = replacementTask.getTaskNo()
                        taskNo -= 1
                        
                        project.replaceTask(taskNo, replacementTask)
        
                        projectList.replaceProject(projectNo, project)
        
                        arrayInLocal()
        
                        return 
                    });   
                }
            }

            //left to do:
            //add OBJ delete listeners
            //add OBJ edit listeners
        }
    }

    makeInitialProjects()

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

        arrayInLocal()
    });

    //add task to project

    const taskSubmitButton = document.getElementById("taskSubmitButton")

    function addDeleteTaskListeners() {

        //id being set when making the box is now correct
        //now doesn't work when an item is deleted from array -- makes set no not match

        let countAll = getLastBox()
        
        if ((countAll) == 1) {
            const trash0 = document.getElementById("0Trash");
    
            trash0.addEventListener('click', () => {
                //get which project this box is using
                const assignedProject = getProjectNoFromDOM(0)
                const projectNo = getProjectNoFromInput(assignedProject)
    
                const project = projectList.getProject(projectNo)

                function findRelevantTaskNo() {
                    const project = projectList.getProject(projectNo)
                    let taskNoFromDOM = document.getElementById(`0taskNo`).innerText

                    for (var i = 0; i < project.tasks.length; i++) {
                        let taskFromList = project.tasks[i].taskNo
                        let relevantTask = project.tasks[i]

                        if (taskNoFromDOM == taskFromList) {
                            console.log(taskFromList + "is relevant taskNo")
                            return relevantTask
                        }      
                    }
                }
                
                let taskNo = document.getElementById(`0taskNo`).innerText
                relevantTask = findRelevantTaskNo()
                console.log(taskNo + " is taskNo")
                  
                project.deleteTask(taskNo)

                projectList.replaceProject(projectNo, project)
                arrayInLocal()

            });
        } else if (countAll == 2) {
            const trash1 = document.getElementById("1Trash");
    
            trash1.addEventListener('click', () => {
                const assignedProject = getProjectNoFromDOM(1)
                const projectNo = getProjectNoFromInput(assignedProject)
    
                const project = projectList.getProject(projectNo)

                function findRelevantTaskNo() {
                    const project = projectList.getProject(projectNo)
                    let taskNoFromDOM = document.getElementById(`1taskNo`).innerText

                    for (var i = 0; i < project.tasks.length; i++) {
                        let taskFromList = project.tasks[i].taskNo
                        let relevantTask = project.tasks[i]

                        if (taskNoFromDOM == taskFromList) {
                            console.log(taskFromList + "is relevant taskNo")
                            return relevantTask
                        }      
                    }
                }
                
                let taskNo = document.getElementById(`0taskNo`).innerText
                relevantTask = findRelevantTaskNo()
                console.log(taskNo + " is taskNo")
                  
                project.deleteTask(taskNo)

                projectList.replaceProject(projectNo, project)
                arrayInLocal()

            });
        } else if (countAll == 3) {
            const trash2 = document.getElementById("2Trash");
    
            trash2.addEventListener('click', () => {
                const assignedProject = getProjectNoFromDOM(2)
                const projectNo = getProjectNoFromInput(assignedProject)
    
                const project = projectList.getProject(projectNo)

                function findRelevantTaskNo() {
                    const project = projectList.getProject(projectNo)
                    let taskNoFromDOM = document.getElementById(`2taskNo`).innerText
                    console.log(taskNoFromDOM + " is taskNoFromDOM")

                    for (var i = 0; i < project.tasks.length; i++) {
                        let taskFromList = project.tasks[i].taskNo
                        let relevantTask = project.tasks[i]

                        if (taskNoFromDOM == taskFromList) {
                            console.log(taskFromList + "is relevant taskNo")
                            return relevantTask
                        }      
                    }
                }
                
                let taskNo = document.getElementById(`0taskNo`).innerText
                relevantTask = findRelevantTaskNo()
                console.log(taskNo + " is taskNo")
                  
                project.deleteTask(taskNo)

                projectList.replaceProject(projectNo, project)
                arrayInLocal()

            });
        } else if (countAll == 4) {
            const trash3 = document.getElementById("3Trash");
    
            trash3.addEventListener('click', () => {
                const assignedProject = getProjectNoFromDOM(3)
                const projectNo = getProjectNoFromInput(assignedProject)
    
                const project = projectList.getProject(projectNo)

                function findRelevantTaskNo() {
                    const project = projectList.getProject(projectNo)
                    let taskNoFromDOM = document.getElementById(`3taskNo`).innerText

                    for (var i = 0; i < project.tasks.length; i++) {
                        let taskFromList = project.tasks[i].taskNo
                        let relevantTask = project.tasks[i]

                        if (taskNoFromDOM == taskFromList) {
                            console.log(taskFromList + "is relevant taskNo")
                            return relevantTask
                        }      
                    }
                }
                
                let taskNo = document.getElementById(`0taskNo`).innerText
                relevantTask = findRelevantTaskNo()
                console.log(taskNo + " is taskNo")
                  
                project.deleteTask(taskNo)

                projectList.replaceProject(projectNo, project)
                arrayInLocal()

            });
        } else if (countAll == 5) {
            const trash4 = document.getElementById("4Trash");
    
            trash4.addEventListener('click', () => {
                const assignedProject = getProjectNoFromDOM(4)
                const projectNo = getProjectNoFromInput(assignedProject)
    
                const project = projectList.getProject(projectNo)

                function findRelevantTaskNo() {
                    const project = projectList.getProject(projectNo)
                    let taskNoFromDOM = document.getElementById(`4taskNo`).innerText

                    for (var i = 0; i < project.tasks.length; i++) {
                        let taskFromList = project.tasks[i].taskNo
                        let relevantTask = project.tasks[i]

                        if (taskNoFromDOM == taskFromList) {
                            console.log(taskFromList + "is relevant taskNo")
                            return relevantTask
                        }      
                    }
                }
                
                let taskNo = document.getElementById(`0taskNo`).innerText
                relevantTask = findRelevantTaskNo()
                console.log(taskNo + " is taskNo")
                  
                project.deleteTask(taskNo)

                projectList.replaceProject(projectNo, project)
                arrayInLocal()

            });
        } else if (countAll == 6) {
            const trash5 = document.getElementById("5Trash");
    
            trash5.addEventListener('click', () => {
                const assignedProject = getProjectNoFromDOM(5)
                const projectNo = getProjectNoFromInput(assignedProject)
    
                const project = projectList.getProject(projectNo)

                function findRelevantTaskNo() {
                    const project = projectList.getProject(projectNo)
                    let taskNoFromDOM = document.getElementById(`5taskNo`).innerText

                    for (var i = 0; i < project.tasks.length; i++) {
                        let taskFromList = project.tasks[i].taskNo
                        let relevantTask = project.tasks[i]

                        if (taskNoFromDOM == taskFromList) {
                            console.log(taskFromList + "is relevant taskNo")
                            return relevantTask
                        }      
                    }
                }
                
                let taskNo = document.getElementById(`0taskNo`).innerText
                relevantTask = findRelevantTaskNo()
                console.log(taskNo + " is taskNo")
                  
                project.deleteTask(taskNo)

                projectList.replaceProject(projectNo, project)
                arrayInLocal()

            });
        } else if (countAll == 7) {
            const trash6 = document.getElementById("6Trash");
    
            trash6.addEventListener('click', () => {
                const assignedProject = getProjectNoFromDOM(6)
                const projectNo = getProjectNoFromInput(assignedProject)
    
                const project = projectList.getProject(projectNo)

                function findRelevantTaskNo() {
                    const project = projectList.getProject(projectNo)
                    let taskNoFromDOM = document.getElementById(`6taskNo`).innerText

                    for (var i = 0; i < project.tasks.length; i++) {
                        let taskFromList = project.tasks[i].taskNo
                        let relevantTask = project.tasks[i]

                        if (taskNoFromDOM == taskFromList) {
                            console.log(taskFromList + "is relevant taskNo")
                            return relevantTask
                        }      
                    }
                }
                
                let taskNo = document.getElementById(`0taskNo`).innerText
                relevantTask = findRelevantTaskNo()
                console.log(taskNo + " is taskNo")
                  
                project.deleteTask(taskNo)

                projectList.replaceProject(projectNo, project)
                arrayInLocal()

            });
        } else if (countAll == 8) {
            const trash7 = document.getElementById("7Trash");
    
            trash7.addEventListener('click', () => {
                const assignedProject = getProjectNoFromDOM(7)
                const projectNo = getProjectNoFromInput(assignedProject)
    
                const project = projectList.getProject(projectNo)

                function findRelevantTaskNo() {
                    const project = projectList.getProject(projectNo)
                    let taskNoFromDOM = document.getElementById(`7taskNo`).innerText

                    for (var i = 0; i < project.tasks.length; i++) {
                        let taskFromList = project.tasks[i].taskNo
                        let relevantTask = project.tasks[i]

                        if (taskNoFromDOM == taskFromList) {
                            console.log(taskFromList + "is relevant taskNo")
                            return relevantTask
                        }      
                    }
                }
                
                let taskNo = document.getElementById(`0taskNo`).innerText
                relevantTask = findRelevantTaskNo()
                console.log(taskNo + " is taskNo")
                  
                project.deleteTask(taskNo)

                projectList.replaceProject(projectNo, project)
                arrayInLocal()

            });
        } else if (countAll == 9) {
            const trash8 = document.getElementById("8Trash");
    
            trash8.addEventListener('click', () => {
                const assignedProject = getProjectNoFromDOM(8)
                const projectNo = getProjectNoFromInput(assignedProject)
    
                const project = projectList.getProject(projectNo)

                function findRelevantTaskNo() {
                    const project = projectList.getProject(projectNo)
                    let taskNoFromDOM = document.getElementById(`8taskNo`).innerText

                    for (var i = 0; i < project.tasks.length; i++) {
                        let taskFromList = project.tasks[i].taskNo
                        let relevantTask = project.tasks[i]

                        if (taskNoFromDOM == taskFromList) {
                            console.log(taskFromList + "is relevant taskNo")
                            return relevantTask
                        }      
                    }
                }
                
                let taskNo = document.getElementById(`0taskNo`).innerText
                relevantTask = findRelevantTaskNo()
                console.log(taskNo + " is taskNo")
                  
                project.deleteTask(taskNo)

                projectList.replaceProject(projectNo, project)
                arrayInLocal()

            });
        } else if (countAll == 10) {
            const trash9 = document.getElementById("9Trash");
    
            trash9.addEventListener('click', () => {
                const assignedProject = getProjectNoFromDOM(9)
                const projectNo = getProjectNoFromInput(assignedProject)
    
                const project = projectList.getProject(projectNo)

                function findRelevantTaskNo() {
                    const project = projectList.getProject(projectNo)
                    let taskNoFromDOM = document.getElementById(`9taskNo`).innerText

                    for (var i = 0; i < project.tasks.length; i++) {
                        let taskFromList = project.tasks[i].taskNo
                        let relevantTask = project.tasks[i]

                        if (taskNoFromDOM == taskFromList) {
                            console.log(taskFromList + "is relevant taskNo")
                            return relevantTask
                        }      
                    }
                }
                
                let taskNo = document.getElementById(`0taskNo`).innerText
                relevantTask = findRelevantTaskNo()
                console.log(taskNo + " is taskNo")
                  
                project.deleteTask(taskNo)

                projectList.replaceProject(projectNo, project)
                arrayInLocal()

            });
        } else if (countAll == 11) {
            const trash10 = document.getElementById("10Trash");
    
            trash10.addEventListener('click', () => {
                const assignedProject = getProjectNoFromDOM(10)
                const projectNo = getProjectNoFromInput(assignedProject)
    
                const project = projectList.getProject(projectNo)

                function findRelevantTaskNo() {
                    const project = projectList.getProject(projectNo)
                    let taskNoFromDOM = document.getElementById(`10taskNo`).innerText

                    for (var i = 0; i < project.tasks.length; i++) {
                        let taskFromList = project.tasks[i].taskNo
                        let relevantTask = project.tasks[i]

                        if (taskNoFromDOM == taskFromList) {
                            console.log(taskFromList + "is relevant taskNo")
                            return relevantTask
                        }      
                    }
                }
                
                let taskNo = document.getElementById(`0taskNo`).innerText
                relevantTask = findRelevantTaskNo()
                console.log(taskNo + " is taskNo")
                  
                project.deleteTask(taskNo)

                projectList.replaceProject(projectNo, project)
                arrayInLocal()

            });
        } else if (countAll == 12) {
            const trash11 = document.getElementById("11Trash");
    
            trash11.addEventListener('click', () => {
                const assignedProject = getProjectNoFromDOM(11)
                const projectNo = getProjectNoFromInput(assignedProject)
    
                const project = projectList.getProject(projectNo)

                function findRelevantTaskNo() {
                    const project = projectList.getProject(projectNo)
                    let taskNoFromDOM = document.getElementById(`11taskNo`).innerText

                    for (var i = 0; i < project.tasks.length; i++) {
                        let taskFromList = project.tasks[i].taskNo
                        let relevantTask = project.tasks[i]

                        if (taskNoFromDOM == taskFromList) {
                            console.log(taskFromList + "is relevant taskNo")
                            return relevantTask
                        }      
                    }
                }
                
                let taskNo = document.getElementById(`0taskNo`).innerText
                relevantTask = findRelevantTaskNo()
                console.log(taskNo + " is taskNo")
                  
                project.deleteTask(taskNo)

                projectList.replaceProject(projectNo, project)
                arrayInLocal()

            });
        } else if (countAll == 13) {
            const trash12 = document.getElementById("12Trash");
    
            trash12.addEventListener('click', () => {
                const assignedProject = getProjectNoFromDOM(12)
                const projectNo = getProjectNoFromInput(assignedProject)
    
                const project = projectList.getProject(projectNo)

                function findRelevantTaskNo() {
                    const project = projectList.getProject(projectNo)
                    let taskNoFromDOM = document.getElementById(`12taskNo`).innerText

                    for (var i = 0; i < project.tasks.length; i++) {
                        let taskFromList = project.tasks[i].taskNo
                        let relevantTask = project.tasks[i]

                        if (taskNoFromDOM == taskFromList) {
                            console.log(taskFromList + "is relevant taskNo")
                            return relevantTask
                        }      
                    
                    }
                }
                
                let taskNo = document.getElementById(`0taskNo`).innerText
                relevantTask = findRelevantTaskNo()
                console.log(taskNo + " is taskNo")
                  
                project.deleteTask(taskNo)

                projectList.replaceProject(projectNo, project)
                arrayInLocal()


            });
        } else if (countAll == 14) {
            const trash13 = document.getElementById("13Trash");
    
            trash13.addEventListener('click', () => {
                const assignedProject = getProjectNoFromDOM(13)
                const projectNo = getProjectNoFromInput(assignedProject)
    
                const project = projectList.getProject(projectNo)

                function findRelevantTaskNo() {
                    const project = projectList.getProject(projectNo)
                    let taskNoFromDOM = document.getElementById(`13taskNo`).innerText

                    for (var i = 0; i < project.tasks.length; i++) {
                        let taskFromList = project.tasks[i].taskNo
                        let relevantTask = project.tasks[i]

                        if (taskNoFromDOM == taskFromList) {
                            console.log(taskFromList + "is relevant taskNo")
                            return relevantTask
                        }                    
                    }
                }
                
                let taskNo = document.getElementById(`0taskNo`).innerText
                relevantTask = findRelevantTaskNo()
                console.log(taskNo + " is taskNo")
                  
                project.deleteTask(taskNo)

                projectList.replaceProject(projectNo, project)
                arrayInLocal()

            });
        } else if (countAll == 15) {
            const trash14 = document.getElementById("14Trash");
    
            trash14.addEventListener('click', () => {
                const assignedProject = getProjectNoFromDOM(14)
                const projectNo = getProjectNoFromInput(assignedProject)
    
                const project = projectList.getProject(projectNo)

                function findRelevantTaskNo() {
                    const project = projectList.getProject(projectNo)
                    let taskNoFromDOM = document.getElementById(`14taskNo`).innerText

                    for (var i = 0; i < project.tasks.length; i++) {
                        let taskFromList = project.tasks[i].taskNo
                        let relevantTask = project.tasks[i]

                        if (taskNoFromDOM == taskFromList) {
                            console.log(taskFromList + "is relevant taskNo")
                            return relevantTask
                        } 
                    
                    }
                }
                
                let taskNo = document.getElementById(`0taskNo`).innerText
                relevantTask = findRelevantTaskNo()
                console.log(taskNo + " is taskNo")
                  
                project.deleteTask(taskNo)

                projectList.replaceProject(projectNo, project)
                arrayInLocal()

            });
        }
    }

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
                let taskNo = replacementTask.getTaskNo()
                taskNo -= 1

                //replace the task within the project using getTaskNo
                project.replaceTask(taskNo, replacementTask)

                //replace the project in projectList
                projectList.replaceProject(projectNo, project)

                arrayInLocal()

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

                let taskNo = replacementTask.getTaskNo()
                taskNo -= 1

                project.replaceTask(taskNo, replacementTask)

                projectList.replaceProject(projectNo, project)

                arrayInLocal()

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

                let taskNo = replacementTask.getTaskNo()
                taskNo -= 1

                project.replaceTask(taskNo, replacementTask)

                projectList.replaceProject(projectNo, project)

                arrayInLocal()

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

                let taskNo = replacementTask.getTaskNo()
                taskNo -= 1
                
                project.replaceTask(taskNo, replacementTask)

                projectList.replaceProject(projectNo, project)

                arrayInLocal()

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

                let taskNo = replacementTask.getTaskNo()
                taskNo -= 1
                
                project.replaceTask(taskNo, replacementTask)

                projectList.replaceProject(projectNo, project)

                arrayInLocal()

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

                let taskNo = replacementTask.getTaskNo()
                taskNo -= 1
                
                project.replaceTask(taskNo, replacementTask)

                projectList.replaceProject(projectNo, project)

                arrayInLocal()

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

                let taskNo = replacementTask.getTaskNo()
                taskNo -= 1
                
                project.replaceTask(taskNo, replacementTask)

                projectList.replaceProject(projectNo, project)

                arrayInLocal()

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

                let taskNo = replacementTask.getTaskNo()
                taskNo -= 1
                
                project.replaceTask(taskNo, replacementTask)

                projectList.replaceProject(projectNo, project)

                arrayInLocal()

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

                let taskNo = replacementTask.getTaskNo()
                taskNo -= 1
                
                project.replaceTask(taskNo, replacementTask)

                projectList.replaceProject(projectNo, project)

                arrayInLocal()

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

                let taskNo = replacementTask.getTaskNo()
                taskNo -= 1
                
                project.replaceTask(taskNo, replacementTask)

                projectList.replaceProject(projectNo, project)

                arrayInLocal()

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

                let taskNo = replacementTask.getTaskNo()
                taskNo -= 1
                
                project.replaceTask(taskNo, replacementTask)

                projectList.replaceProject(projectNo, project)

                arrayInLocal()

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

                let taskNo = replacementTask.getTaskNo()
                taskNo -= 1
                
                project.replaceTask(taskNo, replacementTask)

                projectList.replaceProject(projectNo, project)

                arrayInLocal()

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

                let taskNo = replacementTask.getTaskNo()
                taskNo -= 1
                
                project.replaceTask(taskNo, replacementTask)

                projectList.replaceProject(projectNo, project)

                arrayInLocal()

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

                let taskNo = replacementTask.getTaskNo()
                taskNo -= 1
                
                project.replaceTask(taskNo, replacementTask)

                projectList.replaceProject(projectNo, project)

                arrayInLocal()

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

                let taskNo = replacementTask.getTaskNo()
                taskNo -= 1
                
                project.replaceTask(taskNo, replacementTask)

                projectList.replaceProject(projectNo, project)

                arrayInLocal()

                return 
            });   
        }
    }


    
    taskSubmitButton.addEventListener("click", function (){
        //make the task from inputs
        // makeTaskFromInputs()
        let array = createInputTaskArray()
        const input = createTaskArray(array);
        const arrayObj = new Task(input);
        let taskNo = arrayObj.taskNo

        //stop if due date not working
        if (document.getElementById('dueDate').value == '') {
            return
        }      

        //append the task in the relevant project
        // appendRelevantTask()
        const whichProject = getAssignedProjectAsNo();

        let project = projectList.getProject(whichProject);
        project.appendTask(arrayObj);

        projectList.replaceProject(whichProject, project);

        addDeleteTaskListeners(taskNo)
        addEditProjectManipListeners()
        arrayInLocal()
    });

    //add listeners for clicking and selecting which projects display
    let myLocalData = JSON.parse(window.localStorage.getItem("myLocalStore"))

    if (myLocalData == null) {
        addDeleteTaskListeners(0)
        addEditProjectManipListeners()
    } 

    //finds the relevant project when editing a task box
    function getProject(valueHere) {
        hideAllTaskBox()
        let projectArray = projectList.getArray();
        let relevantProject = projectArray[valueHere]
        let tasksHere = relevantProject.getTasks()

        tasksHere.forEach(function (tasksHere) {
            let x = tasksHere.taskNo;
            document.getElementById(`${x}Cont`).style.display = "grid";
        });
    }

    //filter by project
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

    //create projectListeners if no local data
    if (myLocalData == null) {
        addProjectListeners()
    }

    const headerText = document.getElementById("headerText")
    headerText.addEventListener("click", function () {
        console.log(projectList.getArray())
    })
}
