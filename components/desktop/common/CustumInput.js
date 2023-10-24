import React from "react";

function CustumInput(
  containerClassName,
  label,
  type,
  id,
  name,
  placeholder,
  onChange,
  value,
  maxLength,
  autoFocus,
  error
) {
  return (
    <div className={containerClassName}>
      <label htmlFor={id ? id : name}>{label}</label>
      <div className="input-border-div">
        <input
          type={type}
          id={id ? id : name}
          name={name}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          maxLength={maxLength}
          autoComplete="off"
          autoFocus={autoFocus}
        />
      </div>
      {error && <p>{error}</p>}
    </div>
  );
}

export default CustumInput;
