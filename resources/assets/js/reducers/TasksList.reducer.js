import { tasksListConstants } from '../constants/tasksList.constants';
 
export function tasksList(state = {}, action) {
    switch (action.type) {
    case tasksListConstants.FETCH_TASKSLIST_REQUEST:
        return {}
    case tasksListConstants.FETCH_TASKSLIST_SUCCESS:
        return {
            tasks: action.tasks
        };
    case tasksListConstants.FETCH_TASKSLIST_FAILURE:
        return {}
    default:
        return state
    }
}