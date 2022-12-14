//hide all task boxes
import getBoxNo from "./getBoxNo"

export default function hideAllTaskBox() {
    const boxNo = getBoxNo()

    for (let i = 0; i < boxNo; i++) {
        document.getElementById(`${i}Cont`).style.display = "none"
    }
}