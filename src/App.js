import React from "react";
import "./AppBar.css";
import logo from "./AppBar.logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Converter from "./components/Converter/Converter";
import Notfound from "./components/Notfound/Notfound";

const App = () => {
  return (
    <div className="App">
      <header>
        <nav className="AppBar">
          <img
            className="AppBar-logo"
            src={logo}
            aria-label="people"
            alt="People"
          />
          <ul>
            <li>
              <a href="/">Convertisseur </a>
            </li>
            <li>
              <a href="/ds">Déconvertisseur </a>
            </li>
            <li>
              <a href="/fggd">Super fonction trop cool </a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route index element={<Converter />} />
              <Route path="*" element={<Notfound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </main>
    </div>
  );
};

export default App;
