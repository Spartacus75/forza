import React, {useRef, useState} from 'react'
import {Card, Form, Button, Alert} from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css"
//import {useAuth} from '../Context/AuthContext'
import {Link, useHistory} from 'react-router-dom'
//import {useTranslation} from 'react-i18next'
/*import {
  FacebookLoginButton,
  GoogleLoginButton
} from "react-social-login-buttons";*/

export default function Login(){

const styles = {
      signinCSS: {
            //display: 'flex',
            //flexDirection: 'column',
            //alignItems: 'center',
            margin: 15,
            //width: 'auto',
            //maxWidth: 750
              },
      InternalSigninCSS: {
            maxWidth: 500,
            margin: 'auto'
      }

  }
const emailRef = useRef()
const passwordRef = useRef()

//const {login, signupGoogle, currentUser} = useAuth()
const [error, setError] =useState('')
//const [loading, setLoading] = useState (false)
//const history = useHistory()
//const {t} = useTranslation()

/*
async function handleSubmit(e){
        e.preventDefault()

        try {
          setError('')
          setLoading(true)
          await login(emailRef.current.value, passwordRef.current.value)
          //history.push("/")
          history.push('/services')
        } catch {
          setError('Failed to log in')
                }
          setLoading(false)
}

async function handleSubmitGoogle(){

  try {
    setError('')
    setLoading(true)
    await signupGoogle()
    history.push('/services')
  } catch {

    setError('Failed to connect with your Google Account!')
          }
    setLoading(false)

}

async function handleSubmitFacebook(){
  alert('fonction à faire...')
}

*/

  return (
    <>
{/*!currentUser &&*/
    <div style={styles.signinCSS}>

    <div style={styles.InternalSigninCSS}>

      <Card>
          <Card.Body>
          <h2 className="text-center mb-4">Please fill the required fields</h2>

          {error && <Alert variant="danger">{error}</Alert>}
          <Form /*onSubmit={handleSubmit}*/>
          <Form.Group id="email">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" ref={emailRef} required/>
          </Form.Group>
          <Form.Group id="password">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" ref={passwordRef} required/>
          </Form.Group>
          </Form>
          <div className="w-100 text-center mt-2">
            <Link to="/forgotpassword">Password forgotten?</Link>
          </div>
          </Card.Body>
      </Card>
      <br/>

      <br/>

      </div>
      </div>

}    </>

  )

}
