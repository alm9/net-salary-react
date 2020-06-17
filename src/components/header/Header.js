/**
 * Cálculo de Salário Líquido
 * by: André de Lima Machado
 */

import React, { Component } from 'react';
import GrossSalary from './fullSalary/GrossSalary';
import { calculateSalaryFrom } from '../calculateSalary/salary';
import ReadOnly from './readOnly/ReadOnly';

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
    const {
      baseINSS,
      discountINSS,
      baseIRPF,
      discountIRPF,
      netSal,
    } = this.state;
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
            <ReadOnly
              className="col s3"
              result={baseINSS}
              label={'Base INSS:'}
            />
          </div>
          <div className="col s3">
            <ReadOnly
              className="col s3"
              result={discountINSS}
              label={'Desconto INSS:'}
            />
          </div>
          <div className="col s3">
            <ReadOnly
              className="col s3"
              result={baseIRPF}
              label={'Base IRPF:'}
            />
          </div>
          <div className="col s3">
            <ReadOnly
              className="col s3"
              result={discountIRPF}
              label={'Desconto IRPF:'}
            />
          </div>
        </div>

        <ReadOnly result={netSal} label={'Salário Líquido:'} />
      </div>
    );
  }
}
