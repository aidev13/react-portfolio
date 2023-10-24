
import { Link } from 'react-router-dom';
import './nav.css'

const Nav = () => {
  return (
    <>
      <nav>
        <div>
          <div id='navBox'></div>
          <img src='./ode.png' id="logo" />
        </div>

        <div>
          <Link to="/"> Home </Link>
          <Link to="/about"> About Me </Link>
          <Link to="/portfolio"> Portfolio </Link>
          <Link to="/contact"> Contact </Link>
          <Link to="/resume"> Resume </Link>
        </div>

      </nav>
    </>
  )
}

export default Nav;