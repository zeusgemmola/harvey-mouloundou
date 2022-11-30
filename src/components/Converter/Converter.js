import React, { useEffect, useState } from "react";
import From from "./From/From";
import To from "./To/To";
import "./Converter.css";
import Amount from "./Amount";
import M from "materialize-css";
import Spinner from "../Spinner/index";

//l'appel d'api se fait a l'aide du bouton envoyer
const Converter = () => {
  const [fromvalue, setFromvalue] = useState("EUR");
  const fromtoconverter = (childdata) => {
    setFromvalue(childdata);
  };
  const totoconverter = (childdata) => {
    setTovalue(childdata);
  };
  const amounttoconverter = (childdata) => {
    setType(childdata);
  };

  const [tovalue, setTovalue] = useState("EUR");
  const [type, setType] = useState("");
  const [stateCurrency, setCurrency] = useState({
    isLoading: false,
    currency: []
  });
  const { isLoading, currency } = stateCurrency;
  const apikey = "6MXDGiKS56KPXQQ7iwbaKtqg4IGzHlghcMD5FsJJ";

  console.log(isLoading);
  const handleChangeValue = (event) => {
    setType(event.target.value);
  };
  const defFromvalue = (event) => {
    setFromvalue(event.target.value);
  };
  const defTovalue = (event) => {
    setTovalue(event.target.value);
  };
  const link =
    "https://api.currencyapi.com/v3/latest?apikey=" +
    [apikey] +
    "&base_currency=" +
    [fromvalue] +
    "&currencies=" +
    [tovalue];

  // useEffect(() => {
  const convert = async () => {
    setCurrency({ isLoading: true });
    const data = await fetch(link);
    const res = await data.json();
    setCurrency({ currency: res.data[tovalue].value, isLoading: false });
  };
  // convert();
  // }
  // , []);

  useEffect(() => {
    M.updateTextFields();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <h3>Convertisseur</h3>
        <div className="col s8">
          <div className="row">
            <div className="col s6">
              <div className="display">
                <From
                  onChange={defFromvalue}
                  fromtoconverter={fromtoconverter}
                />
              </div>
              <div className="display">
                <To onChange={defTovalue} totoconverter={totoconverter} />
              </div>
            </div>
          </div>
          <div className="row">
            <Amount
              value={type}
              onChange={handleChangeValue}
              amounttoconverter={amounttoconverter}
            />
            <button onClick={() => convert()}>Envoyer</button>
            <div className="input-field col s12">
              {isLoading === true ? (
                <Spinner />
              ) : (
                <h5>Result : {currency * type}</h5>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Converter;
