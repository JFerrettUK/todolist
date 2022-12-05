//Count number of boxes
import getLastBox from './getLastBox';
import createInputEditTaskArray from './createInputEditTaskArray';


export default function addEditProjectManipListeners() {

let boxNo = getLastBox()

    if (boxNo == 0) {
        console.log("noBox in addEdit!")
    } else if (boxNo == 1) {
        console.log("1Box in addEdit!")
        const saveEdit0 = document.getElementById("0editTaskSubmitButton");
        saveEdit0.addEventListener('click', () => {console.log("test0")});       
        saveEdit0.addEventListener('click', () => {
            let test0 = createInputEditTaskArray(0);
            return test0
        });
    } else if (boxNo == 2) {
        console.log("2Box in addEdit!")
        const saveEdit1 = document.getElementById("1editTaskSubmitButton");
        saveEdit1.addEventListener('click', () => {console.log("test1")});       
        saveEdit1.addEventListener('click', () => {
            let test1 = createInputEditTaskArray(1);
            return test1
        });
    } else if (boxNo == 3) {
        const saveEdit2 = document.getElementById("2editTaskSubmitButton");
        saveEdit2.addEventListener('click', () => {console.log("test2")});       
        saveEdit2.addEventListener('click', () => {
            let test2 = createInputEditTaskArray(2);
            return test2
        });
    } else if (boxNo == 4) {
        const saveEdit3 = document.getElementById("3editTaskSubmitButton");
        saveEdit3.addEventListener('click', () => {createInputEditTaskArray(3)});
    } else if (boxNo == 5) {
        const saveEdit4 = document.getElementById("4editTaskSubmitButton");
        saveEdit4.addEventListener('click', () => {createInputEditTaskArray(4)});
    } else if (boxNo == 6) {
        const saveEdit5 = document.getElementById("5editTaskSubmitButton");
        saveEdit5.addEventListener('click', () => {createInputEditTaskArray(5)});
    } else if (boxNo == 7) {
        const saveEdit6 = document.getElementById("6editTaskSubmitButton");
        saveEdit6.addEventListener('click', () => {createInputEditTaskArray(6)});
    } else if (boxNo == 8) {
        const saveEdit7 = document.getElementById("7editTaskSubmitButton");
        saveEdit7.addEventListener('click', () => {createInputEditTaskArray(7)});
    } else if (boxNo == 9) {
        const saveEdit8 = document.getElementById("8editTaskSubmitButton");
        saveEdit8.addEventListener('click', () => {createInputEditTaskArray(8)});
    } else if (boxNo == 10) {
        const saveEdit9 = document.getElementById("9editTaskSubmitButton");
        saveEdit9.addEventListener('click', () => {createInputEditTaskArray(9)});
    } else if (boxNo == 11) {
        const saveEdit10 = document.getElementById("10editTaskSubmitButton");
        saveEdit10.addEventListener('click', () => {createInputEditTaskArray(10)});
    } else if (boxNo == 12) {
        const saveEdit11 = document.getElementById("11editTaskSubmitButton");
        saveEdit11.addEventListener('click', () => {createInputEditTaskArray(11)});
    } else if (boxNo == 13) {
        const saveEdit12 = document.getElementById("12editTaskSubmitButton");
        saveEdit12.addEventListener('click', () => {createInputEditTaskArray(12)});
    } else if (boxNo == 14) {
        const saveEdit13 = document.getElementById("13editTaskSubmitButton");
        saveEdit13.addEventListener('click', () => {createInputEditTaskArray(13)});
    } else if (boxNo == 15) {
        const saveEdit14 = document.getElementById("14editTaskSubmitButton");
        saveEdit14.addEventListener('click', () => {createInputEditTaskArray(14)});
    }
}