import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Home } from './components/home/home.jsx'
import { Form } from './components/form/form.jsx'
import { Delivery } from './components/delivery/delivery.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Home /> */}
    {/* <Form /> */}
    <Delivery />
  </React.StrictMode>,
)
