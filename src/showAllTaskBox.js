import getLastBox from "./getLastBox"

//Show the all task boxes

export default function showAllTaskBox() {
    let lastBoxNo = getLastBox()

    for (let i = 0; i < lastBoxNo; i++) {
        if (document.getElementById(`${i}Cont`).style.display == null) {
            continue
        } else {
            document.getElementById(`${i}Cont`).style.display = "grid"
        }
    }
}