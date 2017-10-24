import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import state from "./state";

let randomWords = require('random-words');

class App extends Component {
  constructor() {
    super();
    this.state = {
      wordToGuess: "",
      strikes: 0,
      guess: "",
      correctGuesses: []
    };
  }

  componentWillMount() {
    this.setState({wordToGuess: randomWords()});

    let correctGuessesArr = [];

    for (let i = 0; i < this.state.wordToGuess.length; i++) {
      correctGuessesArr.push("_");
    }

    this.setState({correctGuesses: correctGuessesArr});

    console.log(this.state.correctGuesses.length);
  }

  render() {
    let className = `strike-${this.state.strikes}`;
    let spans = [ < span > _ < /span>];
    return (
			<div>
				<div className="hangman-sprites">
					<div className={`${className} current`} /> </div> <div id = "inputs" > <div>{spans}</div> < input /> <button>Guess</button> </div>
			</div >);
    }
  }

  export default App;
