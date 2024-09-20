import { Outlet, useLoaderData } from 'react-router-dom'

import './App.css'
import Header from './components/Header'
import getProducts from './products'

import { getCartData } from './cart'
import { useState } from 'react'
import Message from './components/Message'

// eslint-disable-next-line react-refresh/only-export-components
export async function loader() {
  const result = await fetch(`http://${import.meta.env.VITE_HOST}/inventory`);
  const productData = await result.json();
  
  const cartResult = await fetch(`http://${import.meta.env.VITE_HOST}/inventory/cart`);
  const cart = await cartResult.json();
  console.log(cart)
  return {productData, cart}
}

function App() {
  const { productData, cart } = useLoaderData()
  
  const [message, setMessage] = useState(false)
  
  return (
    <>
      { message ? <Message show={message} setShow={setMessage} /> : "" } 
      <Header cart={cart} />
      <Outlet context={[productData, cart, setMessage]} style={{zIndex:0}} />
    </>
  )
}

export default App
