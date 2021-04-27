import React from 'react';
import './ToDoItem.css';

const ToDoItem = ({label, completed, onCompleted}) => {

  let classNames = 'todo-item';
  
  if(completed) {
    classNames += ' completed';
  }

  return (
    <div 
      className={classNames}>
      <span>
        {label}
      </span>
      <button
        onClick={onCompleted}>
        completed</button>
    </div>
  )
}

export default ToDoItem;