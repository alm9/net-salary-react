import React, { Component } from 'react';
import { formatNumber } from '../../../helpers/formatHelpers';

export default class ReadOnly extends Component {
  render() {
    let { grossSalary, label, result } = this.props;
    if (grossSalary !== undefined)
      result = `${formatNumber(result)} (${formatNumber(
        (result * 100) / grossSalary
      )}%)`;
    else result = formatNumber(result);
    return (
      <div>
        <label className="blue-text text-darken-2">{label}</label>
        <div className="padding default-flex-row">
          <span
            style={{ color: 'rgba(231, 223, 223, 0.836)' }}
            className="small material-icons"
          >
            attach_money
          </span>

          <input type="text" value={result} readOnly placeholder="0" />
        </div>
      </div>
    );
  }
}
