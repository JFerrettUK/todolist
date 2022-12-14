//take 1 for ProjectNo
import getProjectNo from './getProjectNo';

export default function minus1ProjectNo() {
    let projectNo = getProjectNo()
    projectNo -= 1;
    return projectNo
}