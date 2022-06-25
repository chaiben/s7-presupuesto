import SummaryBudget from "./SummaryBudget";

export default function ListBudgets(props){
  function removeAll(){
    props.setList([]);
  }
  function newBudget(){
    props.setFormData({
      webPage: false,
      campaignSeo: false,
      campaignAds: false,
      numPages: 1,
      numLanguages: 1,
      presupuesto: "",
      cliente: ""
    })
    props.setList(prevList => 
      prevList.map(list => ({...list, selected:false}))
    )
  }
  return (
    <div>
      <div className="filters">
        <button className={props.sortType === "sortAZ" ? "selected":""} onClick={()=>props.sortBudget("sortAZ")}>A-Z</button>
        <button className={props.sortType === "sortZA" ? "selected":""} onClick={()=>props.sortBudget("sortZA")}>Z-A</button>
        <button className={props.sortType === "sortDateNew" ? "selected":""} onClick={()=>props.sortBudget("sortDateNew")} >Fecha Recientes</button>
        <button className={props.sortType === "sortDateOld" ? "selected":""} onClick={()=>props.sortBudget("sortDateOld")}>Fecha Antiguas</button>
        <input type="text" placeholder="Buscar" onChange={(e)=>props.setSearch(e.target.value)} value={props.search} />
        <button onClick={removeAll}>Limpiar</button>
      </div>
      <div className="resumenList">
        <div className="newBudget" onClick={newBudget}> + </div>
        {
          props.filteredList.map((presupuesto, index) => 
          <SummaryBudget 
          data={presupuesto}
          index={index}
          key={`rp_${index}`}
          loadBudget={()=>props.loadBudget(index)}
          newBudget={newBudget}
          selectedBudget={props.selectedBudget} 
          setList={props.setList}
          />
          )
        }
      </div>
    </div>
  );
}