import React from 'react';
import './App.css';
import AddToDo from "./components/AddToDo";
import ToDoList from "./components/ToDoList";
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
                <header>
                    To Do List
                </header>
                <main>
                    <AddToDo></AddToDo>
                    <ToDoList></ToDoList>
                </main>
                <footer>
                    footer
                </footer>
            </div>
        );
    }
}

export default App;
