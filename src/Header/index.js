import React from "react";
import PostAddIcon from '@material-ui/icons/PostAdd';
import './index.css';

function Header(props) {
    return (
        <header className="header">
            <h1 className="header-title">Add new task</h1>

            <form className="add-task" onSubmit={props.addEvent}>
                <input className="input-add" type="text" placeholder="Enter a new task" value={props.currentTask} onChange={props.changeEvent}/>
                <button className="btn-add"><PostAddIcon className="icon"/></button>
            </form>
        </header>
    );
}

export default Header;