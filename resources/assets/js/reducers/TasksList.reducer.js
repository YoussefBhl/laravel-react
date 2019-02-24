import { tasksListConstants } from '../constants/tasksList.constants';
 
export function tasksList(state = {}, action) {
    switch (action.type) {
    case tasksListConstants.FETCH_TASKSLIST_REQUEST:
        return {
        tasksList: {}
        };
    case tasksListConstants.FETCH_TASKSLIST_SUCCESS:
        return {
            tasksList: action.tasksList
        };
    case tasksListConstants.FETCH_TASKSLIST_FAILURE:
        return {
            tasksList: {}
            };
    default:
        return state
    }
}