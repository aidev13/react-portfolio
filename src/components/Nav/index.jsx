import { NavLink } from 'react-router-dom';

import "./nav.css";

const activeStyle = ({ isActive }) => ({
  color: isActive ? '#000' : 'rgb(116, 116, 116)',
})




const Nav = () => {
  return (
    <>
      <nav  >
        <div className="bar">
        <NavLink to="/"  style={activeStyle} className="line"> About Me </NavLink>
        <NavLink to="/portfolio" style={activeStyle} className="line"> Portfolio </NavLink>
        <NavLink to="/contact" style={activeStyle} className="line"> Contact </NavLink>
        <NavLink to="/resume" style={activeStyle} className="line"> Resume </NavLink>
        <NavLink to="https://www.Linkedin.com/in/david-liebherr-489a1951" style={activeStyle} className="line"> LinkedIn </NavLink>

        </div>
      </nav>
    </>
  )
}


export default Nav;
