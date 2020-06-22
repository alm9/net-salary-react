import React from 'react';
import { formatNumber, formatPercentage } from '../../../helpers/formatHelpers';

export default function ReadOnly(props) {
  let { label, result, percentage } = props;

  if (percentage > 0) {
    percentage = formatPercentage(percentage) + '%';
    result = `${formatNumber(result)} (${percentage})`;
  } else {
    // console.log(percentage);

    result = formatNumber(result);
  }
  // console.log(percentage);

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
