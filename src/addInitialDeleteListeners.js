//Count number of boxes
import deleteTaskBox from './deleteTaskBox';
import getLastBox from './getLastBox';

export default function addDeleteListeners(taskNo) {

let countAll = taskNo++

    if ((countAll) == 1) {
        const trash0 = document.getElementById("0Trash");

        trash0.addEventListener('click', () => {deleteTaskBox(0)});
    } else if (countAll == 2) {
        const trash1 = document.getElementById("1Trash");

        trash1.addEventListener('click', () => {deleteTaskBox(1)});
    } else if (countAll == 3) {
        const trash2 = document.getElementById("2Trash");

        trash2.addEventListener('click', () => {deleteTaskBox(2)});
    } else if (countAll == 4) {
        const trash3 = document.getElementById("3Trash");

        trash3.addEventListener('click', () => {deleteTaskBox(3)});
    } else if (countAll == 5) {
        const trash4 = document.getElementById("4Trash");

        trash4.addEventListener('click', () => {deleteTaskBox(4)});
    } else if (countAll == 6) {
        const trash5 = document.getElementById("5Trash");

        trash5.addEventListener('click', () => {deleteTaskBox(5)});
    } else if (countAll == 7) {
        const trash6 = document.getElementById("6Trash");

        trash6.addEventListener('click', () => {deleteTaskBox(6)});
    } else if (countAll == 8) {
        const trash7 = document.getElementById("7Trash");

        trash7.addEventListener('click', () => {deleteTaskBox(7)});
    } else if (countAll == 9) {
        const trash8 = document.getElementById("8Trash");

        trash8.addEventListener('click', () => {deleteTaskBox(8)});
    } else if (countAll == 10) {
        const trash9 = document.getElementById("9Trash");

        trash9.addEventListener('click', () => {deleteTaskBox(9)});
    } else if (countAll == 11) {
        const trash10 = document.getElementById("10Trash");

        trash10.addEventListener('click', () => {deleteTaskBox(10)});
    } else if (countAll == 12) {
        const trash11 = document.getElementById("11Trash");

        trash11.addEventListener('click', () => {deleteTaskBox(11)});
    } else if (countAll == 13) {
        const trash12 = document.getElementById("12Trash");

        trash12.addEventListener('click', () => {deleteTaskBox(12)});
    } else if (countAll == 14) {
        const trash13 = document.getElementById("13Trash");

        trash12.addEventListener('click', () => {deleteTaskBox(13)});
    } else if (countAll == 15) {
        const trash14 = document.getElementById("14Trash");

        trash14.addEventListener('click', () => {deleteTaskBox(14)});
    }
}