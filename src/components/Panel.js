import Help from "./Help";
import Quantity from "./Quantity";

export default function Panel(props) {
  return (
    <div className="panel">
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
    </div>
  );
}