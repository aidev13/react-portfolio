import "./header.css"

const Header = props => {
    return (
        <>
            <div id="container">
                <h1>{props.children}</h1>
            </div>
        </>
    )
}

export default Header;