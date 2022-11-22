import _ from 'lodash';
import './style.css';
import domManip from './domManip';
import makeProjectHeader from './makeProjectHeader';
import createProjectObject from './createProjectObject';

export default function siteLogic() {
    makeProjectHeader("Todo List Program");
    domManip();

    var project = createProjectObject("first project")
    console.log(project)
}