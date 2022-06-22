import React, { useState } from 'react'
import Form from './components/Form'
import "./style/style.css"

export default function App() {
  const [formData, setFormData] = useState(
    {
      paginaWeb: false,
      campaniaSeo: false,
      campaniaAds: false,
      numPages: 1,
      numLanguages: 1
    }
  )

  const totalPrice = 
      (formData.paginaWeb ? 
        500 + formData.numLanguages * formData.numPages * 30 : 
        0
      ) +
      (formData.campaniaSeo ? 300 : 0) +
      (formData.campaniaAds ? 200 : 0);

  function addProduct(data){
    const {type, name, value} = data;

    if(
      type !== "checkbox" && 
      value && 
      !value.toString().match(/^[0-9 ]+$/)
      )
      return;
    
    if(parseInt(value) < 0)
      return;

    setFormData(preFormData => ({
      ...preFormData,
      [name]: type === "checkbox" ? !preFormData[name] : value
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