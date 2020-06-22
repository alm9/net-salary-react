import React from 'react';
import Bar from './Bar';

// export default class AllBars extends Component {
export default function AllBars(props) {
  // render() {
  let { barINSS, barIRPF, barLiq } = props;

  const soma = barINSS + barIRPF + barLiq;
  const x = soma / 100.0;

  [barINSS, barIRPF, barLiq] = [barINSS / x, barIRPF / x, barLiq / x];

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Bar value={barINSS} color="orange" />
      <Bar value={barIRPF} color="red" />
      <Bar value={barLiq} color="green" />
    </div>
  );
  // }
}
