import React, { useState } from 'react';
import emailjs from '@emailjs/browser';


// this form is a real working email form made with emailjs
// styles all form bootstrap for fun
const Form = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = 'delta13dek_0815'
    const templateId = 'template_lxsybpx'
    const publicKey = 'jmcNY-LnhjMbCkH5N'
    const templateParams = {
      from_name: name,
      reply_to: email,
      message: message
    }

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((result) => {
        console.log(result.text);
        setName('');
        setEmail('');
        setMessage('');

      }), (error) => {
        console.log(error.text);
      };
  };


  return (
    <>
      <div className="container-lg border border-black rounded-3 p-3">
        <h2 className="text-center mb-4">// gEt in toUch</h2>

        <form className="row" onSubmit={handleSubmit}>
          <label className="bold">// nAme
            <input
              type="text"
              value={name}
              className="form-control mb-4"
              onChange={(e) => setName(e.target.value)} />
          </label>


          <label>// emAil
            <input
              type="email"
              value={email}
              className="form-control mb-4"
              onChange={(e) => setEmail(e.target.value)} />
          </label>


          <label>// mEssage
            <textarea
              name="message_input"
              value={message}
              rows='5'
              className="form-control mb-4"
              onChange={(e) => setMessage(e.target.value)} />
            <input
              type="submit"
              value='Submit'
              className="ms-2 btn btn-outline-dark px-5" />
          </label>


        </form>
      </div>
    </>
  )
}

export default Form
