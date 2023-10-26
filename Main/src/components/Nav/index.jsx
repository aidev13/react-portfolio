
import { NavLink, Link} from 'react-router-dom';
import './nav.css'





const Nav = () => {

  const activeStyle = ({ isActive }) => ({
    color: isActive ? '#000' : 'rgb(116, 116, 116)',
  })

  return (
    <>
      <nav>
        <div>
          <div id='navBox'></div>
          <img src='./ode.png' id="logo" />
        </div>

        <div>
          <NavLink to="/" style={activeStyle}> Home </NavLink>
          <NavLink to="/about" style={activeStyle}> About Me </NavLink>
          <NavLink to="/portfolio" style={activeStyle}> Portfolio </NavLink>
          <Link to="/#contact"> Contact </Link>
          <NavLink to="https://www.linkedin.com/in/david-liebherr-489a1951"> Resume </NavLink>
        </div>

      </nav>
    </>
  )
}

export default Nav;