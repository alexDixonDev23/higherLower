import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    displayNumber: '',
    nextNumber: '',
    score: 0,
    lose: false
  }

  componentDidMount(){
    let displayNumber = Math.floor(Math.random() * 100);
    let nextNumber = Math.floor(Math.random() * 100)
    this.setState({ displayNumber, nextNumber })
  }

  higher = () => {
    let { displayNumber, nextNumber, score } = this.state;
    let newNumber = Math.floor(Math.random() * 100)

    this.setState({ displayNumber: nextNumber, nextNumber: newNumber, score: this.state.score += 1 })

    nextNumber < displayNumber && this.setState({ lose: true, displayNumber: score})
  };

  lower = () => {
    let { displayNumber, nextNumber, score } = this.state;
    let newNumber = Math.floor(Math.random() * 100)

    this.setState({ displayNumber: nextNumber, nextNumber: newNumber, score: this.state.score += 1 })

    nextNumber > displayNumber && this.setState({ lose: true, displayNumber: score })
  };

  startOver = () => {
    let displayNumber = Math.floor(Math.random() * 100)
    let newNumber = Math.floor(Math.random() * 100)
    this.setState({ displayNumber, nextNumber: newNumber, lose: false, score: 0 })
  }

  render() {

    let { displayNumber, lose, score } = this.state

    const styles = {
      container: {
        background: 'linear-gradient(60deg, #49275e, #2c103d)',
        alignItems: 'center',
        display: 'flex',
        height: '100vh',
        justifyContent: 'center',
        width: '100vw',
      },
      body: {
        width: '20vw',
        height: '28vh',
        background: 'linear-gradient(60deg, #ece6f2, #f2eff4)'
      },
      button: {
        width: '100px',
        height: '40px',
        cursor: 'pointer'
      }
    }

    return (
      <div style={styles.container}>
          <div style={styles.body}>
            <h3 style={{ textAlign: 'center' }}>Lower Higher</h3>
            <div style={{ height: '17vh' }}>
              <h5 style={{ textAlign: 'center', fontSize: '40px' }}>
                {displayNumber} {lose &&  " correct guesses!"}
              </h5>
            </div>
            {
              !lose ? (
                <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                  <button style={styles.button} onClick={this.higher}>Higher</button>
                  <button style={styles.button} onClick={this.lower}>Lower</button>
                </div>
              ) : (
                <div style={{ display: 'grid', justifyContent: 'space-evenly' }}>
                  <p>Ouch! Better luck next time</p>
                  <button onClick={this.startOver}>Start Over</button>
                </div>
              )
            }
          </div>
      </div>
    );
  }
}

export default App;
