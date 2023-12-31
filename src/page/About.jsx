import Typewriter from 'typewriter-effect'
import Header from "../components/Header"
import uwcert from '/uwwbc-edx-cert.png'
import "./page.css"


let today = new Date();
let month = today.getMonth() + 1;
let day = today.getDate();
let year = today.getFullYear();

const About = () => {

   return (
      <>

         <Header>// david liebherr</Header>
         <main>
            <div className="image_flex">
               <img src="/dave.jpg" className="img-fluid profile_pic_borderR p-2" alt="Profile picture of owner, David Liebherr" />
            </div>
            <div className="text-center">
               <tt>full-stack developer | husband | father | ready</tt>
            </div>

            <div className="about_grid_container">
               <h2 className="about_title">
                  <Typewriter
                     options={{
                        strings: ['// hello world'],
                        autoStart: true,
                        loop: true,
                     }}
                  />
               </h2>
               <div className="text-center about_content">
                  <p>I am a recent graduate of the Full Stack Development program offered by edX, which is endorsed by prestigious institutions such as the University of Wisconsin and Harvard, among others.
                  </p>
                  <p>In my journey through this program, I have discovered a profound affinity for front-end development. The art of crafting designs through code has become my passion, and I take immense pride in my work. Full-stack development provided me with a holistic perspective on the field, enabling me to discern where my true calling lies. While I appreciate every facet of the discipline, it is in front-end development that I intend to channel my primary focus.</p>
                  <p>Beyond the realm of coding, my heart brims with a deep-seated love for activities such as hunting and fishing. I revel in the satisfaction of working with my hands, whether it involves repairing vehicles with my modest toolbox or pursuing my passion for Brewers baseball and Packers football. But above all, my greatest source of joy is my cherished family, which includes my beloved wife, Stacey, and our precious children, Lacey and Cody. They are the radiant stars that illuminate the canvas of my life.
                  </p>
               </div>
               <h3 className='grid_span_bottom'>This is for them.</h3>
            </div>

            <div id="learning_section">
               <div id='progession'>
                  <h2>My learning progress</h2>
                  <p>As a developer, I want to keep my brain cells sharp. This means learning, re-learning and keeping up with updates as best I can.</p>
               </div>
               <div id='cert'>
                  <img src={uwcert} id='certpic' />

               </div>
               <div className="text-center">
                  <tt className="sm-text">My bad ass EdX certification accredited and endorsed by the prestigious UW-Wisconsin System. This basically means I qualify for senior level positions, although I will gladly take any position at the moment.</tt>
               </div>
               <p id="progession">
                  I am currently as of today ({month}/{day}/{year}) studying with <b>Traversy Media</b> to get a fun, but awesome cert on advanced JavaScript and PHP.
               </p>
            </div>

         </main>

      </>
   )
}

export default About