import Header from '../components/Header'



const Contact = () => {


  return (
    <>
      <main className='contact_body'>
        <Header>//coNtact</Header>
        <div className='wrapper'>
          <div className='contact_header'>
            <img src="./snow-mountains.png" className='background' />
            <img src="./ode.png" className='foreground' />
            <h1 className='contact_title'>//coNtact me</h1>
          </div>
        </div>
        <h2 className='mx-3'> //inFormation </h2>
        <section>
          <ul>
            <li>// phOne: 262/409/3767</li>
            <li>// eMail: ambition.aidev@gmail.com</li>
          </ul>
        </section>
      </main>
    </>
  )
}

export default Contact