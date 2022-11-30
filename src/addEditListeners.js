//Count number of boxes
import getLastBox from './getLastBox';
import editTaskBox from './editTaskBox';

export default function addEditListeners() {

let countAll = getLastBox()

    if ((countAll) == 1) {
        const edit0 = document.getElementById("0Edit");

        edit0.addEventListener('click', () => {editTaskBox(0)});
    } else if (countAll == 2) {
        const edit1 = document.getElementById("1Edit");

        edit1.addEventListener('click', () => {editTaskBox(1)});
    } else if (countAll == 3) {
        const edit2 = document.getElementById("2Edit");

        edit2.addEventListener('click', () => {editTaskBox(2)});
    } else if (countAll == 4) {
        const edit3 = document.getElementById("3Edit");

        edit3.addEventListener('click', () => {editTaskBox(3)});
    } else if (countAll == 5) {
        const edit4 = document.getElementById("4Edit");

        edit4.addEventListener('click', () => {editTaskBox(4)});
    } else if (countAll == 6) {
        const edit5 = document.getElementById("5Edit");

        edit5.addEventListener('click', () => {editTaskBox(5)});
    } else if (countAll == 7) {
        const edit6 = document.getElementById("6Edit");

        edit6.addEventListener('click', () => {editTaskBox(6)});
    } else if (countAll == 8) {
        const edit7 = document.getElementById("7Edit");

        edit7.addEventListener('click', () => {editTaskBox(7)});
    } else if (countAll == 9) {
        const edit8 = document.getElementById("8Edit");

        edit8.addEventListener('click', () => {editTaskBox(8)});
    } else if (countAll == 10) {
        const edit9 = document.getElementById("9Edit");

        edit9.addEventListener('click', () => {editTaskBox(9)});
    } else if (countAll == 11) {
        const edit10 = document.getElementById("10Edit");

        edit10.addEventListener('click', () => {editTaskBox(10)});
    } else if (countAll == 12) {
        const edit11 = document.getElementById("11Edit");

        edit11.addEventListener('click', () => {editTaskBox(11)});
    } else if (countAll == 13) {
        const edit12 = document.getElementById("12Edit");

        edit12.addEventListener('click', () => {editTaskBox(12)});
    } else if (countAll == 14) {
        const edit13 = document.getElementById("13Edit");

        edit12.addEventListener('click', () => {editTaskBox(13)});
    } else if (countAll == 15) {
        const edit14 = document.getElementById("14Edit");

        edit14.addEventListener('click', () => {editTaskBox(14)});
    }
}