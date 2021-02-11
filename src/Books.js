import React from 'react'

class Books extends React.Component{

  state={sorted: false}

  handleChange = (event) => {
    this.setState({sorted: event.target.checked}, () => console.log(this.state))
  }

  render(){
    return(
      <div id="books-container">
        <input onChange={this.handleChange} type="checkbox" name="sort"/>
        <label>Sort Alphabetically</label>
        <ul>
            {this.state.sorted ? [...this.props.items].sort().map(book => <li key={book}>{book}</li>) : this.props.items.map(book => <li key={book}>{book}</li>)}
        </ul>
      </div>
    )
  }
}

export default Books
