import React, { Component } from 'react';
import './App.css';

import LetterThing from "./components/LetterThing"


const wordlist = [
  "game",
  "dinosaur",
  "grounding",
  "dictionary",
  "coding",
  "codaisseur",
  "struggling",
  "reactisreal",
  "staplers",
  "sleepless",
  "healthy_sleeping_and_eating",
]

class App extends Component {

  state = {
    game: null,
    guessingLetter: "K",
  }

  createGame = () => {
    const i = Math.floor(Math.random() * wordlist.length);

    this.setState({
      game: {
        word: wordlist[i].toUpperCase(),// random word,
        guesses: [],
      },
    })
  }

  guessedLetterChange = (event) => {
    let currentText = event.target.value
    if (currentText.length > 1) {
      currentText = currentText[currentText.length - 1]
    }
    this.setState({
      guessingLetter: currentText.toUpperCase()
    })
  }

  guess = (letter) => {
    // do this
    // this.state.game.guesses.push(this.state.guessingLetter)
    const updatedGame = {
      ...this.state.game,
      guesses: [
        ...this.state.game.guesses,
        letter,
      ],
    }

    // like this
    this.setState({
      guessingLetter: "",
      game: updatedGame
    })
  }

  asLetters () {
    return this.state.game.word
      .split("")
      .map(letter => {
        return {
          letter,
          guessed: this.state.game.guesses.indexOf(letter) >= 0,
        }
      })
  }

  render() {
    if (this.state.game) {
      return (
        <div className="App">
          <div>
            <input
              value={this.state.guessingLetter}
              onChange={this.guessedLetterChange}
            />
            <button onClick={() => this.guess(this.state.guessingLetter)}>Guess</button>
          </div>
          {this.asLetters().map(obj => {
            return <LetterThing
              letter={obj.letter}
              guessed={obj.guessed}
              iWasClick={() => this.guess(obj.letter)}
            />
          })}
        </div>
      )
    } else {
      return (
        <div className="App">
          Welcome to Hangman!<br />
          <button onClick={this.createGame}>Create game</button>
        </div>
      );
    }
  }
}

export default App;
