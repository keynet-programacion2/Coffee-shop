import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./components/home/home.jsx";
import { Form } from "./components/form/form.jsx";
import { Delivery } from "./components/delivery/delivery.jsx";
import { Navbar } from "./components/navbar/navbar.jsx";

function App() {
  const [cart, setCart] = useState([]);
  // useContext
  function addToCart(id, unity) {
    // setCart(oldState => {
    //   const indexId = oldState.findIndex(item =>item.id===id);
    //   if (indexId > -1) {
    //     const currentItem = oldState[indexId]
    //     currentItem.units+= unity
    //   }
    //   else {
    //     const currentItem = {
    //       id: id,
    //       units: parseFloat(unity)
    //     };

    //     oldState.push(currentItem)
    //   }

    //   return [...oldState]
    // })

    const indexId = cart.findIndex((item) => item.id === id);
    if (indexId > -1) {
      const currentItem = cart[indexId];
      currentItem.units += unity;
    } else {
      const currentItem = {
        id: id,
        units: parseFloat(unity),
      };

      cart.push(currentItem);
    }
    setCart([...cart]);
  }

  function lessUnity(id) {
    const indexId = cart.findIndex((item) => item.id === id);
    if (indexId > -1) {

        const currentItem = cart[indexId];
        if (currentItem.units >= 2) {
        currentItem.units--;
      }
    }
    setCart([...cart]);
  }

  function moreUnity(id) {
    const indexId = cart.findIndex((item) => item.id === id);
    if (indexId > -1) {
      const currentItem = cart[indexId];
      currentItem.units++;
    }
    setCart([...cart]);
  }


  return (
    <Router>
      <div className="wrapper">
        <Navbar counter={cart.length} />
        <Routes>
          <Route exact path="/" element={<Home addToCart={addToCart} />} />
          <Route
            path="/form"
            element={<Form cart={cart} less={lessUnity} more={moreUnity} />}
          />
          <Route path="/delivery" element={<Delivery />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
