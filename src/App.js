import { useState, useEffect } from "react";
import ListaPresupuestos from "./components/ListaPresupuestos";
import Presupuesto from "./components/Presupuesto";
import "./style/style.css"

export default function App(){
  const [lista, setLista] = useState(() => {
    const initialValue = [];

    try {
      const item = localStorage.getItem("lista");
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  })
  useEffect(()=>{
    localStorage.setItem("lista", JSON.stringify(lista));
  }, [lista])
  
  const [selectedBudget, setSelectedBudget] = useState(() => {
    const initialValue = 0

    try {
      const item = localStorage.getItem("selectedBudget");
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  })
  useEffect(()=>{
    localStorage.setItem("selectedBudget", JSON.stringify(selectedBudget));
  }, [selectedBudget])

  const [formData, setFormData] = useState(() => {
    const initialValue = {
      paginaWeb: false,
      campaignSeo: false,
      campaignAds: false,
      numPages: 1,
      numLanguages: 1,
      presupuesto: "",
      cliente: ""
    }

    try {
      const item = localStorage.getItem("formData");
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  })

  useEffect(()=>{
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [formData])

  function addProduct(data){
    const {type, name, value} = data;

    if(
      type === "number" && 
      value && 
      !value.toString().match(/^[0-9 ]+$/)
      )
      return;
    
    if(type === "number" && parseInt(value) < 0)
      return;

    setFormData(preFormData => ({
      ...preFormData,
      [name]: type === "checkbox" ? !preFormData[name] : value
    })
    )
  }

  function saveBudget(data){
    setLista(preLista => [
     {...data, 
      date: new Date().toUTCString()
     },
     ...preLista
    ])
    setSelectedBudget(0);
  }

  function loadBudget(index){
    setFormData(() => ({
      paginaWeb: lista[index].paginaWeb ,
      campaignSeo: lista[index].campaignSeo ,
      campaignAds: lista[index].campaignAds ,
      numPages: lista[index].numPages ,
      numLanguages: lista[index].numLanguages ,
      presupuesto: lista[index].presupuesto ,
      cliente: lista[index].cliente 
    }))
    setSelectedBudget(index);
  }

  return (
    <div className="flex">
      <section><Presupuesto formData={formData} addProduct={addProduct} saveBudget={saveBudget} /></section>
      {lista.length > 0 && <aside><ListaPresupuestos lista={lista} loadBudget={loadBudget} selectedBudget={selectedBudget} /></aside>}
    </div>
  )
}