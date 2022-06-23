export default function ResumenPresupuesto(props){
  return(
    <div 
    key={`resumen${props.id}`} 
    className={`resumen ${props.index === props.selectedBudget ? "selected" : ""}`}
    onClick={props.loadBudget}
    >
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