import { combineReducers } from 'redux';

import { tasksList } from './TasksList.reducer';
//import { alert } from './alert.reducer';

const rootReducer = combineReducers({
    tasksList
});

export default rootReducer;