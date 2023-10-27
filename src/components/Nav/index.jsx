
import { NavLink, Link } from 'react-router-dom';
import './nav.css'

const activeStyle = ({ isActive }) => ({
  color: isActive ? '#000' : 'rgb(116, 116, 116)',
})


// TODO: In later update, use bootstrap offcanvas navbar
const Nav = () => {
  return (
    <>
      <nav className="navbar   gap-3  sticky-top">
        <div className="container-fluid">
          <div>
            <Link to="/" className="navbar-brand" id="logo">
              <img src="./ode.png" width="100px" alt="Code Dave Logo" />
            </Link>
          </div>
          <button className="navbar-toggler me-4" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse pt-2 pb-2" id="navbarNavAltMarkup">
            <div className="navbar-nav pt-2 me-4 d-flex justify-content-end flex-row">
              <NavLink to="/" style={activeStyle}> Home </NavLink>
              <NavLink to="/about" style={activeStyle}> About Me </NavLink>
              <NavLink to="/portfolio" style={activeStyle}> Portfolio </NavLink>
              <Link to="/#contact"> Contact </Link>
              <NavLink to="https://www.linkedin.com/in/david-liebherr-489a1951"> Resume </NavLink>
            </div>
          </div>
        </div>
      </nav>

    </>
  )
}






// const Nav = () => {

//   const activeStyle = ({ isActive }) => ({
//     color: isActive ? '#000' : 'rgb(116, 116, 116)',
//   })

//   return (
//     <>
//       <nav>
//         <div>
//           <div id='navBox'></div>
//           <img src='./ode.png' id="logo" />
//         </div>

//         <div>
//           <NavLink to="/" style={activeStyle}> Home </NavLink>
//           <NavLink to="/about" style={activeStyle}> About Me </NavLink>
//           <NavLink to="/portfolio" style={activeStyle}> Portfolio </NavLink>
//           <Link to="/#contact"> Contact </Link>
//           <NavLink to="https://www.linkedin.com/in/david-liebherr-489a1951"> Resume </NavLink>
//         </div>

//       </nav>
//     </>
//   )
// }

export default Nav;