import { React, useState } from "react";

const From = ({ fromtoconverter }) => {
  const [value, setValue] = useState("");
  // const value = "CHF";
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <div>
      <label>From</label>
      <select
        defaultValue="EUR"
        className="browser-default"
        name="inputDevises"
        id="inputDevises"
        onClick={() => fromtoconverter(value)}
        onChange={handleChange}
      >
        <option value="EUR">EUR</option>
        <option value="CHF">CHF</option>
        <option value="GBP">GBP</option>
        <option value="USD">USD</option>
      </select>
    </div>
  );
};

export default From;
