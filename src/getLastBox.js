import getBoxNo from './getBoxNo';

//Get last of the boxes
export default function getLastBox() {
    //only run below if getZero doesn't equal zero

    const last = Array.from(
        document.querySelectorAll('.taskBox')
        ).pop();
    
    function getID(last){
        var id = last.id;
        return id
    }

    const lastID = getID(last)
    const getZero = getBoxNo()
    console.log(lastID)

    if (getZero == 0) {
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
    } 
}