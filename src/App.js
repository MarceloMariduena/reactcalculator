import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from './components/Button';
import { Input } from './components/Input';
import { Clear } from './components/Clear';
import { Footer } from './components/Footer';
import * as math from 'mathjs';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      input: ''
    }
  }

  addToInput = val => {
    this.setState({input: this.state.input + val });
  }

  handleEqual = () => {
    this.setState({input: math.eval(this.state.input)});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <br/>

          <div className="calc-wrapper">
          <Input input={this.state.input}></Input> 
            <div className="row"> 
              <Button handleClick={this.addToInput}>7</Button>
              <Button handleClick={this.addToInput}>8</Button>
              <Button handleClick={this.addToInput}>9</Button>
              <Button handleClick={this.addToInput}>/</Button>
            </div>
            <div className="row"> 
              <Button handleClick={this.addToInput}>4</Button>
              <Button handleClick={this.addToInput}>5</Button>
              <Button handleClick={this.addToInput}>6</Button>
              <Button handleClick={this.addToInput}>*</Button>
            </div>
            <div className="row"> 
              <Button handleClick={this.addToInput}>1</Button>
              <Button handleClick={this.addToInput}>2</Button>
              <Button handleClick={this.addToInput}>3</Button>
              <Button handleClick={this.addToInput}>+</Button>
            </div>
            <div className="row"> 
              <Button handleClick={this.addToInput}>+/-</Button>
              <Button handleClick={this.addToInput}>0</Button>
              <Button handleClick={this.addToInput}>.</Button>
              <Button handleClick={this.addToInput}>-</Button>
            </div>
            <div className="row">
              <Clear handleClear={() => this.setState({ input: ""})}>C</Clear>
              <Button handleClick={() => this.handleEqual()}>=</Button>
            </div>
          </div>
          <br/>
          
          <Footer message="Coded by" author="Marcelo Mariduena" link="https://github.com/marcelomariduena"/>
        </header>
      </div>
    );
  }
}

export default App;
