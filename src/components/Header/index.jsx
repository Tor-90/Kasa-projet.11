import { NavLink } from 'react-router';
import logo from '../../assets/logo-kasa.svg';
import './style.scss';

function Header() {
  return (
    <header>
      <NavLink to="/">
        <img src={logo} alt="Logo Kasa" />
      </NavLink>

      <nav>
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/about">À propos</NavLink>
      </nav>
    </header>
  );
}

export default Header;