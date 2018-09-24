import { combineReducers } from 'redux';
import items from './refData';

export default combineReducers({
    data: items
})