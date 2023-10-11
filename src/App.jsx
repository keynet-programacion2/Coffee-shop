import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Home } from "./components/home/home.jsx";
import { Form } from "./components/form/form.jsx";
import { Delivery } from "./components/delivery/delivery.jsx";
import { Navbar } from "./components/navbar/navbar.jsx";

function App() {
  return (
    <Router>
    <div className="wrapper">
      <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/form" element={<Form />} />
          <Route path="/delivery" element={<Delivery />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
