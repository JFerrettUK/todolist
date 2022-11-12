//Count number of boxes
import getBoxNo from './getBoxNo';

export default function makeTrashEventListeners() {
    let boxNo = getBoxNo();
    console.log(boxNo);
    let boxArray = [];

    //deleteButtons
    for (let i = 0; i < boxNo; i++) {
        boxArray[i] = document.getElementById(`${i}Trash`);
        console.log(boxArray);
    }    

    return boxArray
}