import {useState} from 'react'
import './App.scss';

/* component */
import Auth from 'pages/auth'

export default function App() {
  const [auth, setAuth] = useState(undefined)

  console.log(setAuth)
  return (
    <> 
       { typeof auth === "undefined" 
               ?  <Auth /> 
               : <p>logueado</p> }
    </>
  );
}

