import React from 'react';
import { useState } from 'react';



export default function SingUp(){
  const [fullName, setFullName] = useState('')
  const nameChecker = /^[A-Za-zА-Яа-я ]{1,}$/

  const [phone, setPhone] = useState('')
  const phoneChecker = /^\d{3} \d{2}\-{0,1}\d{2}\-{0,1}\d{2}$/
  
  const [email, setEmail] = useState('')
  const emailChecker = /^\w{1,}\.{0,1}\w{1,}@gmail.com$/

  function submit() {
    if(nameChecker.test(fullName) && phoneChecker.test(phone) && emailChecker.test(email)){
      document.querySelector('.submit_button').style.display = 'none'
      const result = document.querySelector('.result')
      result.style.display = 'flex'
    }
  }

  return (
    <div className='singUp'>
      <div className='singUp_block'>
        <div className='inputs'>
          <div>
            <p>Full name:</p>
            <p>Phone:</p>
            <p>Email:</p>
          </div>
          <div>
            <label>
              <input value={fullName} onChange={event => setFullName(event.target.value)}/>
              {nameChecker.test(fullName) ?
                <span className='correct'>&#9745;</span> : <span className='uncorrect'>&#9746;</span>}
            </label>
            <label>
              <input value={phone} onChange={event => setPhone(event.target.value)} type='tel'/>
              {phoneChecker.test(phone) ?
                <span className='correct'>&#9745;</span> : <span className='uncorrect'>&#9746;</span>}
            </label>
            <label>
              <input value={email} onChange={event => setEmail(event.target.value)}/>
              {emailChecker.test(email) ?
                <span className='correct'>&#9745;</span> : <span className='uncorrect'>&#9746;</span>}
            </label>
          </div>
        </div>
        <button className='submit_button' onClick={() => submit()}>Submit</button>
      </div>

      

      <div className='result'>
        <p>Full name: {nameChecker.test(fullName) && fullName}</p>
        <p>Phone: {phoneChecker.test(phone) && phone}</p>
        <p>Gmail: {emailChecker.test(email) && email}</p>
      </div>
    </div>
  )
}