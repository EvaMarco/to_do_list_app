import React from 'react';
import './App.css';
import Header from "./components/Header";
import Footer from './components/Footer'
import AddTodo from './containers/AddTodo'
import VisibleTodoList from './containers/VisibleTodoList'

const App = () => (
    <div>
        <Header />
        <AddTodo />
        <VisibleTodoList />
        <Footer />
    </div>
)


export default App;
