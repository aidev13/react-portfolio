import Header from "../components/Header"
import "./page.css"


const About = () => {
  return (
    <>
      <Header>//aBout</Header>
      <section>
        <div className="image_flex">
          <img src="/dave.jpg" className="img-fluid profile_pic_borderR" alt="Profile picture of owner, David Liebherr" />
        </div>

        <div className="about_grid_container">
          <h2 className="about_title">//hello world!</h2>
            <div className="text-center about_content">
                <p>I am a recent graduate of the Full Stack Development program offered by edX, which is endorsed by prestigious institutions such as the University of Wisconsin and Harvard, among others.
                </p>
                <p>In my journey through this program, I have discovered a profound affinity for front-end development. The art of crafting designs through code has become my passion, and I take immense pride in my work. Full-stack development provided me with a holistic perspective on the field, enabling me to discern where my true calling lies. While I appreciate every facet of the discipline, it is in front-end development that I intend to channel my primary focus.</p>
                <p>Beyond the realm of coding, my heart brims with a deep-seated love for activities such as hunting and fishing. I revel in the satisfaction of working with my hands, whether it involves repairing vehicles with my modest toolbox or pursuing my passion for Brewers baseball and Packers football. But above all, my greatest source of joy is my cherished family, which includes my beloved wife, Stacey, and our precious children, Lacey and Cody. They are the radiant stars that illuminate the canvas of my life.
                </p>
              <h3>This is for them.</h3>
            </div>
        </div>

      </section>
    </>
  )
}

export default About