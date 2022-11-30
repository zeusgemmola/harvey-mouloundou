import { React, useState } from "react";
const To = ({ totoconverter }) => {
  const [value, setValue] = useState("");
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <div>
      <label>To</label>
      <select
        defaultValue="EUR"
        className="browser-default"
        name="outputDevises"
        id="outputDevises"
        onChange={handleChange}
        onClick={() => totoconverter(value)}
      >
        <option value="EUR">EUR</option>
        <option value="CHF">CHF</option>
        <option value="GBP">GBP</option>
        <option value="USD">USD</option>
      </select>
    </div>
  );
};

export default To;
