import _ from 'lodash';
import './style.css';
import domManip from './domManip';
import makeProjectHeader from './makeProjectHeader';
import createProjectObject from './createProjectObject';
import projectManip from './projectManip';

export default function siteLogic() {
    makeProjectHeader("TodoList");
    projectManip();
    domManip();
}