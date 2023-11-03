

const PortfolioCard = (props) => {

  const cardSize = {
    width:"18rem"
  }
  const btnStyle = {
    margin: "3px",
    padding: '5px',
    backgroundColor: 'white',
    borderRadius: "5px",
    border: "1px solid black",
    textDecoration: 'none',
    color: "black",
    fontFamily: 'monospace'
  }

  return (
    <>
      <div className="card mx-auto" style={cardSize}>
        <img src="https://placehold.co/200x150/orange/white" className="card-img-top" alt="..." />
          <div className="card-body">
            <p className="card-text">{props.children}</p>
            <div className="d-flex justify-content-end">
              <a href="https://aidev13.github.io/code-quiz/" style={btnStyle}>Deploy</a>
              <a href="https://github.com/aidev13/code-quiz" style={btnStyle}>src Code</a>
            </div>
          </div>
      </div>
    </>
  )
}

export default PortfolioCard;