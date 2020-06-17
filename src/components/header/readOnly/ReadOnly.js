import React, { Component } from 'react';

export default class ReadOnly extends Component {
  render() {
    return (
      <div>
        <label>{this.props.label}</label>
        <div className="padding default-flex-row">
          <span className="small material-icons">attach_money</span>
          <input
            type="text"
            value={this.props.result}
            readOnly
            placeholder="0"
          />
        </div>
      </div>
    );
  }
}
