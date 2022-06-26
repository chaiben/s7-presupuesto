import SummaryBudget from "./SummaryBudget";
import styled from 'styled-components';

const SummaryList = styled.div`
  padding-top: 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
`;
const BudgetListMenu = styled.div`
  display: flex;
  gap: 0.3rem;
  flex-wrap: wrap;
`;
const BudgetListBtn = styled.button`
  background-color: ${props => props.selected ? "papayawhip" : "none"};
`;
const NewBudget = styled.div`
  font-size: 2rem;
  padding: 3rem;
  background-color: white;
  box-shadow: 0px 2px 6px 0px;
  cursor: pointer;
`;

export default function ListBudgets(props){
  // function removeAll(){
  //   props.setList([]);
  // }
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
      <BudgetListMenu>
        <BudgetListBtn selected={props.sortType === "sortAZ"} onClick={()=>props.sortBudget("sortAZ")}>A-Z</BudgetListBtn>
        <BudgetListBtn selected={props.sortType === "sortZA"} onClick={()=>props.sortBudget("sortZA")}>Z-A</BudgetListBtn>
        <BudgetListBtn selected={props.sortType === "sortDateNew"} onClick={()=>props.sortBudget("sortDateNew")} >Fecha Recientes</BudgetListBtn>
        <BudgetListBtn selected={props.sortType === "sortDateOld"} onClick={()=>props.sortBudget("sortDateOld")}>Fecha Antiguas</BudgetListBtn>
        <input type="text" placeholder="Buscar" onChange={(e)=>props.setSearch(e.target.value)} value={props.search} />
        {/* <button onClick={removeAll}>Limpiar</button> */}
      </BudgetListMenu>
      <SummaryList>
        <NewBudget onClick={newBudget}> + </NewBudget>
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
      </SummaryList>
    </div>
  );
}