import React, {Component} from 'react';
import './App.css';


class App extends Component {
    state = {
        showDices: false,
        scores: [0, 0],
        activePlayer: 0,
        curr0: 0,
        curr1: 0,
        dice1: Math.floor(Math.random() * 6 + 1),
        dice2: Math.floor(Math.random() * 6 + 1),
        prevDice1: 0,
        prevDice2: 0,
        winningScore: 100
    }

    diceRollHandler = () => {

        if (this.state.dice1 !== 1 && this.state.dice2 !== 1) {
            this.setState(prevState => {
                return {
                    showDices: true,
                    curr0: this.state.activePlayer === 0 ? prevState.curr0 + this.state.dice1 + this.state.dice2 : prevState.curr0,
                    curr1: this.state.activePlayer === 1 ? prevState.curr1 + this.state.dice1 + this.state.dice2 : prevState.curr1,
                    prevDice1: this.state.dice1,
                    prevDice2: this.state.dice2
                }
            })
        } else {
            this.setState(prevState => {
                return {
                    showDices: false,
                    activePlayer: this.state.activePlayer === 0 ? 1 : 0,
                    curr0: 0,
                    curr1: 0
                }
            })
        }
        this.setState({
            dice1: Math.floor(Math.random() * 6 + 1),
            dice2: Math.floor(Math.random() * 6 + 1)
        })
    }

    newGameHandler = () => {
        this.setState({
            curr0: 0,
            curr1: 0,
            scores: [0, 0],
            activePlayer: 0,
            showDices: false
        });
    }

    holdHandler = () => {
        this.setState({
            curr0: 0,
            curr1: 0,
            scores: [this.state.scores[0] + this.state.curr0, this.state.scores[1] + this.state.curr1],
            activePlayer: this.state.activePlayer === 0 ? 1 : 0,
            showDices: false
        });
    }

    scoreHandler = (event) => {
        this.setState({
            winningScore: event.target.value
        })
    }

    render() {
        let className0 = this.state.activePlayer === 0 ? 'player-0-panel active' : 'player-0-panel';
        let className1 = this.state.activePlayer === 1 ? 'player-1-panel active' : 'player-1-panel';
        if (this.state.scores[0] >= this.state.winningScore) {
            className0 = 'player-0-panel winner';
            className1 = 'player-1-panel';
        } else if (this.state.scores[1] >= this.state.winningScore) {
            className0 = 'player-0-panel';
            className1 = 'player-1-panel winner';
        }

        return (
            <React.Fragment>
                <div className="wrapper">
                    <div className={className0}>
                        <div className="player-name"
                             id="name-0">{this.state.scores[0] >= this.state.winningScore ? 'Winner!' : 'Player 1'}</div>
                        <div className="player-score" id="score-0">{this.state.scores[0]}</div>
                        <div className="player-current-box">
                            <div className="player-current-label">Current</div>
                            <div className="player-current-score" id="current-0">{this.state.curr0}</div>
                        </div>
                    </div>

                    <div className={className1}>
                        <div className="player-name"
                             id="name-1">{this.state.scores[1] >= this.state.winningScore ? 'Winner!' : 'Player 2'}</div>
                        <div className="player-score" id="score-1">{this.state.scores[1]}</div>
                        <div className="player-current-box">
                            <div className="player-current-label">Current</div>
                            <div className="player-current-score" id="current-1">{this.state.curr1}</div>
                        </div>
                    </div>
                </div>
                <div className='btn-wrapper'>
                    <button onClick={this.newGameHandler} className="btn-new"><i className="ion-ios-plus-outline"/>New
                        game
                    </button>
                    <input onChange={this.scoreHandler} placeholder="Winning score" className="winning-score"
                           type="number"/>
                    <button
                        onClick={this.diceRollHandler}
                        disabled={this.state.scores[0] >= this.state.winningScore || this.state.scores[1] >= this.state.winningScore}
                        className="btn-roll"><i className="ion-ios-loop"/>Roll dice
                    </button>
                    <button onClick={this.holdHandler}
                            disabled={this.state.scores[0] >= this.state.winningScore || this.state.scores[1] >= this.state.winningScore}
                            className="btn-hold"><i className="ion-ios-download-outline"/>Hold
                    </button>

                    {this.state.showDices ?
                        <React.Fragment>
                            <img src={require(`./assets/dice-${this.state.prevDice1.toString()}.svg`)} alt="Dice"
                                 className="dice"/>
                            <img src={require(`./assets/dice-${this.state.prevDice2.toString()}.svg`)} alt='Dice'
                                 className="dice-2"/>
                        </React.Fragment>
                        : null}
                </div>
            </React.Fragment>
        )
    }
}

export default App;
