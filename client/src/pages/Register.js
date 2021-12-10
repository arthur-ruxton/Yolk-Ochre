import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { register } from '../helpers/api'
import PostUserForm from '../components/PostUserForm'
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
      <div className="form-box" id="reg-form">
        <h1>Sign Up</h1>
        <Form onSubmit={handleSubmit} className="form">
          <PostUserForm formInputProps={formInputProps}/>
          <div>
            <Form.Control id="submit-button" type="submit" value="Register" />
          </div>
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
