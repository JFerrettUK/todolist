import _ from 'lodash';
import './style.css';
import createObject from './createObject';

const project1 = createObject("baking", "Make a cake that looks like a crocodile for Tammy.", "November 12th 2022", "high");
const project2 = createObject("List Project", "Make a webpage that acts as a todo list for users!", "November 2022", "medium");
const project3 = createObject("Christmas Cards", "Get Christmas cards printed by Principal.", "November 5th 2022", "medium");

console.log(project1, project2, project3);