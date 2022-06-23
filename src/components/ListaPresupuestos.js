import ResumenPresupuesto from "./ResumenPresupuesto";

export default function ListaPresupuestos(props){
  function removeAll(){
    props.setLista([]);
  }
  return (
    <div>
      <div className="filters">
        <button className={props.sortType === "sortAZ" ? "selected":""} onClick={()=>props.sort("sortAZ")}>A-Z</button>
        <button className={props.sortType === "sortZA" ? "selected":""} onClick={()=>props.sort("sortZA")}>Z-A</button>
        <button className={props.sortType === "sortDateNew" ? "selected":""} onClick={()=>props.sort("sortDateNew")} >Fecha Recientes</button>
        <button className={props.sortType === "sortDateOld" ? "selected":""} onClick={()=>props.sort("sortDateOld")}>Fecha Antiguas</button>
        <button onClick={removeAll}>Limpiar</button>
      </div>
      <div className="resumenLista">
        {
          props.lista.map((presupuesto, index) => 
          <ResumenPresupuesto 
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