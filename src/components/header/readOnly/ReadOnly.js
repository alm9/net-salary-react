import React, { Component } from 'react';

export default class ReadOnly extends Component {
  render() {
    let { grossSalary, label, result } = this.props;
    if (grossSalary !== undefined)
      result = `${result} (${(result * 100) / grossSalary}%)`;
    return (
      <div>
        <label>{label}</label>
        <div className="padding default-flex-row">
          <span className="small material-icons">attach_money</span>
          <input type="text" value={result} readOnly placeholder="0" />
        </div>
      </div>
    );
  }
}
