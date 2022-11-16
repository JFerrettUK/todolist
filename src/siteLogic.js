import _ from 'lodash';
import './style.css';
import createTaskObject from './createTaskObject';
import createProjectObject from './createProjectObject';
import domManip from './domManip';
import createTaskBox from './createTaskBox';
import makeProjectHeader from './makeProjectHeader';
import addDeleteListeners from './addDeleteListeners';

export default function siteLogic() {

    makeProjectHeader("Todo List Program");
    domManip();
}