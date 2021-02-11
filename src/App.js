import React from 'react';
import './App.css';

import Form from './Form'
import Books from './Books'

let url = "https://www.googleapis.com/books/v1/volumes?q="

class App extends React.Component {

  state = {items: []}  

  //1. When the application loads, I want to make a fetch request to get books about coding and load them in the UL below ✅
  //2. Get the sort functionality to work ✅
  //3. I can later search for a new term of books, fetch them, and display them in the UL below ✅
  //4. Split this component into smaller components ✅

  //initial fetch requests ALWAYS go into componentDidMount
  componentDidMount(){
    fetch(url + "coding")
      .then(res => res.json())
      .then(respObj => {
        this.setState({items: respObj.items.map(book => book.volumeInfo.title)}, () => console.log(this.state))
      })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    let term = event.target.term.value
    fetch(url + term)
      .then(res => res.json())
      .then(respObj => {
        this.setState({items: respObj.items.map(book => book.volumeInfo.title)}, () => console.log(this.state))
      })
  }

  render(){
    return(
      <div className="App">
        <Form handleSubmit={this.handleSubmit}/>
        <br/>
        <Books handleChange={this.handleChange} sorted={this.state.sorted} items={this.state.items}/>
      </div>
    )
  }
}


export default App;
