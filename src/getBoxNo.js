export default function getBoxNo() {
    const countAll = document.querySelectorAll('.taskBox').length;
    console.log(countAll)
    return countAll
}