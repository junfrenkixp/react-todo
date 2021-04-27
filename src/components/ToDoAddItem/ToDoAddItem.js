import React, {Component} from 'react';
import './ToDoAddItem.css';

export default class ToDoAddItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({
      text: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();
    const {text} = this.state;
    if (!text) {
      return;
    } 
    this.props.onAdd(text);
    this.setState({
      text: ''
    })
  }

  render() {
    return (
      <form
        onSubmit={this.onSubmit}>
        <input 
            type="text"
            placeholder="Add item"
            onChange={this.onChange}
            value={this.state.text}/>
          <button 
            type="submit">
            Add</button>
      </form>
    )
  }
}