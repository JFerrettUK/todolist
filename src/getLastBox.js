import getBoxNo from './getBoxNo';

//Get last of the boxes
export default function getLastbox() {
    
    const currentBoxNo = getBoxNo()
    //use GetBoxNo to create an "if" for when there are no boxes, which currently crashes
    console.log(currentBoxNo)

    const last = Array.from(
        document.querySelectorAll('.trashIcon')
        ).pop();
    
    function getID(last){
        var id = last.id;
        return id
    }

    const lastID = getID(last)


    if (lastID == 0) {
        const output = 0
        return output
    } else if (lastID == "0Trash") {
        const output = 1
        return output
    } else if (lastID == "1Trash") {
        const output = 2
        return output
    } else if (lastID == "2Trash") {
        const output = 3
        return output
    } else if (lastID == "3Trash") {
        const output = 4
        return output
    } else if (lastID == "4Trash") {
        const output = 5
        return output
    } else if (lastID == "5Trash") {
        const output = 6
        return output
    } else if (lastID == "6Trash") {
        const output = 7
        return output
    } else if (lastID == "7Trash") {
        const output = 8
        return output
    } else if (lastID == "8Trash") {
        const output = 9
        return output
    } else if (lastID == "9Trash") {
        const output = 10
        return output
    } else if (lastID == "10Trash") {
        const output = 11
        return output
    } else if (lastID == "11Trash") {
        const output = 12
        return output
    } else if (lastID == "12Trash") {
        const output = 13
        return output
    } 
}