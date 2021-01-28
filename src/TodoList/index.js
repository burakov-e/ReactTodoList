import React from "react";
import TodoItem from "../TodoItem";
import './index.css';

function TodoList(props) {
    console.log(props.children);
    return (
        <ul className="todo-list">
            {
                props.todos.map(task =>
                    <TodoItem onChangeHandle={props.onChangeHandle} onDeleteTask={props.onDeleteTask} key={task.id} task={task}/>
                )
            }
        </ul>
    );
}

export default TodoList;