import styled from 'styled-components';

const QuantityBox = styled.div`
  display: inline;

  button {
    background-color: #f77753;
    border: 0;
    border-radius: 3px;
    color: white;
    padding: 5px 10px;
    margin: 0 1rem;
  }

  input {
    width: 50px;
    text-align: center;
  }
`;

export default function Quantity(props){
  function changeInput(i){
    const quantity = parseInt(props.formData[props.id]) + i;
    props.addProduct(
      {
        type: "number",
        name: props.id,
        value: isNaN(quantity) ? 0 : quantity 
      }
    )
  }
  return (
    <QuantityBox>
    <button onClick={() => changeInput(1)}>+</button>
    <input
        type="number"
        onChange={(event) => props.addProduct(event.target)}
        id={props.id}
        name={props.id}
        value={props.formData[props.id]}
      />
    <button onClick={() => changeInput(-1)}>-</button>
    </QuantityBox>
  );
}