
import Header from "../Header";

const Portfolio = () => {
    return (
        <>
            <Header title='Portfolio' />
            <div className="container">
                <div className="m-5 d-flex justify-content-center gap-5 cardCol">
                  
                    <div className="card" >
                        <img src='./images/travel-assistance.png' className="card-img-top" alt="Personal Travel Assistance" />
                        <div className="card-body">
                            <h5 className="card-title">Travel Guide</h5>
                            <p className="card-text">
                               Deployed through GitHub, this web app is a simple travel assistance guide. Developed to fetch data from third party APIs.
                            </p>
                            <a href="" className="btn btn-primary">
                            Deploy App
                            </a>
                        </div>
                    </div>

                    <div className="card" >
                        <img src="./images/guess-my-draw.png" className="card-img-top" alt="Guess My Draw Online Game" />
                        <div className="card-body">
                            <h5 className="card-title">Online Drawing Game</h5>
                            <p className="card-text">
                                Deployed through Heroku, this web app uses Socket.io to broadcast a multi-player <i>Guess My Draw</i> game across the web. 
                            </p>
                            <a href="https://guess-my-draw-47ce90c0ad48.herokuapp.com/login" className="btn btn-primary">
                                Deploy App
                            </a>
                        </div>
                    </div>

                    <div className="card" >
                        <img src="./images/weather-app.png" className="card-img-top" alt="Wetather Dashboard" />
                        <div className="card-body">
                            <h5 className="card-title"> Weather Dashboard </h5>
                            <p className="card-text">
                                Deployed through GitHub, this is a simple fetching API weather app used to gather weather infomation on a dashboard.
                            </p>
                            <a href="https://aidev13.github.io/weather-dashboard/" className="btn btn-primary ">
                            Deploy App
                            </a>
                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}

export default Portfolio;