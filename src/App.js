import React from 'react';
import './App.css';
import AddToDo from "./components/AddToDo";
import ToDoList from "./components/ToDoList";
import Header from "./components/Header";
import { connect } from 'react-redux';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            value: ",",
        }
    }

    render() {
        return (
            <div className="App">
                <Header />
                <main className="main_container">
                    <AddToDo/>
                    <ToDoList/>
                </main>
                <footer>
                    footer
                </footer>
            </div>
        );
    }
}

export default App;
