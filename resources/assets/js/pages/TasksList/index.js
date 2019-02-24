import React from 'react';
import { connect } from 'react-redux';
import { tasksListActions } from '../../actions/tasksList.actions';

class TasksList extends React.Component {
    componentWillMount() {
        const { dispatch } = this.props;
        dispatch(tasksListActions.fetch())
    }
    render() {
        if (this.props.tasks)
            return (
                <div className="container">
                    {this.props.tasks.map((el, ind) =>
                        <div key={ind} className="panel panel-default">
                            <div className="panel-heading">{el.title}</div>
                            <div className="panel-body">{el.body.substring(1, 120)}</div>
                            <div className="panel-footer">{el.created}</div>
                        </div>
                    )
                    }
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