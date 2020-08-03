import React from "react";
import { connect } from "react-redux";

const Todo = ({ todo }) => (
  <li className="todo-item" >
    {todo && todo.completed ? "👌" : "👋"}{" "}
    <span
    >
      {todo.content}
    </span>
  </li>
);

// export default Todo;
export default Todo;
