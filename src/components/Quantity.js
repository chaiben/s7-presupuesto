export default function Quantity(props){
  function changeInput(i){
    const quantity = parseInt(props.formData[props.id]) + i;
    props.addProduct(
      {
        type: "text",
        name: props.id,
        value: isNaN(quantity) ? 0 : quantity 
      }
    )
  }
  return (
    <div className="quantity">
    <button onClick={() => changeInput(1)}>+</button>
    <input
        type="number"
        onChange={(event) => props.addProduct(event.target)}
        id={props.id}
        name={props.id}
        value={props.formData[props.id]}
      />
    <button onClick={() => changeInput(-1)}>-</button>
    </div>
  );
}