import React from 'react';
import { connect } from 'react-redux';
import { tasksListActions } from '../../actions/tasksList.actions';
import Pagination from './Pagination';

class TasksList extends React.Component {
    componentWillMount() {
        const { dispatch } = this.props;
        dispatch(tasksListActions.fetch(null));
    }
    handleClickPage = (page_url) => {
        const { dispatch } = this.props;
        dispatch(tasksListActions.fetch(page_url));
    }
    render() {
        const tasks = this.props.tasks;
        if (tasks)
            return (
                <div className="container">
                    {tasks.data.map((el, ind) =>
                        <div key={ind} className="panel panel-default">
                            <div className="panel-heading">{el.title}</div>
                            <div className="panel-body">{el.body.substring(1, 120)}</div>
                            <div className="panel-footer">{el.created}</div>
                        </div>
                    )
                    }
                    <Pagination prev={tasks.prev_page_url}
                        next={tasks.next_page_url}
                        handleClick={this.handleClickPage} />
                </div>
            );
        return null;
    }
}

function mapStateToProps(state) {
    const { tasksList } = state;
    const { tasks } = tasksList;
    return {
        tasks
    };
}

TasksList = connect(mapStateToProps)(TasksList);
export default TasksList;