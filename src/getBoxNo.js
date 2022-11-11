//Count number of boxes

export default function getBoxNo() {
    const countAll = document.querySelectorAll('.taskBox').length;
    return countAll;
}