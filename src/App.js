import React, { Component } from 'react';
import Header from './components/header/Header';

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <h1 style={{ textAlign: 'center' }}>React Salário</h1>
        <Header />
      </div>
    );
  }
}
