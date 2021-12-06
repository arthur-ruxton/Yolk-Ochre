import * as React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { setToken } from '../helpers/auth'
import { login } from '../helpers/api'
import FormInput from '../components/FormInput'
import Form from 'react-bootstrap/Form'

const Login = ({ setIsLoggedIn }) => {
  const [data, setData] = useState({
    username: '',
    password: ''
  })

  const [errorInfo, setErrorInfo] = useState({})
  const [isError, setIsError] = useState(false)
  
  const navigate = useNavigate()

  const handleSuccessfulLogin = ({ token }) => {
    setToken(token)
    setIsLoggedIn(true)
    setIsError(false)
    navigate('/')
  }

  const handleError = (error) => {
    if(error.response) {
      setErrorInfo(error.response.data)
      setIsError(true)
    }
  } // position correct?

  const handleSubmit = async (event) => {
    event.preventDefault()
    login(data).then(handleSuccessfulLogin).catch(handleError)
  }

  const handleFormChange = (event) => {
    const { name, value } = event.target
    setData({
      ...data,
      [name]: value
    })
  }

  const formInputProps = { data, errorInfo, handleFormChange }

  return (
    <section className="form-section">
      <div className="form-box">
        <h1>Login</h1>
        <Form onSubmit={handleSubmit} className="form">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <FormInput
              placeholder="username"
              type="text"
              name="username"
              {...formInputProps}
            />
            <FormInput
              placeholder="password"
              type="password"
              name="password"
              {...formInputProps}
            />
            <Form.Control type="submit" value="login" />
            <div>
              {isError ? (
                <div className="error">
                  <p>Error, please try again</p>
                </div>
              ) : (
                <></>
              )}
            </div>
          </Form.Group>
        </Form>
      </div>
    </section>
  )
}

export default Login
