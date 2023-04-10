import React, { useState } from 'react'
import UserContact from './UserContact'

const UserContactContainer = () => {
  const [validation, setValidation] = useState(false)

  const [contact, setcontact] = useState({
    name: "",
    email: "",
  });

  const validateName = (value) => {
    return value ? value.length > 5 : false;
  };


  const handleChange = (e) => {
    setcontact({ ...contact, [e.target.name]: e.target.value }); //El valor e.target.name debe ir en corchetes para que lo pueda poner como texto
    /* console.log(e.target.value) */
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validForm = (validateName(contact.name) && /\S+@\S+\.\S+/.test(contact.email))?setValidation(true):setValidation(false)
      
      }
    



   
  return (
    <div>
        <UserContact
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        validation={validation}

        />
    </div>
  )
}

export default UserContactContainer