import React, { useState } from 'react';

const PrototypeForm = {
  key1: 'Barbara',
  key2: 'Hepworth',
  key3: 'bhepworth@react.com',
  key4: 'love cats'
}

export default function Form(){
  const [person, setPerson] = useState({
    firstName: PrototypeForm.key1,
    lastName: PrototypeForm.key2,
    email: PrototypeForm.key3,
    hobby: PrototypeForm.key4
  })

  const [style, setStyle] = useState({
    form: {
      height: '100vh',
      display:  'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '30vw',
      backgroundColor: 'black'
    },

    block: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      padding: 20,
      fontSize: 22,
      borderRadius: 20,
      backgroundColor: 'white',
      boxShadow: '0 0 20px white',
    },

    input: {
      border: '2px solid black',
      boxShadow: '0 0 10px black',
      borderRadius: 10,
      padding: 10,
      margin: 10,
      fontSize: 22,
    }
  })
  
  
  // let shadowLV = 10
  // let shadowUP = true
  // function animation(){
  //   setInterval(() => {
  //     shadowUP ? shadowLV+=0.5 : shadowLV-=0.5
  
  //     setStyle({
  //       ...style,
  //       ...block[boxShadow] = `0 0 ${shadowLV}px white`
  //     })
  
  //     switch(shadowLV){
  //       case 40:
  //         shadowUP = false
  //         break
  //       case 10:
  //         shadowUP = true
  //         break
  //     }
  //   }, 100)
    
  // }
  

  function handleFirstName(e){
    setPerson({
      ...person,
      firstName: e.target.value
    })
  }
  function handleLastName(e){
    setPerson({
      ...person,
      lastName: e.target.value
    })
  }
  function handleEmail(e){
    setPerson({
      ...person,
      email: e.target.value
    })
  }
  function handleHobby(e){
    setPerson({
      ...person,
      hobby: e.target.value
    })
  }

  return (
    <div style={style.form}>
      <div style={style.block}>
        <label>
          First Name:
          <input
            style={style.input}
            value={person.firstName} 
            onChange={handleFirstName}
          />
        </label>
        <label>
          Last Name:
          <input
            style={style.input}
            value={person.lastName}
            onChange={handleLastName}
          />
        </label>
        <label style={style}>
          Email:
          <input 
            style={style.input}
            value={person.email} 
            onChange={handleEmail}
          />
        </label>
        <label>
          Hobby:
          <input
            style={style.input}
            value={person.hobby} 
            onChange={handleHobby}
          />
        </label>
      </div>

      <div style={style.block}>
        <p>Full name: {person.firstName}{' '}{person.lastName}</p>
        <p>Email: {person.email}</p>
        <p>Hobby: {person.hobby}</p>
      </div>
    </div>
  )
}