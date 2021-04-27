import React, {Component} from 'react';
import ToDoAddItem from '../ToDoAddItem/ToDoAddItem';
import ToDoList from '../ToDoList/ToDoList';
import nextId from "react-id-generator";

import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: nextId(),
          label: 'Купить макбук',
          completed: true
        },
        {
          id: nextId(),
          label: 'Купить яблоко',
          completed: false
        },
        {
          id: nextId(),
          label: 'Купить фасоль',
          completed: false
        },
      ]
    }
    this.addItem = this.addItem.bind(this);
    this.onCompleted = this.onCompleted.bind(this);
  }

  addItem(label) {
    const newItem = {
      id: nextId(),
      label: label,
      completed: false
    }

    this.setState(({data}) => {
      const newArr = [...data, newItem];
      return {
        data: newArr
      }
    })
  }

  onCompleted(id) {
    this.setState(({data}) => {
      const index = data.findIndex(el => el.id === id);
      const oldElem = data[index];
      if (oldElem.completed === true) {
        return;
      }
      const newElem = {...oldElem, completed: !oldElem.completed};
      const newArr = [...data.slice(0, index), newElem, ...data.slice(index + 1)];
      return {
        data: newArr
      }
    })
  }

  render() {
    return (
      <div className="App">
        <h1>ToDo List</h1>
        <ToDoAddItem 
          onAdd={this.addItem} />
        <ToDoList 
          items={this.state.data} 
          onCompleted={this.onCompleted} />
      </div>
    )
  }
}
