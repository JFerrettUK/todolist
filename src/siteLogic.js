import _ from 'lodash';
import './style.css';
import createTaskObject from './createTaskObject';
import createProjectObject from './createProjectObject';
import domManip from './domManip';
import createTaskBox from './createTaskBox';
import makeProjectHeader from './makeProjectHeader';
import getLastBox from './getLastBox';

export default function siteLogic() {

    const input = createTaskObject("Test", "nameofProject", "Medium", "A test task", "09/12/2022");
    createTaskBox(input);
    
    const input2 = createTaskObject("SecondTest", "nameofProject", "High", "A test task", "29/02/2023");
    createTaskBox(input2);
    
    makeProjectHeader("Todo List Program");
    domManip();
    getLastBox();
}