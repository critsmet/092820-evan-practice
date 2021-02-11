import React from 'react'

class Form extends React.Component{
  render(){
    return(
      <form onSubmit={this.props.handleSubmit}>
        <input type="text" name="term" />
        <input type="submit" value="Search for Books!" />
      </form>
    )
  }
}

export default Form
