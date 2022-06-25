import { useState, useEffect } from "react";
import ListBudgets from "./components/ListBudgets";
import Budget from "./components/Budget";
import "./style/style.css"

export default function App(){
  const [list, setList] = useState(() => {
    const initialValue = [];

    try {
      const item = localStorage.getItem("list");
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  })

  const [formData, setFormData] = useState(() => {
    const initialValue = {
      webPage: false,
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

  function saveBudget(data){
    setList(preList => {
      const oldValues = preList.map(values => {
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
    sortBudget(sortType);
  }

  function loadBudget(index){
    
    setFormData(() => ({
      webPage: list[index].webPage ,
      campaignSeo: list[index].campaignSeo ,
      campaignAds: list[index].campaignAds ,
      numPages: list[index].numPages ,
      numLanguages: list[index].numLanguages ,
      presupuesto: list[index].presupuesto ,
      cliente: list[index].cliente 
    }));

    setList(prevList => (
      prevList.map((values,i) => ({
        ...values,
        selected: index === i ? true : false
      }))
    ))
  }
  function sortBudget(type){
    setSortType(type);
    switch (type) {
      case "sortAZ":
        sortList("presupuesto", "asc");
        break;
      case "sortZA":
        sortList("presupuesto", "desc");
        break;
      case "sortDateNew":
        sortList("date", "desc");
        break;
      case "sortDateOld":
        sortList("date", "asc");
        break;
    
      default:
        sortList("date", "desc");
        break;
    }
  }
  function sortList(field, order){
    setList(preList => {
      const newArray = [...preList];
      newArray.sort(function(a,b){
        if(order === "desc")
          return a[field] < b[field] ? 1 : -1;
        else
          return a[field] > b[field] ? 1 : -1;
      })
      return newArray;
    }
    );
  }

  useEffect(()=>{
    localStorage.setItem("sortType", JSON.stringify(sortType));
    localStorage.setItem("list", JSON.stringify(list));
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [sortType, list, formData]);

  return (
    <div className="flex">
      <section>
        <Budget 
        formData={formData} 
        setFormData={setFormData}
        saveBudget={saveBudget} />
      </section>
      {list.length > 0 && 
        <aside>
          <ListBudgets 
          list={list} 
          loadBudget={loadBudget}
          setList={setList}
          sortType={sortType}
          sortBudget={sortBudget}
          />
        </aside>
      }
    </div>
  )
}