import React from 'react';

class ControlledInput extends React.Component {
  state = {
    mood: 'happy',
  }

  handleClick = event => {
    this.setState({
      mood: this.state.mood === "happy" ? "sad" : "happy" ,
    });
  }


  render() {
    return (
      <div onClick={this.handleClick}>{this.state.mood}</div>
    );
  }
}

export default ControlledInput;
