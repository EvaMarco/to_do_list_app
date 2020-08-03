import React from 'react';
import ToDo from './ToDo';
import { connect } from "react-redux";


export const getTodosState = store => store.todos;

export const getTodoList = store =>
    getTodosState(store) ?
    getTodosState(store).allIds : [];

export const getTodoById = (store, id) =>
    (store) ? { ...getTodosState(store).byIds[id], id } : {};

export const getTodos = store =>
    getTodoList(store).map(id => getTodoById(store, id));

const mapStateToProps = state => {
    console.log(state.initialState)
    const { byIds, allIds } = state.initialState || {};
    const todos =
        allIds && state.initialState.allIds.length
        ? allIds.map(id => (byIds ? { ...byIds[id], id } : null))
        : null;
    return { todos };
};

const ToDoList = ({ todos }) => {
    return (
        <>
            <p>To Do List</p>
            <ul className="toDo_List">
                {todos && todos.length
                    ? todos.map((todo, index) => {
                        return <ToDo key={`todo-${todo.id}`} todo={todo} />;
                        })
                    : "No todos, yay!"
                }
            </ul>
        </>
    );
}

export default connect(mapStateToProps)(ToDoList);
