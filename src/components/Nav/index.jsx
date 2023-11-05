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
          <img src="./ode.png" alt="Code Dave Logo" className='logo' />

          <NavLink to="/" style={activeStyle} className="line link_style"> About Me </NavLink>

          <NavLink to="/portfolio" style={activeStyle} className="line link_style"> Portfolio </NavLink>

          <NavLink to="/contact" style={activeStyle} className="line link_style"> Contact </NavLink>

          <NavLink to="/resume" style={activeStyle} className="line link_style"> Resume </NavLink>

          <NavLink to="https://www.Linkedin.com/in/david-liebherr-489a1951" style={activeStyle} className="line link_style" target="_blank"> LinkedIn </NavLink>

        </div>
      </nav>
    </>
  )
}


export default Nav;
