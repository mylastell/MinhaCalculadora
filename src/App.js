import React, { Component } from "react";
import styled from "styled-components";

export default class App extends Component {
  state = {
    num1: "",
    num2: "",
    resultado: ""
  };

  InputUm = (event) => {
    this.setState({
      num1: Number(event.target.value)
    });
  };

  InputDois = (event) => {
    this.setState({
      num2: Number(event.target.value)
    });
  };

  soma = () => {
    this.setState({
      resultado: this.state.num1 + this.state.num2
    });
  };

  apagar = () => {
    this.setState({
      num1: "",
      num2: "",
      resultado: ""
    });
  };

  render() {
    return (
      <div>
        <h1>Calculadora</h1>
        <input onChange={this.InputUm} type="number" value={this.state.num1} />
        <input
          onChange={this.InputDois}
          type="number"
          value={this.state.num2}
        />
        <div>
          <button onClick={this.soma}>+</button>
          <button>-</button>
          <button>/</button>
          <button>*</button>
          <button onClick={this.apagar}>c</button>
        </div>
        <h3>Resultado</h3>
        <h2>{this.state.resultado}</h2>
      </div>
    );
  }
}
