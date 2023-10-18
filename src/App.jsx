import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./components/home/home.jsx";
import { Form } from "./components/form/form.jsx";
import { Delivery } from "./components/delivery/delivery.jsx";
import { Navbar } from "./components/navbar/navbar.jsx";
import { CartContext } from "./lib/context/CartContext";

function App() {
  const [cart, setCart] = useState([]);
  const [info, setInfo] = useState([]);
  
  
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

  function deletecoffee(id) {
    const indexId = cart.findIndex((item) => item.id === id);
    if (indexId > -1) {
      cart.splice(indexId, 1);
      setCart([...cart]);
    }
  }

  function saveinfo(data) {
    const infouser = {
      street: data.street,
      number:  data.number,
      population:  data.population,
      province:  data.province,
      paymentMethod: data.paymentMethod
    }
    
    setInfo(infouser);
  }

  const cartCount = cart.length

  return (
    <CartContext.Provider value={{
      cartCount,
      addToCart,
      lessUnity,
      moreUnity,
      deletecoffee
    }}>
      <Router>
        <div className="wrapper">
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route
              path="/form"
              element={
                <Form
                  cart={cart}
                  saveinfo={saveinfo}
                />
              }
            />
            <Route path="/delivery" element={<Delivery info={info}/>} />
          </Routes>
        </div>
      </Router>
    </CartContext.Provider>
  );
}

export default App;
