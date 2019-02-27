import { tasksListConstants } from '../constants/tasksList.constants';
import axios from "axios";
const apiBaseUrl = "http://127.0.0.1:8000"
const fetch = (page_url) => {
    const request = () => ({ type: tasksListConstants.FETCH_TASKSLIST_REQUEST });
    const success = (tasks) => ({ type: tasksListConstants.FETCH_TASKSLIST_SUCCESS, tasks });
    const failure = () => ({ type: tasksListConstants.FETCH_TASKSLIST_FAILURE});
    return dispatch => {
        request();
        if(!page_url)
            page_url = apiBaseUrl + '/tasks'
        axios.get(page_url)
            .then(
                response => {
                    console.log(response);
                    dispatch(success(response.data));
                },
                error => {
                    console.log(error);
                    dispatch(failure(error));
                })
    }
}

export const tasksListActions = {
    fetch,
};