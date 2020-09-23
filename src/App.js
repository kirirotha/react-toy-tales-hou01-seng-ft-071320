import React from 'react';
import './App.css';

import Header from './components/Header'
import ToyForm from './components/ToyForm'
import ToyContainer from './components/ToyContainer'

import data from './data'


class App extends React.Component{

  state = {
    display: false,
    toys: []
  }

  componentDidMount(){
    this.getToys()
  }

  getToys = () =>{
    fetch('http://localhost:3000/toys')
    .then(res => res.json())
    .then(toys =>{
      this.setState({
        ...this.state,
        toys: toys
      })
    })
  }

  handleClick = (e) => {
    e.preventDefault()
    let newBoolean = !this.state.display
    this.setState({
      ...this.state,
      display: newBoolean
    })
  }

  handleToySubmit = (newToy) =>{
    //console.log(newToy)
    let toyList = this.state.toys
    toyList.push(newToy)
    this.setState({
      ...this.state,
      toys: toyList
    })

  }

  addToyToInventory = (newToy) =>{
    fetch('http://localhost:3000/toys', {
    method: 'POST',
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(newToy)
    })
    .then(res => res.json())
    .then(toy =>{
      let toyList = this.state.toys
      toyList.push(toy)
      this.setState({
        ...this.state,
        toys: toyList
      })
    })
  }

  handleDelete = (id) =>{
    fetch(`http://localhost:3000/toys/${id}`, {
    method: 'DELETE'})
    .then(res => res.json())
    .then(toys =>{
      this.removeToy(id)
    })

  }

  removeToy = (id) =>{
    let toyList = this.state.toys.filter(toy =>{
      return toy.id !== id
    })
    this.setState({
      ...this.state,
      toys: toyList
    })
  }

  handleLike = (likedToy) =>{
    //console.log(toy)
    let toyList = this.state.toys.map(toy =>{
      if(toy.id === likedToy.id){
        toy.likes++
      }
      return toy
    })
    this.setState({
      ...this.state,
      toys: toyList
    })
    this.updateLikesInDb(likedToy)
  }

  updateLikesInDb = (likedToy) =>{
    let patchData = {likes: likedToy.likes}
    fetch(`http://localhost:3000/toys/${likedToy.id}`, {
    method: 'PATCH',
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(patchData)
    })
    .then(res => res.json())
    .then(toy =>{
      console.log(toy)
    })
  }

  

  render(){
    return (
      <>
        <Header/>
        { this.state.display
            ?
          <ToyForm addToyToInventory={this.addToyToInventory}/>
            :
          null
        }
        <div className="buttonContainer">
          <button onClick={this.handleClick}> Add a Toy </button>
        </div>
        <ToyContainer toys={this.state.toys} handleDelete={this.handleDelete} handleLike={this.handleLike}/>
      </>
    );
  }

}

export default App;
