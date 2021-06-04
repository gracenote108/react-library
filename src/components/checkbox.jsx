import React, { Component } from "react";

class Checkbox extends Component {
  render() {
    const { id, onToggleCheckbox, isChecked, name, label, reference } =
      this.props;
    return (
      <div className="form-check form-check-inline ms-2 mt-2">
        <label className="form-check-label" htmlFor={name}>
          {label}{" "}
        </label>
        <input
          className="form-check-input"
          id={id}
          type="checkbox"
          onChange={() => onToggleCheckbox(reference)}
          key={name}
          name={name}
          checked={isChecked}
        />
      </div>
    );
  }
}

export default Checkbox;
