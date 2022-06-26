import { useState, useEffect } from "react";
import ListBudgets from "./components/ListBudgets";
import Budget from "./components/Budget";
import "./style/style.css"
import {useSearchParams} from "react-router-dom";

function validPositiveNumbers(value){
  if(
    value && 
    !value.toString().match(/^[0-9 ]+$/)
    )
    return "";
  
  if(parseInt(value) < 0)
    return "";
  
    return parseInt(value);
}

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

  const [search, setSearch] = useState(() => {
    const initialValue = [];

    try {
      const item = localStorage.getItem("search");
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  })

  const [searchParams, setSearchParams] = useSearchParams();

  const [formData, setFormData] = useState(() => {
    const initialValue = {
      webPage: searchParams.get("webPage") === "true" ? true : false,
      campaignSeo: searchParams.get("campaignSeo") === "true" ? true : false,
      campaignAds: searchParams.get("campaignAds") === "true" ? true : false,
      numPages: searchParams.get("numPages") ? validPositiveNumbers(searchParams.get("numPages")) : 1,
      numLanguages: searchParams.get("numLanguages") ? validPositiveNumbers(searchParams.get("numLanguages")) : 1,
      presupuesto: searchParams.get("presupuesto") ? searchParams.get("presupuesto") : "",
      cliente: searchParams.get("cliente") ? searchParams.get("cliente") : ""
    }

    if(searchParams.get("webPage"))
      return initialValue;

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
    setList(prevList => {
      var selectedIndex = false;
      const oldValues = prevList.map((values, index) => {
        if(values.selected === true)
          selectedIndex = index;
        return {
          ...values,
          selected: false
        }
      });
      if(selectedIndex === false)
        return [
          {
            ...data, 
            date: new Date().toUTCString(),
            selected: true
          },
          ...oldValues
        ]
      else{
        prevList[selectedIndex] = {
          ...data, 
          date: new Date().toUTCString(),
          selected: true
        }
        return prevList;
      }

    })
    sortBudget(sortType);
  }

  function loadBudget(index){
    setFormData(() => ({
      webPage: filteredList[index].webPage ,
      campaignSeo: filteredList[index].campaignSeo ,
      campaignAds: filteredList[index].campaignAds ,
      numPages: filteredList[index].numPages ,
      numLanguages: filteredList[index].numLanguages ,
      presupuesto: filteredList[index].presupuesto ,
      cliente: filteredList[index].cliente 
    }));

    setList(prevList => (
      prevList.map((values,i) => ({
        ...values,
        selected: values === filteredList[index] ? true : false
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

  const filteredList = list.filter(
    (value) => value.presupuesto.toUpperCase().search(search.toUpperCase()) !== -1
  )

  useEffect(()=>{
    localStorage.setItem("formData", JSON.stringify(formData));
    localStorage.setItem("list", JSON.stringify(list));
    localStorage.setItem("search", JSON.stringify(search));
    localStorage.setItem("sortType", JSON.stringify(sortType));
  }, [formData, search, sortType, list]);

  useEffect(()=>{
    setSearchParams(formData);
  }, [setSearchParams, formData]);

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
          filteredList={filteredList}
          list={list} 
          loadBudget={loadBudget}
          search={search}
          setFormData={setFormData}
          setList={setList}
          setSearch={setSearch}
          sortBudget={sortBudget}
          sortType={sortType}
          />
        </aside>
      }
    </div>
  )
}