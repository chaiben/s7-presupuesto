import Help from "./Help";
import Quantity from "./Quantity";
import styled from 'styled-components';

const PanelBox = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-direction: column;
  border: 2px solid black;
  border-radius: 1rem;
  text-align: center;
  padding-bottom: 0.7rem;
  max-width: 370px;
  margin-bottom: 1rem;
`;

export default function Panel(props) {
  return (
    <PanelBox>
      <div>
        Número de páginas: 
        <Quantity 
        id="numPages"
        formData = {props.formData}
        addProduct = {props.addProduct}
        />
        <Help text="Debes indicar cuantas paginas tendrá tu web"/>
      </div>
      <div>
      Número de idiomas: 
        <Quantity
        id="numLanguages"
        formData = {props.formData}
        addProduct = {props.addProduct}
        />
        <Help text="Debes indicar en cuantos idiomas estará disponible tu web"/>
      </div>
    </PanelBox>
  );
}