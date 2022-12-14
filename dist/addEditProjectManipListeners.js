//Count number of boxes
import getLastBox from './getLastBox';
import createInputEditTaskArray from './createInputEditTaskArray';

//Create event listeners  on each Save Project button

export default function addEditProjectManipListeners() {

let boxNo = getLastBox()

    if (boxNo == 0) {
    } else if (boxNo == 1) {
        const saveEdit0 = document.getElementById("0editTaskSubmitButton");
        saveEdit0.addEventListener('click', () => {
            let array = createInputEditTaskArray(0);
            return array
        });   
    } else if (boxNo == 2) {
        const saveEdit1 = document.getElementById("1editTaskSubmitButton");
        saveEdit1.addEventListener('click', () => {
            let array = createInputEditTaskArray(1);
            return array
        });   
    } else if (boxNo == 3) {
        const saveEdit2 = document.getElementById("2editTaskSubmitButton");
        saveEdit2.addEventListener('click', () => {
            let array = createInputEditTaskArray(2);
            return array
        });   
    } else if (boxNo == 4) {
        const saveEdit3 = document.getElementById("3editTaskSubmitButton");
        saveEdit3.addEventListener('click', () => {
            let array = createInputEditTaskArray(3);
            return array
        });   
    } else if (boxNo == 5) {
        const saveEdit4 = document.getElementById("4editTaskSubmitButton");
        saveEdit4.addEventListener('click', () => {
            let array = createInputEditTaskArray(4);
            return array
        });   
    } else if (boxNo == 6) {
        const saveEdit5 = document.getElementById("5editTaskSubmitButton");
        saveEdit5.addEventListener('click', () => {
            let array = createInputEditTaskArray(5);
            return array
        });   
        const saveEdit6 = document.getElementById("6editTaskSubmitButton");
        saveEdit6.addEventListener('click', () => {
            let array = createInputEditTaskArray(6);
            return array
        });   
    } else if (boxNo == 8) {
        const saveEdit7 = document.getElementById("7editTaskSubmitButton");
        saveEdit7.addEventListener('click', () => {
            let array = createInputEditTaskArray(7);
            return array
        });   
    } else if (boxNo == 9) {
        const saveEdit8 = document.getElementById("8editTaskSubmitButton");
        saveEdit8.addEventListener('click', () => {
            let array = createInputEditTaskArray(8);
            return array
        });   
    } else if (boxNo == 10) {
        const saveEdit9 = document.getElementById("9editTaskSubmitButton");
        saveEdit9.addEventListener('click', () => {
            let array = createInputEditTaskArray(9);
            return array
        });   
    } else if (boxNo == 11) {
        const saveEdit10 = document.getElementById("10editTaskSubmitButton");
        saveEdit10.addEventListener('click', () => {
            let array = createInputEditTaskArray(10);
            return array
        });   
    } else if (boxNo == 12) {
        const saveEdit11 = document.getElementById("11editTaskSubmitButton");
        saveEdit11.addEventListener('click', () => {
            let array = createInputEditTaskArray(11);
            return array
        });   
    } else if (boxNo == 13) {
        const saveEdit12 = document.getElementById("12editTaskSubmitButton");
        saveEdit12.addEventListener('click', () => {
            let array = createInputEditTaskArray(12);
            return array
        });   
    } else if (boxNo == 14) {
        const saveEdit13 = document.getElementById("13editTaskSubmitButton");
        saveEdit13.addEventListener('click', () => {
            let array = createInputEditTaskArray(13);
            return array
        });   
    } else if (boxNo == 15) {
        const saveEdit14 = document.getElementById("14editTaskSubmitButton");
        saveEdit14.addEventListener('click', () => {
            let array = createInputEditTaskArray(14);
            return array
        });   
    }
}