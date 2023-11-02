import Header from "../components/Header"
import "./page.css"
import Accordion from "../components/Accordion"



const About = () => {
  return (
    <>
      <Header>//about</Header>
      <section className="hero">
        <div className="flexContain">
          <img src="/dave.jpg" class="img-fluid borderR" alt="..." />
        </div>

        <Accordion />

      </section>
    </>
  )
}

export default About