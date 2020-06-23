import React from 'react';
const maxNumber = '9999999999.99';
const maxLengthSalary = maxNumber.length;

// export default class GrossSalary extends Component {
export default function GrossSalary(props) {
  const handleChangeInput = (event) => {
    let newGrossSalary = event.target.value;
    if (newGrossSalary.length > maxLengthSalary) {
      newGrossSalary = maxNumber;
    }

    props.onChangeGrossSalary(newGrossSalary);
  };

  // render() {
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
          min="0"
          max={maxNumber}
          value={props.grossSalary}
          onChange={handleChangeInput}
        />
      </div>
    </div>
  );
  // }
}
