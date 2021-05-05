import './App.css';
import React from 'react';
import AddItem from './add_item';
import TodoList from './todo_list';
import { reactLocalStorage } from 'reactjs-localstorage';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { todoItem: [], color: 'red' };
  }

  getData = (todo) => {
    let l = this.state.todoItem;
    l.push(todo);
    this.setState({ todoItem: l });
    reactLocalStorage.set('todo', JSON.stringify(l));
  }

  componentDidMount = () => {

    let l1 = reactLocalStorage.get('todo');
    console.log(l1);
    if (l1) {
      this.setState({ todoItem: JSON.parse(l1) });
    }
  }

  checkedItem = (name, isChecked, index) => {
    //const index = this.state.todoItem.findIndex(t => t.name === name);
    let newarr = this.state.todoItem;
    newarr[index].isChecked = isChecked;
    this.setState({ todoItem: newarr });
    reactLocalStorage.set('todo', JSON.stringify(newarr));
  }

  removeItem = (name, index) => {
    // const index = this.state.todoItem.findIndex(t => t.name === name);
    let newarr = this.state.todoItem;
    newarr.splice(index, 1);
    this.setState({ todoItem: newarr });
    reactLocalStorage.set('todo', JSON.stringify(newarr));
  }

  render() {
    return (
      <>
        <AddItem setList={this.getData} />
        <div className="todo-div">
          <div className="todo-header">
            <p>Todo List</p>
          </div>
        </div>
        <div className="todolist-div">
          <TodoList checkedItem={this.checkedItem} lists={this.state.todoItem} remove={this.removeItem} />
        </div>

      </>
    )
  }
}

export default App;
