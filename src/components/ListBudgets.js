import SummaryBudget from "./SummaryBudget";

export default function ListBudgets(props){
  function removeAll(){
    props.setList([]);
  }
  return (
    <div>
      <div className="filters">
        <button className={props.sortType === "sortAZ" ? "selected":""} onClick={()=>props.sortBudget("sortAZ")}>A-Z</button>
        <button className={props.sortType === "sortZA" ? "selected":""} onClick={()=>props.sortBudget("sortZA")}>Z-A</button>
        <button className={props.sortType === "sortDateNew" ? "selected":""} onClick={()=>props.sortBudget("sortDateNew")} >Fecha Recientes</button>
        <button className={props.sortType === "sortDateOld" ? "selected":""} onClick={()=>props.sortBudget("sortDateOld")}>Fecha Antiguas</button>
        <button onClick={removeAll}>Limpiar</button>
      </div>
      <div className="resumenList">
        {
          props.list.map((presupuesto, index) => 
          <SummaryBudget 
          key={`rp_${index}`}
          index={index}
          data={presupuesto}
          loadBudget={()=>props.loadBudget(index)}
          selectedBudget={props.selectedBudget} />)
        }
      </div>
    </div>
  );
}