export default function createProject(titleHere, descriptionHere, 
    dueDateHere, priorityHere, notesHere, checklistHere) {
    return {
        title: titleHere,
        description: descriptionHere,
        dueDate: dueDateHere,
        priority: priorityHere,
        notes: notesHere,
        checklist: checklistHere,

        talk: function () {
            console.log('The project title is ' 
            + titleHere + '. ' + descriptionHere + 
            ' It is due ' + dueDateHere + ' and is ' 
            + priorityHere + ' priority.');
        }
    };
};