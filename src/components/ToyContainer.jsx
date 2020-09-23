import React, { Component } from 'react';
import ToyCard from './ToyCard'


class ToyContainer extends Component {

  
  renderToys = () => {
    return this.props.toys.map(toy =>{
      return <ToyCard toy={toy} key={toy.id} handleDelete={this.props.handleDelete} handleLike={this.props.handleLike}/>
    })
  } 

  render(){
  return(
    <div id="toy-collection">
      {this.renderToys()}
    </div>
  )};
}

export default ToyContainer;
