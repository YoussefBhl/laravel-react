import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from "./store.js"
import Footer from './common/Footer';
import Header from './common/Header';
import TasksList from './pages/TasksList';

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Header />
                <TasksList />
                <Footer />
            </Provider>
        );
    }
}

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}