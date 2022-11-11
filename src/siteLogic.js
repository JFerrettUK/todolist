import _ from 'lodash';
import './style.css';
import createTaskObject from './createTaskObject';
import createProjectObject from './createProjectObject';
import domManip from './domManip';
import createTaskBox from './createTaskBox';
import makeProjectHeader from './makeProjectHeader';

export default function siteLogic() {
    const arrayHere = createTaskObject("testTitle", "projectHere", "priorityHere", "descriptionHere", "dueDateHere")
    console.log(arrayHere)

    createTaskBox(arrayHere);
    createTaskBox(arrayHere);
    makeProjectHeader("Todo List Program")
    domManip();
}