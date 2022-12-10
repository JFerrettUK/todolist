//Show the all task boxes

export default function showAllTaskBox() {
    for (let i = 0; i < 20; i++) {
        document.getElementById(`${i}Cont`).style.display = "grid"
    }
}