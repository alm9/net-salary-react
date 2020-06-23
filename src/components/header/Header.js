/**
 * Cálculo de Salário Líquido
 * by: André de Lima Machado
 */

import React, { useState } from 'react';
import GrossSalary from './fullSalary/GrossSalary';
import { calculateSalaryFrom } from '../calculateSalary/salary';
import ReadOnly from './readOnly/ReadOnly';
import AllBars from './bars/AllBars';

// export default class ProjetoBase extends Component {
export default function ProjetoBase() {
  const [grossSal, setGrossSal] = useState('');
  const [baseINSS, setBaseINSS] = useState(0);
  const [discountINSS, setDiscountINSS] = useState(0);
  const [percentageINSS, setPercentageINSS] = useState(0);
  const [baseIRPF, setBaseIRPF] = useState(0);
  const [discountIRPF, setDiscountIRPF] = useState(0);
  const [percentageIRPF, setPercentageIRPF] = useState(0);
  const [netSal, setNetSal] = useState(0);

  // constructor() {
  //   super();
  //   this.state = {
  //     grossSal: '',
  //     baseINSS: 0,
  //     discountINSS: 0,
  //     percentageINSS: 0,
  //     baseIRPF: 0,
  //     discountIRPF: 0,
  //     percentageIRPF: 0,
  //     netSal: 0,
  //   };
  // }

  const handleChangeGrossSalary = (newValueGrossSal) => {
    const {
      baseINSS,
      discountINSS,
      percentageINSS,
      baseIRPF,
      discountIRPF,
      percentageIRPF,
      netSalary,
    } = calculateSalaryFrom(newValueGrossSal);

    setGrossSal(newValueGrossSal);
    setBaseINSS(baseINSS);
    setBaseIRPF(baseIRPF);
    setDiscountINSS(discountINSS);
    setDiscountIRPF(discountIRPF);
    setNetSal(netSalary);
    setPercentageINSS(percentageINSS);
    setPercentageIRPF(percentageIRPF);

    //   this.setState({
    //     grossSal: newValueGrossSal,
    //     baseINSS,
    //     discountINSS,
    //     percentageINSS,
    //     baseIRPF,
    //     discountIRPF,
    //     percentageIRPF,
    //     netSal: netSalary,
    //   });
  };

  // render() {
  // const {
  //   grossSal,
  //   baseINSS,
  //   discountINSS,
  //   percentageINSS,
  //   baseIRPF,
  //   discountIRPF,
  //   percentageIRPF,
  //   netSal,
  // } = this.state;

  return (
    <div>
      {/* input: */}
      <GrossSalary
        grossSalary={grossSal}
        onChangeGrossSalary={handleChangeGrossSalary}
      />
      {/* outputs: */}
      <div className="row">
        <div className="col s3">
          <ReadOnly className="col s3" result={baseINSS} label={'Base INSS:'} />
        </div>
        <div className="col s3">
          <ReadOnly
            className="col s3"
            result={discountINSS}
            percentage={percentageINSS}
            label={'Desconto INSS:'}
          />
        </div>
        <div className="col s3">
          <ReadOnly className="col s3" result={baseIRPF} label={'Base IRPF:'} />
        </div>
        <div className="col s3">
          <ReadOnly
            className="col s3"
            result={discountIRPF}
            percentage={percentageIRPF}
            label={'Desconto IRPF:'}
          />
        </div>
      </div>
      <ReadOnly
        result={netSal}
        grossSalary={grossSal}
        label={'Salário Líquido:'}
      />
      <AllBars barINSS={discountINSS} barIRPF={discountIRPF} barLiq={netSal} />
    </div>
  );
  // }
}
