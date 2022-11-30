import React, { useState } from "react";

const Amount = ({ amounttoconverter }) => {
  const [number, setNumber] = useState("");
  const [value, setValue] = useState();
  function isNumber(str) {
    if (str.trim() === "") {
      return false;
    }

    return !isNaN(str);
  }

  const handleChange = (event) => {
    if (isNumber(event.target.value)) {
      setNumber(true);
      setValue(event.target.value);
    } else {
      setNumber(false);
    }
  };
  return (
    <div className="input-field col s12">
      {number === true ? (
        <input
          // defaultValue = "0"
          id="amount"
          type="text"
          className="valid"
          onChange={handleChange}
          onClick={() => amounttoconverter(value)}
        />
      ) : number === false ? (
        <input
          // defaultValue = "0"
          id="amount"
          type="text"
          className="invalid"
          onChange={handleChange}
          onClick={() => amounttoconverter(value)}
        />
      ) : (
        <input id="amount" type="text" className="" onChange={handleChange} />
      )}

      <span
        className="helper-text"
        data-error="Erreur"
        data-success="Valide"
      ></span>
      <label htmlFor="amount">Montant</label>
    </div>
  );
};
export default Amount;
