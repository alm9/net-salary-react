import React, { Component } from 'react';

export default class GrossSalary extends Component {
  handleChangeInput = (event) => {
    // console.log(event.target.value);
    const newGrossSalary = event.target.value;
    this.props.onChangeGrossSalary(newGrossSalary);
  };

  render() {
    return (
      <div>
        <label style={{ color: 'green' }}>
          <strong>Salário Bruto:</strong>
        </label>
        <div className="padding default-flex-row">
          <span className="small material-icons">edit</span>
          <input
            type="number"
            placeholder="0"
            value={this.props.grossSalary}
            onChange={this.handleChangeInput}
          />
        </div>
      </div>
    );
  }
}
