import getLastBox from "./getLastBox"

//Show the all task boxes

export default function showAllTaskBox() {
    let lastBoxNo = getLastBox()

    for (let i = 0; i < lastBoxNo; i++) {
        document.getElementById(`${i}Cont`).style.display = "grid"
    }
}