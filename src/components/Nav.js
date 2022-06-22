import { NavLink } from 'react-router-dom';

export default function Nav(){
  return (
    <nav>
      <ul>
        <li><NavLink to="/">Inicio</NavLink></li>
        <li><NavLink to="/presupuesto">Solicitar Presupuesto</NavLink></li>
      </ul>
    </nav>
  );
}