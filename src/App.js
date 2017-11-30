import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'


class ListItem extends Component {

  render() {
    console.log(this.props.item)
    return (
      <div>{this.props.item.artistName} {this.props.item.trackName}
      </div>
    )
  }
}

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
    axios.get('https://itunes.apple.com/search?term=' + this.state.entryText)
      .then(response => { this.updateList(response.data.results) })
      .catch(function (error) {
        console.log(error);
      });
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
