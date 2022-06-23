import { Fragment } from "react";
import ResumenPresupuesto from "./ResumenPresupuesto";

export default function ListaPresupuestos(props){
    const presupuestos = 
      props.lista.map((presupuesto, index) => 
        <ResumenPresupuesto 
        key={`rp_${index}`}
        index={index}
        data={presupuesto}
        loadBudget={()=>props.loadBudget(index)}
        selectedBudget={props.selectedBudget} />
      );
  return (
    <Fragment>
      {presupuestos}
    </Fragment>
  );
}