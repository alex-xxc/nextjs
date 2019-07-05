import {combineReducers} from 'redux';
import personList from './personList';
import personDetailList from './personDetailList'
import diabetes from './diabetes';
let Reducers = combineReducers({
    personList,
    personDetailList,
    diabetes
});
export default Reducers;