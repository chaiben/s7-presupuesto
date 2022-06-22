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
      </div>
      Número de idiomas: 
        <Quantity
        id="numLanguages"
        formData = {props.formData}
        addProduct = {props.addProduct}
        />
    </div>
  );
}