import React, { Component } from 'react';

class LetterThing extends Component {

  hint = () => {
    this.props.iWasClick()
  }

  render() {
    if (this.props.guessed) {
      return <div>
        {this.props.letter}
      </div>
    }
    return <div onClick={this.hint}>
      _
    </div>
  }
}

export default LetterThing;
