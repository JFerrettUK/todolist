//Count number of boxes
import getLastBox from './getLastBox';
import editTaskBox from './editTaskBox';
import closeEditBox from './closeEditBox';
import saveEditDOMValues from './saveEditDOMValues';


export default function addEditListeners() {

let countAll = getLastBox()

    if ((countAll) == 1) {
        const edit0 = document.getElementById("0Edit");
        edit0.addEventListener('click', () => {editTaskBox(0)});

        const cancelEdit0 = document.getElementById("0editTaskCancelButton");
        cancelEdit0.addEventListener('click', () => {closeEditBox(0)});

        const saveEdit0 = document.getElementById("0editTaskSubmitButton");
        saveEdit0.addEventListener('click', () => {saveEditDOMValues(0)});
    } else if (countAll == 2) {
        const edit1 = document.getElementById("1Edit");
        edit1.addEventListener('click', () => {editTaskBox(1)});

        const cancelEdit1 = document.getElementById("1editTaskCancelButton");
        cancelEdit1.addEventListener('click', () => {closeEditBox(1)});

        const saveEdit1 = document.getElementById("1editTaskSubmitButton");
        saveEdit1.addEventListener('click', () => {saveEditDOMValues(1)});
    } else if (countAll == 3) {
        const edit2 = document.getElementById("2Edit");
        edit2.addEventListener('click', () => {editTaskBox(2)});

        const cancelEdit2 = document.getElementById("2editTaskCancelButton");
        cancelEdit2.addEventListener('click', () => {closeEditBox(2)});

        const saveEdit2 = document.getElementById("2editTaskSubmitButton");
        saveEdit2.addEventListener('click', () => {saveEditDOMValues(2)});
    } else if (countAll == 4) {
        const edit3 = document.getElementById("3Edit");
        edit3.addEventListener('click', () => {editTaskBox(3)});

        const cancelEdit3 = document.getElementById("3editTaskCancelButton");
        cancelEdit3.addEventListener('click', () => {closeEditBox(3)});

        const saveEdit3 = document.getElementById("3editTaskSubmitButton");
        saveEdit3.addEventListener('click', () => {saveEditDOMValues(3)});
    } else if (countAll == 5) {
        const edit4 = document.getElementById("4Edit");
        edit4.addEventListener('click', () => {editTaskBox(4)});

        const cancelEdit4 = document.getElementById("4editTaskCancelButton");
        cancelEdit4.addEventListener('click', () => {closeEditBox(4)});
        const saveEdit4 = document.getElementById("4editTaskSubmitButton");
        saveEdit4.addEventListener('click', () => {saveEditDOMValues(4)});
    } else if (countAll == 6) {
        const edit5 = document.getElementById("5Edit");
        edit5.addEventListener('click', () => {editTaskBox(5)});

        const cancelEdit5 = document.getElementById("5editTaskCancelButton");
        cancelEdit5.addEventListener('click', () => {closeEditBox(5)});

        const saveEdit5 = document.getElementById("5editTaskSubmitButton");
        saveEdit5.addEventListener('click', () => {saveEditDOMValues(5)});
    } else if (countAll == 7) {
        const edit6 = document.getElementById("6Edit");
        edit6.addEventListener('click', () => {editTaskBox(6)});

        const cancelEdit6 = document.getElementById("6editTaskCancelButton");
        cancelEdit6.addEventListener('click', () => {closeEditBox(6)});
    
        const saveEdit6 = document.getElementById("6editTaskSubmitButton");
        saveEdit6.addEventListener('click', () => {saveEditDOMValues(6)});
    } else if (countAll == 8) {
        const edit7 = document.getElementById("7Edit");
        edit7.addEventListener('click', () => {editTaskBox(7)});

        const cancelEdit7 = document.getElementById("7editTaskCancelButton");
        cancelEdit7.addEventListener('click', () => {closeEditBox(7)});

        const saveEdit7 = document.getElementById("7editTaskSubmitButton");
        saveEdit7.addEventListener('click', () => {saveEditDOMValues(7)});
    } else if (countAll == 9) {
        const edit8 = document.getElementById("8Edit");
        edit8.addEventListener('click', () => {editTaskBox(8)});

        const cancelEdit8 = document.getElementById("8editTaskCancelButton");
        cancelEdit8.addEventListener('click', () => {closeEditBox(8)});

        const saveEdit8 = document.getElementById("8editTaskSubmitButton");
        saveEdit8.addEventListener('click', () => {saveEditDOMValues(8)});
    } else if (countAll == 10) {
        const edit9 = document.getElementById("9Edit");
        edit9.addEventListener('click', () => {editTaskBox(9)});

        const cancelEdit9 = document.getElementById("9editTaskCancelButton");
        cancelEdit9.addEventListener('click', () => {closeEditBox(9)});

        const saveEdit9 = document.getElementById("9editTaskSubmitButton");
        saveEdit9.addEventListener('click', () => {saveEditDOMValues(9)});
    } else if (countAll == 11) {
        const edit10 = document.getElementById("10Edit");
        edit10.addEventListener('click', () => {editTaskBox(10)});

        const cancelEdit10 = document.getElementById("10editTaskCancelButton");
        cancelEdit10.addEventListener('click', () => {closeEditBox(10)});
       
        const saveEdit10 = document.getElementById("10editTaskSubmitButton");
        saveEdit10.addEventListener('click', () => {saveEditDOMValues(10)});
    } else if (countAll == 12) {
        const edit11 = document.getElementById("11Edit");
        edit11.addEventListener('click', () => {editTaskBox(11)});

        const cancelEdit11 = document.getElementById("11editTaskCancelButton");
        cancelEdit11.addEventListener('click', () => {closeEditBox(11)});

        const saveEdit11 = document.getElementById("11editTaskSubmitButton");
        saveEdit11.addEventListener('click', () => {saveEditDOMValues(11)});
    } else if (countAll == 13) {
        const edit12 = document.getElementById("12Edit");
        edit12.addEventListener('click', () => {editTaskBox(12)});

        const cancelEdit12 = document.getElementById("12editTaskCancelButton");
        cancelEdit12.addEventListener('click', () => {closeEditBox(12)});

        const saveEdit12 = document.getElementById("12editTaskSubmitButton");
        saveEdit12.addEventListener('click', () => {saveEditDOMValues(12)});
    } else if (countAll == 14) {
        const edit13 = document.getElementById("13Edit");
        edit13.addEventListener('click', () => {editTaskBox(13)});

        const cancelEdit13 = document.getElementById("13editTaskCancelButton");
        cancelEdit13.addEventListener('click', () => {closeEditBox(13)});

        const saveEdit13 = document.getElementById("13editTaskSubmitButton");
        saveEdit13.addEventListener('click', () => {saveEditDOMValues(13)});
    } else if (countAll == 15) {
        const edit14 = document.getElementById("14Edit");
        edit14.addEventListener('click', () => {editTaskBox(14)});

        const cancelEdit14 = document.getElementById("14editTaskCancelButton");
        cancelEdit14.addEventListener('click', () => {closeEditBox(14)});

        const saveEdit14 = document.getElementById("14editTaskSubmitButton");
        saveEdit14.addEventListener('click', () => {saveEditDOMValues(14)});
    }
}