import Header from "../components/Header"
import ProjectCard from "../components/Cards/ProjectCard"
import ProficiencyCard from "../components/Cards/proficiencyCard"
import LinkCard from "../components/Cards/linkCards"


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

      <div className="m-5 centerItBaby">
         <div className="d-flex justify-content-center m-4">
            <h2>Some of my previous work!</h2>
         </div>

         <LinkCard><a href="https://www.coreyoil.com/" className="linkDec">Corey Oil</a></LinkCard>
         <LinkCard><a href="https://www.djctax.com/" className="linkDec">DJC Tax</a></LinkCard>
         <LinkCard><a href="https://www.aboveaveragemoving.com/" className="linkDec">Above Average Moving</a></LinkCard>
         <LinkCard><a href="https://www.rockrivercontracting.com/" className="linkDec">Rock River Contracting</a></LinkCard>
         <LinkCard><a href="https://www.brownhvac.com/" className="linkDec">Brown Hvac</a></LinkCard>
         <LinkCard><a href="https://www.graylawfirm.info/" className="linkDec">Gray Law</a></LinkCard>
         <LinkCard><a href="https://www.pribnowsmapleinn.com/" className="linkDec">Maple Inn</a></LinkCard>
         <LinkCard><a href="https://www.americandoorco.info/" className="linkDec">American Door</a></LinkCard>
         <LinkCard><a href="https://asdarefuse.com/" className="linkDec">ASDA Refuse</a></LinkCard>
         <LinkCard><a href="https://www.mmrcnc.com/" className="linkDec">Metro Machines</a></LinkCard>
         <LinkCard><a href="https://www.mightypac.com/" className="linkDec">Mighty Pac</a></LinkCard>
         <LinkCard><a href="https://www.wanasek.com/" className="linkDec">Wanasek Corp</a></LinkCard>
         <LinkCard><a href="https://www.prowiseaccounting.com/" className="linkDec">ProWise Accounting</a></LinkCard>
         <LinkCard><a href="https://www.freebirdpermanentmakeup.com/" className="linkDec">FreeBird</a></LinkCard>

      </div>
    </>
  )
}

export default Portfolio