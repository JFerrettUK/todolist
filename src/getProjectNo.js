//Count number of boxes

export default function getProjectNo() {
    const projectOptions = document.querySelectorAll('.newProjects');
    let countAll = projectOptions.length;
    return countAll;
}