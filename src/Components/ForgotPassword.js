import React, {useRef, useState} from 'react'
import {Card, Form, Button, Alert} from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css"
import {useAuth} from '../Context/AuthContext'
import {Link} from 'react-router-dom'
//import {useTranslation} from 'react-i18next'

export default function ForgotPassword(){

const styles ={
  forgotCSS:{
    margin:15
  },
  InternalForgotCSS: {
    maxWidth:500,
    margin: 'auto'
  }
}
const emailRef = useRef()
const {resetPassword} = useAuth()
const [error, setError] =useState('')
const [loading, setLoading] = useState (false)
const [message, setMessage] = useState('')
//const {t} = useTranslation()

async function handleSubmit(e){
        e.preventDefault()

        try {
          setMessage('')
          setError('')
          setLoading(true)
          await resetPassword(emailRef.current.value)
          setMessage('Check your inbox for further isntructions')

        } catch {
          setError('Failed to reset password. You are not registred.')
                }
          setLoading(false)
}



  return (

      <>
      <div style={styles.forgotCSS}>
      <div style={styles.InternalForgotCSS}>
      <Card>
          <Card.Body>
          <h2 className="text-center mb-4">Email forgotten?</h2>

          {error && <Alert variant="danger">{error}</Alert>}
          {message && <Alert variant="success">{message}</Alert>}
          <Form onSubmit={handleSubmit}>
          <Form.Group id="email">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" ref={emailRef} required/>
          </Form.Group>
          <Button disabled={loading} className="w-100" type="submit">
          Recover Email
          </Button>
          </Form>
          <div className="w-100 text-center mt-2">
            <Link to="/login">To Login page</Link>
          </div>
          </Card.Body>
      </Card>

      </div>
      </div>

      </>


  )

}
