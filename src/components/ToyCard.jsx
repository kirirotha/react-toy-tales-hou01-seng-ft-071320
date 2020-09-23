import React, { Component } from 'react';

class ToyCard extends Component {

  handleDeleteClick = () =>{
    //console.log(this.props.toy.id)
    this.props.handleDelete(this.props.toy.id)
  }

  handleLikeClick = () =>{
    //console.log(this.props)
    this.props.handleLike(this.props.toy)
  }


  render() {
    return (
      <div className="card">
        <h2>{this.props.toy.name}</h2>
        <img src={this.props.toy.image} alt={this.props.toy.name} className="toy-avatar" />
        <p>{this.props.toy.likes } Likes </p>
        <button className="like-btn" onClick={this.handleLikeClick}>Like {'<3'}</button>
        <button className="del-btn" onClick={this.handleDeleteClick}>Donate to GoodWill</button>
      </div>
    );
  }

}

export default ToyCard;
