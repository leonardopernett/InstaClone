import React, { useState } from 'react'
import {Form, Button} from 'semantic-ui-react'
import './index.scss'

export default function Register(props) {

  const [value, setValue] = useState({
    name:"",
    username:"",
    email:"",
    password:"",
    password2:""
  })

  const handlerRegister = (e)=>{
    e.preventDefault()
    console.log(value)
    e.target.reset()
  }
  const inputChange = (e)=>{
    setValue({
      ...value,
      [e.target.name]:e.target.value
    })
  }

  return (
    <>
       <h2 className="register-form-title">Registrate gratis y comparte fotos con tus amigos</h2>
       <Form className="register-form" onSubmit={ handlerRegister }>
         <Form.Input 
           type="text"
           placeholder="Nombre y Apellido"
           name="name"
           onChange={inputChange}
         />

         <Form.Input 
           type="text"
           placeholder="Username"
           name="username"
           onChange={inputChange}
         />

         <Form.Input 
           type="email"
           placeholder="Correo"
           name="email"
           onChange={inputChange}
         />
        
         <Form.Input 
           type="password"
            placeholder="Contraseña"
           name="password"
           onChange={inputChange}
         />

        <Form.Input 
           type="password"
            placeholder="Repetir contraseña"
           name="password2"
           onChange={inputChange}
         />
          <Button primary className="btn-submit"> Registrarse</Button>
       </Form>
    </>
  )
}
