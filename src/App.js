import React, { Component } from 'react';
import './App.css';
import utils from './util'
import ListItem from './ListItem'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      entryText: "",
      list: []
    }
  }

  updateEntry(e) {
    this.setState({entryText: e.target.value})
  }

  updateList(newList) {
    this.setState({list: newList})
  }

  submitEntry() {
    utils.submitEntry(this.state.entryText, this.updateList.bind(this))
    this.setState({entryText: ""})
  }

  render() {
    return (
      <div className="App">
        <input value={this.state.entryText} onChange={this.updateEntry.bind(this)} />
        <button onClick={this.submitEntry.bind(this)}>submit</button>

        {this.state.list.map( item => <ListItem item={item} />)}
      </div>
    );
  }
}

export default App;
