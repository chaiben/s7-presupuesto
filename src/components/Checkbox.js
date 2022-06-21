export default function Checkbox(props){
  return (
  <div>
      <input 
      type="checkbox" 
      id={props.id} 
      name={props.id}
      checked={props.formData[props.id]}
      onChange={(event)=>props.addProduct(event.target)}
    />
    <label htmlFor={props.id}>{props.label}</label>
  </div>
  );
}