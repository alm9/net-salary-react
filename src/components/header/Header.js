/**
 * Cálculo de Salário Líquido
 * by: André de Lima Machado
 */

import React, { Component } from 'react';
import NetSalary from './salary/net/NetSalary';
import GrossSalary from './salary/gross/GrossSalary';

export default class ProjetoBase extends Component {
  constructor() {
    super();

    this.state = {
      grossSal: 1000,
      netSal: 111,
    };
  }

  handleChangeGrossSalary = (valueGrossSal) => {
    // console.log(value);
    this.setState({
      // grossSal: value,
      netSal: valueGrossSal,
    });
  };

  render() {
    return (
      <div>
        <GrossSalary
          grossSalary={this.grossSal}
          onChangeGrossSalary={this.handleChangeGrossSalary}
        />

        <NetSalary netSalary={this.state.netSal} />
      </div>
    );
  }
}
