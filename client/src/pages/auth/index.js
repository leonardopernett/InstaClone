import React,{useState} from 'react'
import {Container, Image} from 'semantic-ui-react'
import './index.scss'
import instaclone from 'assets/instaclone.png'
import Register from 'components/auth/registerForm'
import Login from 'components/auth/loginForm'

export default function Auth() {

  const [showLogin, setShowLogin] = useState(false)

  return (
    <Container fluid className="auth">
      <Image className="image" src={instaclone} />
      <div className="container-form">
        {
           showLogin ? <Login/> : <Register setShowLogin={setShowLogin} />  
        }
      </div>
       <div className="change-form">
        { showLogin ? (
            <>
               No tienes una cuenta? <span onClick={ ()=>setShowLogin(!showLogin) } >Registrate</span>
            </>
        ) : (
          <>
             Entra con tu cuenta <span onClick={ ()=>setShowLogin(!showLogin) }>Iniciar Seccion</span>
          </> 
        ) }  
       </div>
    </Container>
  ) 
}
