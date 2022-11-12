//Count number of boxes

export default function getBoxNo() {
    const taskBoxes = document.querySelectorAll('.taskBox');
    let countAll = taskBoxes.length;

    return countAll;
}