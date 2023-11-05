import Header from '../components/Header'
import Form from '../components/Form'



const Contact = () => {


  return (
    <>
      <main className='contact_body'>
        <Header>//coNtact</Header>
        <div className='wrapper'>
          <div className='contact_header'>
            <span className='background'></span>
            <img src="./ode.png" className='foreground' />
            <div className='contact_title'>
              <h2 className='mx-3'> //inFormation </h2>
              <section>
                <tt>
                  <ul>
                    <li>// phOne: 262/409/3767</li>
                    <li>// eMail: ambition.aidev@gmail.com</li>
                  </ul>
                </tt>
              </section>
            </div>
          </div>
        </div>

        <div>
          <Form />
        </div>


      </main>
    </>
  )
}

export default Contact