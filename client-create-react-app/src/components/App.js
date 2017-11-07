import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    render() {
        return (
            <div>
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p>Header here</p>

                <div className="container">
                    {this.props.children}
                </div>

                <p>Footer here</p>
            </div>
        );
    }
}

export default App;