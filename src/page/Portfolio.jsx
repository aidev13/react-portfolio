import Header from "../components/Header"
import PortfolioCard from "../components/Cards/PortfolioCard"



const Portfolio = () => {
  return (
    <>
      <Header>//poRtfolio</Header>
      <div className="grid_col">

        <PortfolioCard
          screen_shot="../quiz-code-ss.png"
          deploy_link="https://aidev13.github.io/code-quiz/"
          repo_link="https://github.com/aidev13/code-quiz">
        // basic JS fun, short quiz game
        </PortfolioCard>

        <PortfolioCard
          screen_shot="../trav-assit.png"
          deploy_link="https://aidev13.github.io/travel-assistance/"
          repo_link="https://github.com/aidev13/travel-assistance">
        // API calling project
        </PortfolioCard>

        <PortfolioCard
          screen_shot="../draw-game.png"
          deploy_link="https://guess-my-draw-47ce90c0ad48.herokuapp.com/login"
          repo_link="https://github.com/aidev13/guess-my-draw">
          Team Project // Game built with Node, Express, Day.js and Socket.io
        </PortfolioCard>

        <PortfolioCard
          screen_shot="../password-gen-ss.png"
          deploy_link="https://aidev13.github.io/password-generator/"
          repo_link="https://github.com/aidev13/password-generator">
          // A simple password generator
        </PortfolioCard>

      </div>
    </>
  )
}

export default Portfolio