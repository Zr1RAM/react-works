import React from 'react'
import './contact.scss';

const Contact = () => {
  return (
    <div className='contact'>
      <div className="title-content">
      <h1>Get In Touch</h1>
      <p>We love hearing from the community, so please don't hesitate to reach out to us with any questions, comments or feedback you may have.</p>
      </div>
      <form className='form'>
        <input type="text" placeholder='Full Name *'/>
        <input type="email" placeholder='Email Address *'/>
        <input type="text" placeholder='Subject *'/>
        <textarea rows={6} placeholder='Message *'></textarea>
        <button onClick={(e)=> {e.preventDefault()}}>Submit</button>
      </form>
      <div className='back-drop'>
        
      </div>
    </div>
  )
}

export default Contact