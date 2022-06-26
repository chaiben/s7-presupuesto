import styled from 'styled-components';

const CheckboxElement = styled.div`
  padding: 0 0 1rem 0rem;
`;

export default function Checkbox(props){
  return (
  <CheckboxElement>
      <input 
      type="checkbox" 
      id={props.id} 
      name={props.id}
      checked={props.formData[props.id]}
      onChange={(event)=>props.addProduct(event.target)}
    />
    <label htmlFor={props.id}>{props.label}</label>
  </CheckboxElement>
  );
}