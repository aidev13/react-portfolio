
import Header from "../Header";



const Home = () => {

  const cssCode = '.css {\n color: red; \n}';
  const cssRed = {
    color: 'red'
  };
  const jsCode = `const javaScript = () => {
    console.log("Hello World")
  }`

  return (
    <>
      <div className="homeBG">
        <div className="container">
          <div className="text-light m-5">
            <Header title='Welcome to Code Dave!' />
          </div>

          <div className="container px-4 text-center">
            <div className="row gx-5">
              <div className="col">
                <div className="p-3"> <h2 className="text-light fs-4">This website has been crafted with happieness to showcase the proficiencies I've learned and experienced during my <i>rigorous</i> EdX bootcamp experience. It will remain a dynamic, ongoing testament to my professional growth as I advance in my development career, consistently evolving to reflect my latest accomplishments and expertise.</h2></div>
              </div>
              <div className="col d-flex justify-content-center">
                <img src="https://placehold.co/400x200" alt="placeholder image" />
              </div>
            </div>
          </div>

          <div className="container">
            <p className="pt-3 text-center text-light">Displayed below is a comprehensive list of skills I've honed and developed throughout my coding adventure, accompanied by some concise sample code snippets. This website serves as an experimental platform to showcase my abilities.</p>
          </div>

          <div className="text-light">

            <div className="row ">
              <div className="col-md-3 d-flex justify-content-center fs-4">
                Program Language
              </div>
              <div className="col col-lg-2 border d-flex align-items-center justify-content-center rounded-start-4">
                HTML5
              </div>
              <div className="col border p-3 ">
                <pre className="m-auto snippetBorder">
                  <div className="card ">
                    <div className="card-body  snippetBG">
                      <code className="text-info">
                        &lt;h1&gt;Hello World&lt;h1&gt;
                      </code>
                    </div>
                  </div>
                </pre>
              </div>
            </div>

            <div className="row mt-4">
              <div className="col-md-3 d-flex align-items-center justify-content-center fs-4">
              </div>
              <div className="col col-lg-2 border d-flex align-items-center justify-content-center rounded-start-4">
                <span style={cssRed}>CSS</span>
              </div>
              <div className="col border p-3 ">
                <pre className="m-auto snippetBorder">
                  <div className="card ">
                    <div className="card-body snippetBG">
                      <code className="text-info">
                        {cssCode}
                      </code>
                    </div>
                  </div>
                </pre>
              </div>
            </div>

            <div className="row mt-4">
              <div className="col-md-3 d-flex align-items-center justify-content-center fs-4">
              </div>
              <div className="col col-lg-2 border d-flex align-items-center justify-content-center rounded-start-4">
                <span>JavaScript</span>
              </div>
              <div className="col border p-3 ">
                <pre className="m-auto snippetBorder">
                  <div className="card ">
                    <div className="card-body snippetBG">
                      <code className="text-info">
                        {jsCode}
                      </code>
                    </div>
                  </div>
                </pre>
              </div>
            </div>




          </div>
        </div>
      </div>

    </>
  )
}

export default Home;