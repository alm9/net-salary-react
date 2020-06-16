import React, { Component } from 'react';
import Header from './components/header/Header';

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <h4 style={{ textAlign: 'center' }}>Cálculo do Salário Líquido</h4>
        <Header />
      </div>
    );
  }
}
