import React from "react";
import TodoItem from "./components/TodoItem";
import todosData from "./todosData";


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: todosData
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(id) {
        this.setState(prevState => {
            const changedTodos = prevState.todos.map(task => {
                if (task.id === id) {
                    task.completed = !task.completed;
                }
                return task;
            });

            return {
                todos: changedTodos
            };
        });
    }

    render() {
        return (
            <ul className="todo-list">
                {
                    this.state.todos.map(task => <TodoItem onChangeHandle={this.handleClick} key={task.id} task={task}/>)
                }
            </ul>
        );
    }
}

export default App;