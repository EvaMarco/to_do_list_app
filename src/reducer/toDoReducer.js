import { ADD_TODO, TOGGLE_TODO } from "../actions/actionTypes";

function toDoReducer(state, action) {
    console.log(state.initialState)
    switch (action.type) {
        case ADD_TODO: {
            const { id, content } = action.payload;
            console.log(content);
            state.initialState.allIds.push(id);
            const newElement ={
                content,
                completed: false
            }
            state.initialState.byIds[id]= newElement;
            return state
        }
        default:
            return state;
    }
}
export default toDoReducer;
