import getBoxNo from './getBoxNo';

//Get last of the boxes
export default function getLastBox() {

    function findNumberTask() {
        const last = Array.from(
            document.querySelectorAll('.taskBox')
            ).pop();
        
        function getID(last){
            const id = last.id;
            return id
        }

        const checkBox = getBoxNo() 

        if (checkBox == 0) {
            const getZero = getBoxNo()
            return getZero
        } else {
            const lastID = getID(last)
            return lastID
        }
    }

    const lastID = findNumberTask() 

    if (lastID == 0) {
        const output = 0
        return output
    } else if (lastID == "0Box") {
        const output = 1
        return output
    } else if (lastID == "1Box") {
        const output = 2
        return output
    } else if (lastID == "2Box") {
        const output = 3
        return output
    } else if (lastID == "3Box") {
        const output = 4
        return output
    } else if (lastID == "4Box") {
        const output = 5
        return output
    } else if (lastID == "5Box") {
        const output = 6
        return output
    } else if (lastID == "6Box") {
        const output = 7
        return output
    } else if (lastID == "7Box") {
        const output = 8
        return output
    } else if (lastID == "8Box") {
        const output = 9
        return output
    } else if (lastID == "9Box") {
        const output = 10
        return output
    } else if (lastID == "10Box") {
        const output = 11
        return output
    } else if (lastID == "11Box") {
        const output = 12
        return output
    } else if (lastID == "12Box") {
        const output = 13
        return output
    } else if (lastID == "13Box") {
        const output = 14
        return output
    } else if (lastID == "14Box") {
        const output = 15
        return output
    } else if (lastID == "15Box") {
        const output = 16
        return output
    } else if (lastID == "16Box") {
        const output = 17
        return output
    } else if (lastID == "17Box") {
        const output = 18
        return output
    } 
}