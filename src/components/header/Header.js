/**
 * Cálculo de Salário Líquido
 * by: André de Lima Machado
 */

import React, { Component } from 'react';
import NetSalary from './salary/net/NetSalary';
import GrossSalary from './salary/gross/GrossSalary';
import { calculateSalaryFrom } from '../calculateSalary/salary';
import BaseINSS from './inss/BaseINSS';
import DescontoINSS from './inss/DescontoINSS';
import BaseIRPF from './irpf/BaseIRPF';
import DescontoIRPF from './irpf/DescontoIRPF';

export default class ProjetoBase extends Component {
  constructor() {
    super();

    this.state = {
      grossSal: 1000,
      baseINSS: 0,
      discountINSS: 0,
      baseIRPF: 0,
      discountIRPF: 0,
      netSal: 111,
    };
  }

  handleChangeGrossSalary = (newValueGrossSal) => {
    // console.log(valueGrossSal);
    const {
      baseINSS,
      discountINSS,
      baseIRPF,
      discountIRPF,
      netSalary,
    } = calculateSalaryFrom(newValueGrossSal);

    console.log(discountIRPF);

    this.setState({
      // grossSal: value,
      baseINSS,
      discountINSS,
      baseIRPF,
      discountIRPF,
      netSal: netSalary,
    });
  };

  render() {
    return (
      <div>
        {/* input: */}
        <GrossSalary
          grossSalary={this.grossSal}
          onChangeGrossSalary={this.handleChangeGrossSalary}
        />
        {/* outputs: */}
        <div className="row">
          <div className="col s3">
            <BaseINSS result={this.state.baseINSS} />
          </div>
          <div className="col s3">
            <DescontoINSS result={this.state.discountINSS} />
          </div>
          <div className="col s3">
            <BaseIRPF result={this.state.baseIRPF} />
          </div>
          <div className="col s3">
            <DescontoIRPF result={this.state.discountIRPF} />
          </div>
        </div>

        <NetSalary netSalary={this.state.netSal} />
      </div>
    );
  }
}
