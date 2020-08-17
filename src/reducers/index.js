import { combineReducers } from 'redux';
import initialState from "../store/initialState";

const todos = (state = initialState.todoList, action) => {
    console.log(action);
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ]
        case 'TOGGLE_TODO':
            return state.map(todo =>
            (todo.id === action.id)
                ? {...todo, completed: !todo.completed}
                : todo
            )
        default:
            return state
        }
}

const visibilityFilter = (state = initialState.visibility, action) => {
    switch (action.type) {
        case 'SET_VISIBILITY_FILTER':
        return action.filter
        default:
        return state
    }
}

export default combineReducers({
    todos,
    visibilityFilter
})
