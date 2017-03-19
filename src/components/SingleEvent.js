import React, { Component } from 'react';

//components

class SingleEvent extends Component {

  constructor(props){
    super(props)
    this.state = {
      title: this.props.title,
      cast: this.props.cast,
      description: this.props.description,
      img: this.props.img,
      dateRange: this.props.dateRange,
      reviews: this.props.reviews
    }
  }

  render(){
    return(
      <div>
      
        <div>
          <div>
            <h1>About the Show</h1>
            <p>{this.state.title}</p>
            <p>{this.state.description}</p>
            <p>{this.state.dateRange}</p>
          </div>

          <div>
            <h1>Cast/Artists</h1>
            <p>cast: {this.state.cast}</p>
          </div>

          <div>
            <p>reviews: {this.state.reviews}</p>
          </div>

        </div>
          
        <div>
          <h1>Buy Tix button</h1>
          <h1>Other Info</h1>
        </div>        
        
      </div>
    )
  }
}

export default SingleEvent;