import _ from 'lodash';
import './style.css';
import createTaskObject from './createTaskObject';
import createProjectObject from './createProjectObject';
import domManip from './domManip';
import createTaskBox from './createTaskBox';
import createProjectHeader from './createProjectHeader';

export default function siteLogic() {
    createTaskBox("Box1", "High", "09/01/2023");
    createTaskBox("bigTask", "Medium", "23/03/2023");
    createTaskBox("smallTask", "Low", "12/02/2023");
    createProjectHeader("Todo List Program")
    domManip();
}