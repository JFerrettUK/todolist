import _ from 'lodash';
import './style.css';
import domManip from './domManip';
import makeProjectHeader from './makeProjectHeader';
import projectManip from './projectManip';

export default function siteLogic() {
    makeProjectHeader("TodoList");
    domManip();
    projectManip();
}