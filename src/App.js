import './_App.scss'
import React from 'react'
import ItemDelivery from './Component/itemDelivery'
const App = () => {
  return (
    <div className='container'>
      <ItemDelivery/>
      <ItemDelivery/>
      <ItemDelivery/>
    </div>
  )
}

export default App

