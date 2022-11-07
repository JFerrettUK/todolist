import _ from 'lodash';
import './style.css';
import createTaskObject from './createTaskObject';
import createProjectObject from './createProjectObject';
import domManip from './domManip';
import makeTaskBox from './makeTaskBox';
import makeProjectHeader from './makeProjectHeader';

domManip();
makeTaskBox("Box1", "High");
makeTaskBox("bigProject", "Medium");
makeTaskBox("smallProject", "Low");
makeProjectHeader("Todo List Program")