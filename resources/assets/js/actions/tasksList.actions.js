import { tasksListConstants } from '../constants/tasksList.constants';
import { history } from '../common/history';

const fetch = () => {
    const success = (list) => ({ type: tasksListConstants.FETCH_TASKSLIST_SUCCESS, list });
    return dispatch => {
        dispatch(success(token));
        //history.push('/');
    }
}

export const tasksListActions = {
    fetch
};