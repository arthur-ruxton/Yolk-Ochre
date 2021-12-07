import * as React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { register } from '../helpers/api'
import FormInput from '../components/FormInput'
import Form from 'react-bootstrap/Form'

const Register = () => {
  const [data, setData] = useState({
    email: '', 
    username: '',
    first_name: '',
    last_name: '',
    bio: '',
    profile_image: '',
    website: '',
    password: '',
    password_confirmation: '',
  })

  const [errorInfo, setErrorInfo] = useState({})
  const [isError, setIsError] = useState(false)

  const navigate = useNavigate()

  const handleSuccessfulRegister = () => {
    setIsError(false)
    navigate('/login')
  }

  const handleError = (error) => {
    if (error.response) {
      setErrorInfo(error.response.data)
      setIsError(true)
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    register(data).then(handleSuccessfulRegister).catch(handleError)

  }

  const handleFormChange = (event) => {
    const { name, value } = event.target
    setData({
      ...data,
      [name]: value,
    })
    console.log(data)
  }

  const formInputProps = { data, errorInfo, handleFormChange }

  return (
    <section className="form-section">
      <div className="form-box">
        <h1>Sign Up</h1>
        <Form onSubmit={handleSubmit} className="form">
          <FormInput
            placeholder='email@email.com' 
            type='email' 
            name='email' 
            {...formInputProps}
          />
          <FormInput
            placeholder="username" 
            type='text' 
            name='username'   
            {...formInputProps} 
          />
          <FormInput
            placeholder="First Name" 
            type='text' 
            name='first_name'   
            {...formInputProps} 
          />
          <FormInput
            placeholder="Surname" 
            type='text' 
            name='last_name'   
            {...formInputProps} 
          />
          <FormInput
            placeholder="Bio" 
            type='text' 
            name='bio'   
            {...formInputProps} 
          />
          <FormInput
            placeholder="Profile Picture" 
            type='text' 
            name='profile_image'   
            {...formInputProps} 
          />
          <FormInput
            placeholder="Like to your website" 
            type='url' 
            name='website'   
            {...formInputProps} 
          />
          <FormInput
            placeholder="Password" 
            type='password' 
            name='password'   
            {...formInputProps} 
          />
          <FormInput
            placeholder="Confirm password" 
            type='password' 
            name='password_confirmation'   
            {...formInputProps} 
          />
          <Form.Control type="submit" value="Register" />
          {isError ? (
            <div className='error'>
              <p>Error. Please try again.</p>
            </div> 
          ) : (
            <></>
          )}
        </Form>
      </div>
    </section>
  )
}

export default Register
