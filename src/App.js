import React, { useState } from 'react'
import Form from './components/Form'

export default function App() {
  const [formData, setFormData] = useState(
    {
      paginaWeb: false,
      campaniaSeo: false,
      campaniaAds: false
    }
  )

  const totalPrice = 
      (formData.paginaWeb ? 500 : 0) +
      (formData.campaniaSeo ? 300 : 0) +
      (formData.campaniaAds ? 200 : 0);

  function addProduct(id){
    setFormData(preFormData => ({
      ...preFormData,
      [id]: !preFormData[id]
    })
    )
  }

  return (
    <div>
      <div>¿Qué quieres hacer?</div>
      <Form formData={formData} addProduct={addProduct} />
      <div>Total: {totalPrice} €</div>
    </div>
  )
};