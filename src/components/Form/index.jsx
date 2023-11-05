import emailjs from '@emailjs/browser';


// this form is a real working email form made with emailjs
// styles all form bootstrap for fun
const Form = () => {

  function sendEmail(e) {
    e.preventDefault();
    emailjs.sendForm('delta13dek_0815', 'template_zojv0up', e.target, 'jmcNY-LnhjMbCkH5N')
    .then(function(response) {
      console.log('SUCCESS!', response.status, response.text);
   }, function(error) {
      console.log('FAILED...', error);
   });
  }

  return (
    <>
     <div className="container-lg border border-black rounded-3 p-3">
      <h2 className="text-center mb-4">// gEt in toUch</h2>
      <form className="row" onSubmit={sendEmail}>
        <label className="bold">// nAme
        <input type="text" name="name_input" className="form-control mb-4"/>
        </label>
        

        <label>// emAil
        <input type="email" name="email_input" className="form-control mb-4"/>
        </label>
        

        <label>// mEssage
        <textarea name="message_input" rows='5' className="form-control mb-4"/>
        <input type="submit" value='send' className="ms-2 btn btn-outline-dark px-5"/>
        </label>
        

      </form>
     </div>
    </>
  )
}

export default Form
