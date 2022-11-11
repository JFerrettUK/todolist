//Create an object with a set of task details

export default function createTaskObject(titleHere, projectHere, priorityHere, 
    descriptionHere, dueDateHere) {
    return {
        taskName: titleHere,
        project: projectHere,
        priority: priorityHere,
        description: descriptionHere,
        dueDate: dueDateHere,

        talk: function () {
            console.log('The project title is ' 
            + titleHere + '. ' + descriptionHere + 
            ' It is due ' + dueDateHere + ' and is ' 
            + priorityHere + ' priority.');
        }
    };    
};