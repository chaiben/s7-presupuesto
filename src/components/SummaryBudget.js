export default function SummaryBudget(props){
  function removeBudget(e, i){
    e.stopPropagation();
    props.setList(prevList => {
      const newList = [];
      prevList.forEach((list, index) => {
        if(i!==index)
          newList.push({...list, selected:false})
      });
      return newList
    });
    props.newBudget();
  }
  return(
    <div 
    
    key={`resumen${props.id}`} 
    className={`resumen ${props.data.selected ? "selected" : ""}`}
    onClick={()=>props.loadBudget(props.index)}
    >
      <div className="Delete" onClick={(e)=>removeBudget(e, props.index)}>X</div>
      <div><span>Nombre:</span> {props.data.presupuesto}</div>
      <div><span>Cliente:</span> {props.data.cliente}</div>
      <div><span>Total:</span> {
      parseInt(props.data.total).toLocaleString("es-ES", {
      style: "currency",
      currency: "EUR",}) }</div>
      <div>{new Date(props.data.date).toLocaleDateString("es-ES", 
      {
        year: '2-digit', 
        month: '2-digit', 
        day: '2-digit', 
        hour: '2-digit', 
        minute: '2-digit',
        second: '2-digit',
      }
      )}</div>
    </div>
  );
}