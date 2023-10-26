
import Header from "../Header";

const Contact = () => {
  return (
    <>
      <div>
        <Header title='Get in Touch' />
        <div>
          <form className="m-5"> 
            <div class="mb-3">
              <label for="contactForm" class="form-label">Email address</label>
              <input type="email" class="form-control" id="contactForm" placeholder="name@example.com" />
            </div>
            <div class="mb-3">
              <label for="contactTextArea" class="form-label">Write Message</label>
              <textarea class="form-control" id="contactTextArea" rows="3"></textarea>
            </div>
            <a href="mailto:ambition.aidev@gmail.com?subject=Mail from React Site"><button type='submit' className="btn btn-warning btn-lg">Send</button></a>
          </form>
        </div>
        <div className="vstack text-center">
          <p>David Liebherr</p>
          <p>Email: ambition.aidev@gmail.com</p>
          <p>Phone: 262-409-3767</p>
        </div>
      </div>
    </>
  )
}

export default Contact;