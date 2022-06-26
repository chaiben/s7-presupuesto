import tutorialImg from '../assets/tutorial.jpg';
import styled from 'styled-components';

const Img = styled.img`
  border: 1px solid black;
  padding: 1rem;
  margin: 1rem auto;
  max-width: 500px;
`;
export default function Home(){
  return (
    <div className="container">
      <h1>Bienvenido</h1>
      <div>Aplicación para calcular el presupuesto de una página web.</div>
      <Img src={tutorialImg} alt="Tutorial" />
      <div>Como usar:</div>
      <ol>
        <li>Selecciona las opciones que deseadas para tu web.</li>
        <li>Total presupuestado.</li>
        <li>Introduce un nombre para tu presupuesto, el nombre del cliente y guarda.</li>
        <li>Aqui podrás ver un resumen de tu presupuesto.</li>
        <li>Puedes ordenar los presupuestos guardados alfabeticamente, por fecha o utilizar el buscador.</li>
        <li>Presiona aqui para crear un presupuesto nuevo.</li>
        <li>En azul sale el presupuesto seleccionado. Recuerda, si presionas en "guardar" sobrescribirás la información.</li>
        <li>La "x" elimina el presupuesto.</li>
      </ol>
      <div>Haz click en "Presupuestos" para empezar a crear tus presupuestos.</div>
    </div>
  );
}