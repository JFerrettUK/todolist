import _ from 'lodash';
import './style.css';
import domManip from './domManip';
import makeProjectHeader from './makeProjectHeader';
import createProjectObject from './createProjectObject';
import objManip from './objManip';

export default function siteLogic() {
    makeProjectHeader("Todo List Program");
    domManip();
    objManip();
}