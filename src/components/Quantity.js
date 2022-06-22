export default function Quantity(props){
  function changeInput(i){
    props.addProduct(
      {
        type: "text",
        name: props.id,
        value: parseInt(props.formData[props.id]) + i
      }
    )
  }
  return (
    <div className="quantity">
    <button onClick={() => changeInput(1)}>+</button>
    <input
        type="text"
        onChange={(event) => props.addProduct(event.target)}
        id={props.id}
        name={props.id}
        value={props.formData[props.id]}
      />
    <button onClick={() => changeInput(-1)}>-</button>
    </div>
  );
}