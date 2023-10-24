
import { NavLink } from 'react-router-dom';
import './nav.css'





const Nav = () => {

  // const activeStyle = () => {({ isActive }) => ({
  //   color: isActive ? '#fff' : '#545e6f',
  //   background: isActive ? '#7600dc' : '#f0f0f0',
  // })}

  return (
    <>
      <nav>
        <div>
          <div id='navBox'></div>
          <img src='./ode.png' id="logo" />
        </div>

        <div>
          <NavLink to="/" style={({ isActive }) => ({
            color: isActive ? '#000' : 'rgb(143, 143, 143)',
          })}> Home </NavLink>
          <NavLink to="/about" style={({ isActive }) => ({
            color: isActive ? '#000' : 'rgb(143, 143, 143)',
          })}> About Me </NavLink>
          <NavLink to="/portfolio" style={({ isActive }) => ({
            color: isActive ? '#000' : 'rgb(143, 143, 143)',
          })}> Portfolio </NavLink>
          <NavLink to="/contact" style={({ isActive }) => ({
            color: isActive ? '#000' : 'rgb(143, 143, 143)',
          })}> Contact </NavLink>
          <NavLink to="/resume" style={({ isActive }) => ({
            color: isActive ? '#000' : 'rgb(143, 143, 143)',
          })}> Resume </NavLink>
        </div>

      </nav>
    </>
  )
}

export default Nav;