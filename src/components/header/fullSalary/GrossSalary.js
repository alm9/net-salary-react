import React from 'react';

// export default class GrossSalary extends Component {
export default function GrossSalary(props) {
  const handleChangeInput = (event) => {
    const newGrossSalary = event.target.value;
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
          value={props.grossSalary}
          onChange={handleChangeInput}
        />
      </div>
    </div>
  );
  // }
}
