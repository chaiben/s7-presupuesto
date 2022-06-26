import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  background-color: #020070;
  box-shadow: 0px 4px 9px 0px;
  a {
    color: #000000;
    text-decoration: none;
    border: 1px solid #000000;
    border-radius: 0.5rem;
    padding: 0.5rem 2rem;
    background-color: white;
  }
  ul{
    display: flex;
    flex-direction: row;
    gap: 1rem;
    padding: 0.5rem 0;
  }
  ul li{
    list-style-type: none;
  }
  ul li .active{
    font-weight: bold;
    color: #f77753;
    background-color: #efefef;
  }
`;

export default function Nav(){
  return (
    <NavBox>
      <ul>
        <li><NavLink to="/">Inicio</NavLink></li>
        <li><NavLink to="/presupuestos">Presupuesto Pagina Web</NavLink></li>
      </ul>
    </NavBox>
  );
}