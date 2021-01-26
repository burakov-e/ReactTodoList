import React from "react";
import TodoItem from "../TodoItem";
import './index.css';

function TodoList(props) {
    return (
        <ul className="todo-list">
            {
                props.todos.map(task =>
                    <TodoItem onChangeHandle={props.clickEvent} onDeleteTask={props.deleteEvent} key={task.id} task={task}/>
                )
            }
        </ul>
    );
}

export default TodoList;