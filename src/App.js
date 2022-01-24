import React, { Component } from "react";
import './App.scss';
import MainRoute from './modules/Global/components/allRoutes/mainRoute';

class App extends Component {
    render() {
        return (
            <div>
                <MainRoute />
            </div>
        );
    }
}

export default App;