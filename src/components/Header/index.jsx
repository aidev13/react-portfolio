import './header.css'

const Header = (props) => {
  return (
    <header className='headerdiv'>
      <h1 className='title'>
        {props.children}
      </h1> 
    </header>
  )
}

export default Header;