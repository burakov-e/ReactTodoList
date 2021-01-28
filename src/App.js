import React from "react";
import Header from "./Header";
import TodoList from "./TodoList";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.color = ['red', 'orange', 'yellow', 'green', 'blue', 'violet'];
        this.state = {
            currentTask: "",
            todos: []
        };

        this.handleClick = this.handleClick.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ currentTask: event.target.value });
    }

    handleAdd(event) {
        event.preventDefault();

        if (!this.state.currentTask.trim()) {
            alert('Write some task!');
            return;
        }

        this.setState(prevState => {
            let prevID = prevState.todos[0] ? prevState.todos[0].id : 0;

            const newTask = {
                id: prevID + 1,
                text: prevState.currentTask,
                completed: false,
                color: this.color[(prevID + 1) % this.color.length]
            };
            const changedTodos = [newTask, ...prevState.todos];

            return {
                currentTask: "",
                todos: changedTodos
            };
        });
    }

    handleDelete(id) {
        this.setState(prevState => {
            const changedTodos = prevState.todos.filter(task => task.id !== id);

            return {
                todos: changedTodos
            };
        });
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
            <div className="container">
                <Header changeEvent={this.handleChange} addEvent={this.handleAdd} currentTask={this.state.currentTask}/>
                <main className="main">
                    {
                        this.state.todos.length ? <TodoList todos={[...this.state.todos]}
                                                            onChangeHandle={this.handleClick}
                                                            onDeleteTask={this.handleDelete}
                                                  /> :
                                                  <div className="nothing">
                                                      You don't have any tasks
                                                  </div>
                    }
                </main>
            </div>
        );
    }
}

export default App;