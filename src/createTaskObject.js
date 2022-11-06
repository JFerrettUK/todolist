export default function createTaskObject(titleHere, descriptionHere, 
    dueDateHere, priorityHere, notesHere, projectHere) {
    return {
        title: titleHere,
        description: descriptionHere,
        dueDate: dueDateHere,
        priority: priorityHere,
        notes: notesHere,
        project: projectHere,

        talk: function () {
            console.log('The project title is ' 
            + titleHere + '. ' + descriptionHere + 
            ' It is due ' + dueDateHere + ' and is ' 
            + priorityHere + ' priority.');
        }
    };    
};