import createProjectObject from './createProjectObject';

export default function objManip() {
    const testProject = new createProjectObject("newProject", "IDhere")
    console.log(testProject)

    testProject.appendTask("newTask")
    testProject.appendTask("burbank")

    console.log(testProject.name)
    console.log(testProject.tasks)
}