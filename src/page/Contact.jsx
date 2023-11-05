import Header from '../components/Header'
import Form from '../components/Form'
import './page.css'

const Contact = () => {

  return (
    <>
      <main className='contact_body'>
        <Header className="title_span"  >//coNtact</Header>

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
          <h6 className='text-center'>
            // This is a working form! //
          </h6>
          <Form />
        </div>

        <div className='open'>
        </div>

      </main>
    </>
  )
}

export default Contact