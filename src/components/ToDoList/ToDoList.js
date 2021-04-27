import React from 'react';
import ToDoItem from '../ToDoItem/ToDoItem';
import './ToDoList.css';

const ToDoList = ({items, onCompleted}) => {
  const elements = items.map(item => {
    if (typeof item !== 'object' && item !== null) {
      return;
    } else {
      const {id, ...itemProps} = item;
      return (
        <div key={id} className='todo-item-wrap'>
          <ToDoItem 
            {...itemProps}
            onCompleted={() => onCompleted(id)}/>
        </div>
      )
    }
  })

  return (
    <div className="todo-list">
      {elements}
    </div>
  )
}

export default ToDoList;