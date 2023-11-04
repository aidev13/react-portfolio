

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
        <img src={props.screen_shot} className="card-img-top" alt="..." />
          <div className="card-body">
            <p className="card-text">{props.children}</p>
            <div className="d-flex justify-content-end">
              <a href={props.deploy_link} 
              style={btnStyle}
              className="link_style" >Deploy</a>

              <a href={props.repo_link} 
              style={btnStyle}
              className="link_style" >src Code</a>
            </div>
          </div>
      </div>
    </>
  )
}

export default PortfolioCard;