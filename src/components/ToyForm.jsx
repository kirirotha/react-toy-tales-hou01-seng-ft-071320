import React, { Component } from 'react';

class ToyForm extends Component {
  state={
    name: "",
    image: "",
    likes: 0
  }

  handleNameChange = (e) =>{
    //console.log(e.target.value)
    this.setState({
      ...this.state,
      name: e.target.value
    })
  }

  handleImageChange = (e) =>{
    //console.log(e.target.value)
    this.setState({
      ...this.state,
      image: e.target.value
    })
  }

  handleClick = (e) =>{    
    e.preventDefault()

    this.props.addToyToInventory(this.state)
  }

  render() {
    return (
      <div className="container">
        <form className="add-toy-form">
          <h3>Create a toy!</h3>
          <input type="text" name="name" placeholder="Enter a toy's name..." className="input-text" onChange={this.handleNameChange}/>
          <br/>
          <input type="text" name="image" placeholder="Enter a toy's image URL..." className="input-text" onChange={this.handleImageChange}/>
          <br/>
          <button name="submit" value="Create New Toy"  onClick={this.handleClick}>Submit</button>
        </form>
      </div>
    );
  }

}

export default ToyForm;
