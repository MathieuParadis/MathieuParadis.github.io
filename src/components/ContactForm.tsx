// REACT IMPORTS
import React, { useState } from 'react'

// EMAILJS-COM IMPORT
import emailjs from 'emailjs-com'

const ContactForm = () => {
  const USER_ID = 'user_N1S0jclxvOrbGuov54D3M'
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const form = document.querySelector('.contact-form') as HTMLFormElement

  const handleSubmit = (e) => {
    e.preventDefault()
    const nameInput = document.getElementById('name')
    const emailInput = document.getElementById('email')
    const subjectInput = document.getElementById('subject')
    const messageInput = document.getElementById('message')
    const inputs = [nameInput, emailInput, subjectInput, messageInput]
    const formNotification = document.querySelector('.form-notification')

    const isNameFilled = () => {
      const NameErrorLabel = document.getElementById('name-label')

      if (NameErrorLabel) {
        if (name) {
          NameErrorLabel.style.display = 'none'
          return true
        } else {
          NameErrorLabel.style.display = 'block'
          NameErrorLabel.style.animation = 'dongle 1s'
          setTimeout(() => {
            NameErrorLabel.style.animation = 'none'
          }, 1000)
          return false
        }
      }
    }

    const isEmailCorrect = () => {
      const MailErrorLabel = document.getElementById('mail-label')
      const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/

      if (MailErrorLabel) {
        if (email.match(regex)) {
          MailErrorLabel.style.display = 'none'
          return true
        } else {
          MailErrorLabel.style.display = 'block'
          MailErrorLabel.style.animation = 'dongle 1s'
          setTimeout(() => {
            MailErrorLabel.style.animation = 'none'
          }, 1000)
          return false
        }
      }
    }

    const isSubjectFilled = () => {
      const SubjectErrorLabel = document.getElementById('subject-label')

      if (SubjectErrorLabel) {
        if (subject) {
          SubjectErrorLabel.style.display = 'none'
          return true
        } else {
          SubjectErrorLabel.style.display = 'block'
          SubjectErrorLabel.style.animation = 'dongle 1s'
          setTimeout(() => {
            SubjectErrorLabel.style.animation = 'none'
          }, 1000)
          return false
        }
      }
    }

    const isMessageFilled = () => {
      const MessageErrorLabel = document.getElementById('message-label')

      if (MessageErrorLabel) {
        if (message) {
          MessageErrorLabel.style.display = 'none'
          return true
        } else {
          MessageErrorLabel.style.display = 'block'
          MessageErrorLabel.style.animation = 'dongle 1s'
          setTimeout(() => {
            MessageErrorLabel.style.animation = 'none'
          }, 1000)
          return false
        }
      }
    }

    const areFieldsfilled = () => {
      if (isNameFilled() && isEmailCorrect() && isSubjectFilled() && isMessageFilled()) {
        return true
      } else {
        return false
      }
    }

    if (areFieldsfilled() && form !== null) {
      formNotification?.classList.remove('empty-field')
      formNotification?.classList.remove('sent')
      formNotification?.classList.remove('http-error')
      formNotification?.classList.add('sending')

      // see doc : https://www.emailjs.com/docs/examples/reactjs/
      // emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form, 'YOUR_USER_ID')
        emailjs.sendForm('contact_service', 'contact_service', form, USER_ID)
        .then((result) => {
            console.log(result.text)
            formNotification?.classList.remove('empty-field')
            formNotification?.classList.remove('sending')
            formNotification?.classList.remove('http-error')
            formNotification?.classList.add('sent')

            inputs.map(input => input?.classList.remove('error'))
            setName('')
            setEmail('')
            setSubject('')
            setMessage('')

            setTimeout(() => {
              formNotification?.classList.remove('sent')
            }, 5000)
        }, (error) => {
            console.log(error.text)
            formNotification?.classList.remove('empty-field')
            formNotification?.classList.remove('sending')
            formNotification?.classList.remove('sent')
            formNotification?.classList.add('http-error')
        })

    } else {
      formNotification?.classList.add('empty-field')

      if (!name) {
        nameInput?.classList.add('error')
      }
      if (!email) {
        emailInput?.classList.add('error')
      }
      if (!subject) {
        subjectInput?.classList.add('error')
      }
      if (!message) {
        messageInput?.classList.add('error')
      }
    }
  }

  return (
    <form className='contact-form'>
      <div className='form-content'>
        <div className='name-content'>
          <label id='name-label'>Name field empty</label>
          <input type='text' id='name' name='name' required value={name} onChange={(e) => setName(e.target.value)} placeholder='Name' />
        </div>
        <div className='email-content'>
          <label id='mail-label'>Invalid email</label>
          <input type='mail' id='email' name='email' required value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' />
        </div>
        <div className='subject-content'>
          <label id='subject-label'>Subject field empty</label>
          <input type='text' id='subject' name='subject' required value={subject} onChange={(e) => setSubject(e.target.value)} placeholder='Subject' />
        </div>
        <div className='message-content'>
          <label id='message-label'>Message field empty</label>
          <textarea id='message' name='message' required value={message} onChange={(e) => setMessage(e.target.value)} placeholder='Message' rows={7} />
        </div>
      </div>
      <div className='form-notification'></div>
      <input className='form-button' type='submit' value='Send' onClick={(e) => handleSubmit(e)} />
    </form>
  )
}

export default ContactForm
