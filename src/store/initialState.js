
export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
};

const initialState = {
    todoList: [
        {
            id: 0,
            text: "Aprender Redux",
            completed: false
        },
        {
            id: 1,
            text: "Montar armario Ikea",
            completed: false
        },
        {
            id: 2,
            text: "Regar las plantas",
            completed: false
        },


    ],
    visibility: VisibilityFilters.SHOW_ALL
}

export default initialState;
