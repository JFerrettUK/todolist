//test relevant classes for functionality
import createProjectObject from './createProjectObject';
import createTaskObject from './createTaskObject';
import createInputTaskArray from './createInputTaskArray';

export default function testObjectMakers(input) {
    const testProject = new createProjectObject("newProject", "IDhere")
    console.log(testProject)

    testProject.appendTask("newTask")
    testProject.appendTask("burbank")

    console.log(testProject.name)
    console.log(testProject.tasks)
}