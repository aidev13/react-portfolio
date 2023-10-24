
import { NavLink } from 'react-router-dom';
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
          <NavLink to="/contact" style={activeStyle}> Contact </NavLink>
          <NavLink to="/resume" style={activeStyle}> Resume </NavLink>
        </div>

      </nav>
    </>
  )
}

export default Nav;