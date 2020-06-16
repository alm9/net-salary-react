import React, { Component } from 'react';

export default class NetSalary extends Component {
  render() {
    return (
      <div>
        <label>Salário Líquido:</label>
        <div className="padding default-flex-row">
          <span className="small material-icons">attach_money</span>
          <input
            type="number"
            value={this.props.netSalary}
            readOnly
            placeholder="0"
          />
        </div>
      </div>
    );
  }
}
