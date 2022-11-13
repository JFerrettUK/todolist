//Count number of boxes
import deleteTaskBox from './deleteTaskBox';
import getBoxNo from './getBoxNo';

export default function addDeleteListeners() {

let countAll = getBoxNo()

    if ((countAll) == 1) {
        const trash0 = document.getElementById("0Trash");

        trash0.addEventListener('click', () => {deleteTaskBox(0)});
    } else if (countAll == 2) {
        const trash0 = document.getElementById("0Trash");
        const trash1 = document.getElementById("1Trash");

        trash0.addEventListener('click', () => {deleteTaskBox(0)});
        trash1.addEventListener('click', () => {deleteTaskBox(1)});
    } else if (countAll == 3) {
        const trash0 = document.getElementById("0Trash");
        const trash1 = document.getElementById("1Trash");
        const trash2 = document.getElementById("2Trash");

        trash0.addEventListener('click', () => {deleteTaskBox(0)});
        trash1.addEventListener('click', () => {deleteTaskBox(1)});
        trash2.addEventListener('click', () => {deleteTaskBox(2)});
    } else if (countAll == 4) {
        const trash0 = document.getElementById("0Trash");
        const trash1 = document.getElementById("1Trash");
        const trash2 = document.getElementById("2Trash");
        const trash3 = document.getElementById("3Trash");

        trash0.addEventListener('click', () => {deleteTaskBox(0)});
        trash1.addEventListener('click', () => {deleteTaskBox(1)});
        trash2.addEventListener('click', () => {deleteTaskBox(2)});
        trash3.addEventListener('click', () => {deleteTaskBox(3)});
    } else if (countAll == 5) {
        const trash0 = document.getElementById("0Trash");
        const trash1 = document.getElementById("1Trash");
        const trash2 = document.getElementById("2Trash");
        const trash3 = document.getElementById("3Trash");
        const trash4 = document.getElementById("4Trash");

        trash0.addEventListener('click', () => {deleteTaskBox(0)});
        trash1.addEventListener('click', () => {deleteTaskBox(1)});
        trash2.addEventListener('click', () => {deleteTaskBox(2)});
        trash3.addEventListener('click', () => {deleteTaskBox(3)});
        trash4.addEventListener('click', () => {deleteTaskBox(4)});
    } else if (countAll == 6) {
        const trash0 = document.getElementById("0Trash");
        const trash1 = document.getElementById("1Trash");
        const trash2 = document.getElementById("2Trash");
        const trash3 = document.getElementById("3Trash");
        const trash4 = document.getElementById("4Trash");
        const trash5 = document.getElementById("5Trash");

        trash0.addEventListener('click', () => {deleteTaskBox(0)});
        trash1.addEventListener('click', () => {deleteTaskBox(1)});
        trash2.addEventListener('click', () => {deleteTaskBox(2)});
        trash3.addEventListener('click', () => {deleteTaskBox(3)});
        trash4.addEventListener('click', () => {deleteTaskBox(4)});
        trash5.addEventListener('click', () => {deleteTaskBox(5)});
    } else if (countAll == 7) {
        const trash0 = document.getElementById("0Trash");
        const trash1 = document.getElementById("1Trash");
        const trash2 = document.getElementById("2Trash");
        const trash3 = document.getElementById("3Trash");
        const trash4 = document.getElementById("4Trash");
        const trash5 = document.getElementById("5Trash");
        const trash6 = document.getElementById("6Trash");

        trash0.addEventListener('click', () => {deleteTaskBox(0)});
        trash1.addEventListener('click', () => {deleteTaskBox(1)});
        trash2.addEventListener('click', () => {deleteTaskBox(2)});
        trash3.addEventListener('click', () => {deleteTaskBox(3)});
        trash4.addEventListener('click', () => {deleteTaskBox(4)});
        trash5.addEventListener('click', () => {deleteTaskBox(5)});
        trash6.addEventListener('click', () => {deleteTaskBox(6)});
    } else if (countAll == 8) {
        const trash0 = document.getElementById("0Trash");
        const trash1 = document.getElementById("1Trash");
        const trash2 = document.getElementById("2Trash");
        const trash3 = document.getElementById("3Trash");
        const trash4 = document.getElementById("4Trash");
        const trash5 = document.getElementById("5Trash");
        const trash6 = document.getElementById("6Trash");
        const trash7 = document.getElementById("7Trash");

        trash0.addEventListener('click', () => {deleteTaskBox(0)});
        trash1.addEventListener('click', () => {deleteTaskBox(1)});
        trash2.addEventListener('click', () => {deleteTaskBox(2)});
        trash3.addEventListener('click', () => {deleteTaskBox(3)});
        trash4.addEventListener('click', () => {deleteTaskBox(4)});
        trash5.addEventListener('click', () => {deleteTaskBox(5)});
        trash6.addEventListener('click', () => {deleteTaskBox(6)});
        trash7.addEventListener('click', () => {deleteTaskBox(7)});
    } else if (countAll == 9) {
        const trash0 = document.getElementById("0Trash");
        const trash1 = document.getElementById("1Trash");
        const trash2 = document.getElementById("2Trash");
        const trash3 = document.getElementById("3Trash");
        const trash4 = document.getElementById("4Trash");
        const trash5 = document.getElementById("5Trash");
        const trash6 = document.getElementById("6Trash");
        const trash7 = document.getElementById("7Trash");
        const trash8 = document.getElementById("8Trash");

        trash0.addEventListener('click', () => {deleteTaskBox(0)});
        trash1.addEventListener('click', () => {deleteTaskBox(1)});
        trash2.addEventListener('click', () => {deleteTaskBox(2)});
        trash3.addEventListener('click', () => {deleteTaskBox(3)});
        trash4.addEventListener('click', () => {deleteTaskBox(4)});
        trash5.addEventListener('click', () => {deleteTaskBox(5)});
        trash6.addEventListener('click', () => {deleteTaskBox(6)});
        trash7.addEventListener('click', () => {deleteTaskBox(7)});
        trash8.addEventListener('click', () => {deleteTaskBox(8)});
    } else if (countAll == 10) {
        const trash0 = document.getElementById("0Trash");
        const trash1 = document.getElementById("1Trash");
        const trash2 = document.getElementById("2Trash");
        const trash3 = document.getElementById("3Trash");
        const trash4 = document.getElementById("4Trash");
        const trash5 = document.getElementById("5Trash");
        const trash6 = document.getElementById("6Trash");
        const trash7 = document.getElementById("7Trash");
        const trash8 = document.getElementById("8Trash");
        const trash9 = document.getElementById("9Trash");

        trash0.addEventListener('click', () => {deleteTaskBox(0)});
        trash1.addEventListener('click', () => {deleteTaskBox(1)});
        trash2.addEventListener('click', () => {deleteTaskBox(2)});
        trash3.addEventListener('click', () => {deleteTaskBox(3)});
        trash4.addEventListener('click', () => {deleteTaskBox(4)});
        trash5.addEventListener('click', () => {deleteTaskBox(5)});
        trash6.addEventListener('click', () => {deleteTaskBox(6)});
        trash7.addEventListener('click', () => {deleteTaskBox(7)});
        trash8.addEventListener('click', () => {deleteTaskBox(8)});
        trash9.addEventListener('click', () => {deleteTaskBox(9)});
    } else if (countAll == 11) {
        const trash0 = document.getElementById("0Trash");
        const trash1 = document.getElementById("1Trash");
        const trash2 = document.getElementById("2Trash");
        const trash3 = document.getElementById("3Trash");
        const trash4 = document.getElementById("4Trash");
        const trash5 = document.getElementById("5Trash");
        const trash6 = document.getElementById("6Trash");
        const trash7 = document.getElementById("7Trash");
        const trash8 = document.getElementById("8Trash");
        const trash9 = document.getElementById("9Trash");
        const trash10 = document.getElementById("10Trash");

        trash0.addEventListener('click', () => {deleteTaskBox(0)});
        trash1.addEventListener('click', () => {deleteTaskBox(1)});
        trash2.addEventListener('click', () => {deleteTaskBox(2)});
        trash3.addEventListener('click', () => {deleteTaskBox(3)});
        trash4.addEventListener('click', () => {deleteTaskBox(4)});
        trash5.addEventListener('click', () => {deleteTaskBox(5)});
        trash6.addEventListener('click', () => {deleteTaskBox(6)});
        trash7.addEventListener('click', () => {deleteTaskBox(7)});
        trash8.addEventListener('click', () => {deleteTaskBox(8)});
        trash9.addEventListener('click', () => {deleteTaskBox(9)});
        trash10.addEventListener('click', () => {deleteTaskBox(10)});
    } else if (countAll == 12) {
        const trash0 = document.getElementById("0Trash");
        const trash1 = document.getElementById("1Trash");
        const trash2 = document.getElementById("2Trash");
        const trash3 = document.getElementById("3Trash");
        const trash4 = document.getElementById("4Trash");
        const trash5 = document.getElementById("5Trash");
        const trash6 = document.getElementById("6Trash");
        const trash7 = document.getElementById("7Trash");
        const trash8 = document.getElementById("8Trash");
        const trash9 = document.getElementById("9Trash");
        const trash10 = document.getElementById("10Trash");
        const trash11 = document.getElementById("11Trash");

        trash0.addEventListener('click', () => {deleteTaskBox(0)});
        trash1.addEventListener('click', () => {deleteTaskBox(1)});
        trash2.addEventListener('click', () => {deleteTaskBox(2)});
        trash3.addEventListener('click', () => {deleteTaskBox(3)});
        trash4.addEventListener('click', () => {deleteTaskBox(4)});
        trash5.addEventListener('click', () => {deleteTaskBox(5)});
        trash6.addEventListener('click', () => {deleteTaskBox(6)});
        trash7.addEventListener('click', () => {deleteTaskBox(7)});
        trash8.addEventListener('click', () => {deleteTaskBox(8)});
        trash9.addEventListener('click', () => {deleteTaskBox(9)});
        trash10.addEventListener('click', () => {deleteTaskBox(10)});
        trash11.addEventListener('click', () => {deleteTaskBox(11)});
    } else if (countAll == 13) {
        const trash0 = document.getElementById("0Trash");
        const trash1 = document.getElementById("1Trash");
        const trash2 = document.getElementById("2Trash");
        const trash3 = document.getElementById("3Trash");
        const trash4 = document.getElementById("4Trash");
        const trash5 = document.getElementById("5Trash");
        const trash6 = document.getElementById("6Trash");
        const trash7 = document.getElementById("7Trash");
        const trash8 = document.getElementById("8Trash");
        const trash9 = document.getElementById("9Trash");
        const trash10 = document.getElementById("10Trash");
        const trash11 = document.getElementById("11Trash");
        const trash12 = document.getElementById("12Trash");

        trash0.addEventListener('click', () => {deleteTaskBox(0)});
        trash1.addEventListener('click', () => {deleteTaskBox(1)});
        trash2.addEventListener('click', () => {deleteTaskBox(2)});
        trash3.addEventListener('click', () => {deleteTaskBox(3)});
        trash4.addEventListener('click', () => {deleteTaskBox(4)});
        trash5.addEventListener('click', () => {deleteTaskBox(5)});
        trash6.addEventListener('click', () => {deleteTaskBox(6)});
        trash7.addEventListener('click', () => {deleteTaskBox(7)});
        trash8.addEventListener('click', () => {deleteTaskBox(8)});
        trash9.addEventListener('click', () => {deleteTaskBox(9)});
        trash10.addEventListener('click', () => {deleteTaskBox(10)});
        trash11.addEventListener('click', () => {deleteTaskBox(11)});
        trash12.addEventListener('click', () => {deleteTaskBox(12)});
    }
}