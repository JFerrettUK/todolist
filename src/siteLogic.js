import _ from 'lodash';
import './style.css';
import domManip from './domManip';
import makeProjectHeader from './makeProjectHeader';

export default function siteLogic() {

    makeProjectHeader("Todo List Program");
    domManip();
}