import Header from "../components/Header"
import ProjectCard from "../components/Cards/ProjectCard"
import ProficiencyCard from "../components/Cards/proficiencyCard"


const Portfolio = () => {
  return (
    <>
      <Header>//poRtfolio</Header>
      <div className="grid_col">

        <ProjectCard
          screen_shot="../quiz-code-ss.png"
          deploy_link="https://aidev13.github.io/code-quiz/"
          repo_link="https://github.com/aidev13/code-quiz">
        // basic JS fun, short quiz game
        </ProjectCard>

        <ProjectCard
          screen_shot="../trav-assit.png"
          deploy_link="https://aidev13.github.io/travel-assistance/"
          repo_link="https://github.com/aidev13/travel-assistance">
        // API calling project
        </ProjectCard>

        <ProjectCard
          screen_shot="../draw-game.png"
          deploy_link="https://guess-my-draw-47ce90c0ad48.herokuapp.com/login"
          repo_link="https://github.com/aidev13/guess-my-draw">
          Team Project // Game built with Node, Express, Day.js and Socket.io
        </ProjectCard>

        <ProjectCard
          screen_shot="../password-gen-ss.png"
          deploy_link="https://aidev13.github.io/password-generator/"
          repo_link="https://github.com/aidev13/password-generator">
          // A simple password generator
        </ProjectCard>

      </div>

      <section className='mt-3'>

        <ProficiencyCard />

      </section>
    </>
  )
}

export default Portfolio