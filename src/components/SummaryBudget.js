import styled from 'styled-components';

const SummaryBox = styled.div`
position: relative;
background-color: ${props => props.selected ? "lightblue": "white"};
box-shadow: 0px 2px 6px 0px;
padding: 0.5rem;
&:hover{
  cursor: pointer;
}
& div{
  font-family: monospace;
  font-size: 0.6rem;
  border-bottom: 1px dotted #dddddd;
  padding: 0.4rem 0;
  & span{
    width: 50px;
    display: inline-block;
  }
}
`;
const DeleteBtn = styled.div`
position: absolute;
top: 0;
right: 0;
border: 1px solid #000 !important;
padding: 2px 4px !important;
cursor: pointer;
background-color: white;
`;
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
    <SummaryBox  
    key={`resumen${props.id}`} 
    selected = {props.data.selected}
    onClick={()=>props.loadBudget(props.index)}
    >
      <DeleteBtn onClick={(e)=>removeBudget(e, props.index)}>X</DeleteBtn>
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
    </SummaryBox>
  );
}