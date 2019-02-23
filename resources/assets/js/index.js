import React from 'react';
import ReactDOM from 'react-dom';
import Footer from './common/Footer';
import Header from './common/Header';
import TasksList from './pages/TasksList';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <TasksList />
                <Footer />
            </div >

        );
    }
}

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
