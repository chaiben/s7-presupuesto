import React, { Fragment } from 'react'
import Form from './Form'
import "../style/style.css"

export default function Presupuesto(props) {
  const totalPrice = 
  (props.formData.paginaWeb ? 
    500 + props.formData.numLanguages * props.formData.numPages * 30 : 
    0
  ) +
  (props.formData.campaignSeo ? 300 : 0) +
  (props.formData.campaignAds ? 200 : 0);

  return (
      <Fragment>
        <h1>¿Qué quieres hacer?</h1>
        <Form formData={props.formData} addProduct={props.addProduct} />
        <div>Total: {parseInt(totalPrice).toLocaleString("es-ES", {
      style: "currency",
      currency: "EUR",})}</div>
        <hr />
        <input 
          value={props.formData["presupuesto"]} 
          onChange={(event) => props.addProduct(event.target)} 
          type="text" 
          name="presupuesto" 
          placeholder='Titulo presupuesto'></input>
        <input 
          value={props.formData["cliente"]} 
          onChange={(event) => props.addProduct(event.target)} 
          type="text" 
          name="cliente" 
          placeholder='Nombre cliente'></input>
        <button onClick={()=>props.saveBudget(
          {
            ...props.formData, 
            total: totalPrice
          }
          )}>Guardar</button>
      </Fragment>
  )
};