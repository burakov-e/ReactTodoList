import React from "react";

function TodoItem(props) {
    const task = props.task;
    return (
        <li className={task.completed ? 'task completed' : 'task'}>
            <input type="checkbox" onChange={() => props.onChangeHandle(task.id)} checked={task.completed}/>
            <p className="task-title">{task.text}</p>
        </li>
    );
}

export default TodoItem;