import getProjectNo from './getProjectNo';

//Get last of the boxes
export default function getLastProject() {

    function findNumberProj() {
        const last = Array.from(
            document.querySelectorAll('.newProjectTxt')
            ).pop();
        
        function getID(last){
            const id = last.id;
            return id
        }

        const checkBox = getProjectNo() 

        if (checkBox == 0) {
            const getZero = getProjectNo()
            return getZero
        } else {
            const lastID = getID(last)
            return lastID
        }
    }

    const lastID = findNumberProj() 

    if (lastID == 0) {
        const output = 0
        return output
    } else if (lastID == "0ProjectHead") {
        const output = 1
        return output
    } else if (lastID == "1ProjectHead") {
        const output = 2
        return output
    } else if (lastID == "3ProjectHead") {
        const output = 3
        return output
    } else if (lastID == "4ProjectHead") {
        const output = 4
        return output
    } else if (lastID == "5ProjectHead") {
        const output = 5
        return output
    } else if (lastID == "6ProjectHead") {
        const output = 6
        return output
    } else if (lastID == "7ProjectHead") {
        const output = 7
        return output
    } else if (lastID == "8ProjectHead") {
        const output = 8
        return output
    } else if (lastID == "9ProjectHead") {
        const output = 9
        return output
    } else if (lastID == "10ProjectHead") {
        const output = 10
        return output
    } else if (lastID == "11ProjectHead") {
        const output = 11
        return output
    } else if (lastID == "12ProjectHead") {
        const output = 12
        return output
    } else if (lastID == "13ProjectHead") {
        const output = 13
        return output
    } else if (lastID == "14ProjectHead") {
        const output = 14
        return output
    } else if (lastID == "15ProjectHead") {
        const output = 15
        return output
    } else if (lastID == "16ProjectHead") {
        const output = 16
        return output
    } else if (lastID == "17ProjectHead") {
        const output = 17
        return output
    } else if (lastID == "18ProjectHead") {
        const output = 18
        return output
    } 
}