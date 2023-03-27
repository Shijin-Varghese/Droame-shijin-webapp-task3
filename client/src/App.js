import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/Header.js";
import Home from "./components/Home.js";
import Form from "./components/Form.js";
import Showcustomer from "./components/Showcustomer";
import Edit from "./components/Edit";
function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/detail" element={<Form />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/show" element={<Showcustomer />}></Route>\
          <Route path={`/show/:id`} element={<Edit />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
