import React from "react";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import './index.css';

function TodoItem(props) {
    const task = props.task;
    return (
        <li className={task.completed ? "task done" : `task ${task.color}`} onClick={() => props.onChangeHandle(task.id)}>
            <p className="task-title">{task.text}</p>
            <button className="btn-delete" onClick={() => props.onDeleteTask(task.id)}><DeleteForeverIcon className="icon"/></button>
        </li>
    );
}

export default TodoItem;