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
               <div className="about_content">
                  <p>Hello! My name is David. I have been in the electronic security industry for over a decade. 
                  <p>This means working with CCTV, access control and burg systems. This includes working with networks and IT.</p>
                  </p>
                  <p>I have always been a hard worker. I was born with a high frequency hearing loss, which led to having to learn everything a little later in life. But, this is not what this is about. I have excellent visual perception and strong problem-solving skills. I love staying busy, and given a task, I will do what I can to deliver.</p>
                  <p>After taking a postion at a failed marketing company to design and deploy websites, I decided it was time for me to go back to school and learn  more...
                  </p>
                  <p>Today, I am back to working in the electronic industry, but I code almost every day. See my <a href="https://github.com/aidev13" target='_blank'>GitHub</a> to check out my expereince. I am learning more everyday.</p>
               </div>
            </div>

            <div className='text-center'>
               <h5>My favorite skilled languages and tools:</h5>
               <p>R, RStudio, Microsoft SQL Server, PHP, phpMyAdmin, Python, VScode, GitHub, mySQL </p>
            </div>

            <div id="learning_section">
            
               <div id='cert'>
                  <img src={uwcert} id='certpic' />

               </div>
               <div className="text-center">
                  <tt className="sm-text">My bad ass EdX certification accredited and endorsed by the prestigious UW-Wisconsin System. This basically means I qualify for senior level positions, although I will gladly take any position at the moment.</tt>
               </div>
               <p id="progession">
                  I am currently as of today ({month}/{day}/{year}) studying with <b>Traversy Media</b> to get a fun, but awesome cert on advanced JavaScript and PHP.
               </p>
               <p id="progession">I am also learning R, and Python.</p>
            </div>

         </main>

      </>
   )
}

export default About