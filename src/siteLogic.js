import _ from 'lodash';
import './style.css';
import createTaskObject from './createTaskObject';
import createProjectObject from './createProjectObject';
import domManip from './domManip';
import createTaskBox from './createTaskBox';
import createProjectHeader from './createProjectHeader';

export default function siteLogic() {
    domManip();
    createTaskBox("Box1", "High");
    createTaskBox("bigTask", "Medium");
    createTaskBox("smallTask", "Low");
    createProjectHeader("Todo List Program")


}