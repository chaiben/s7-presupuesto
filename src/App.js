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

  const [sortType, setSortType] = useState(() => {
    const initialValue = "sortDateNew";

    try {
      const item = localStorage.getItem("sortType");
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  })

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
    setLista(preLista => {
      const oldValues = preLista.map(values => {
        return {
          ...values,
          selected: false
        }
      });

      return [
        {
          ...data, 
          date: new Date().toUTCString(),
          selected: true
        },
        ...oldValues
      ]
    })
    sort(sortType);
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
    }));

    setLista(prevLista => (
      prevLista.map((values,i) => ({
        ...values,
        selected: index === i ? true : false
      }))
    ))
  }
  function sort(type){
    setSortType(type);
    switch (type) {
      case "sortAZ":
        sortAZ();
        break;
      case "sortZA":
        sortZA();
        break;
      case "sortDateNew":
        sortDateNew();
        break;
      case "sortDateOld":
        sortDateOld();
        break;
    
      default:
        sortDateNew();
        break;
    }
  }
  function sortAZ(){
    setLista(preLista => {
      const newArray = [...preLista];
      newArray.sort(function(a,b){
        if(a.presupuesto > b.presupuesto)
          return 1;
          else
          return -1;
      })
      return newArray;
    }
    );
  }
  function sortZA(){
    setLista(preLista => {
      const newArray = [...preLista];
      newArray.sort(function(a,b){
        if(a.presupuesto < b.presupuesto)
          return 1;
          else
          return -1;
      })
      return newArray;
    }
    );
  }
  function sortDateNew(){
    setLista(preLista => {
      const newArray = [...preLista];
      newArray.sort(function(a,b){
        if(a.date < b.date)
          return 1;
          else
          return -1;
      })
      return newArray;
    }
    );
  }
  function sortDateOld(){
    setLista(preLista => {
      const newArray = [...preLista];
      newArray.sort(function(a,b){
        if(a.date > b.date)
          return 1;
          else
          return -1;
      })
      return newArray;
    }
    );
  }
  useEffect(()=>{
    localStorage.setItem("lista", JSON.stringify(sortType));
    localStorage.setItem("lista", JSON.stringify(lista));
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [sortType, lista, formData]);

  return (
    <div className="flex">
      <section>
        <Presupuesto 
        formData={formData} 
        addProduct={addProduct} 
        saveBudget={saveBudget} />
      </section>
      {lista.length > 0 && 
        <aside>
          <ListaPresupuestos 
          lista={lista} 
          loadBudget={loadBudget}
          setLista={setLista}
          sortType={sortType}
          sort={sort}
          />
        </aside>
      }
    </div>
  )
}