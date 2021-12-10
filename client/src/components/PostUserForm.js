import React from 'react'
import Form from 'react-bootstrap/Form'

const PostUserForm = ({ formInputProps }) => {
  const handleFormChange = formInputProps.handleFormChange


  return (
    <>
      <Form.Control
        placeholder='email@email.com' 
        name='email' 
        type='email' 
        onChange={handleFormChange}
        {...formInputProps}
      />
      <Form.Control
        placeholder="username" 
        name='username' 
        type='text' 
        onChange={handleFormChange}
        {...formInputProps} 
      />
      <Form.Control
        placeholder="First Name" 
        name='first_name'  
        type='text' 
        onChange={handleFormChange} 
        {...formInputProps} 
      />
      <Form.Control
        placeholder="Surname" 
        name='last_name'  
        type='text' 
        onChange={handleFormChange} 
        {...formInputProps} 
      />
      <Form.Control
        placeholder="Bio" 
        name='bio'   
        type='text' 
        onChange={handleFormChange}
        {...formInputProps} 
      />
      <Form.Control
        placeholder="Profile Picture" 
        name='profile_image' 
        type='text'   
        onChange={handleFormChange}
        {...formInputProps} 
      />
      <Form.Control
        placeholder="Like to your website" 
        name='website'  
        type='url'  
        onChange={handleFormChange}
        {...formInputProps} 
      />
      <Form.Control
        placeholder="Password" 
        name='password' 
        type='password'   
        onChange={handleFormChange}
        {...formInputProps} 
      />
      <Form.Control
        placeholder="Confirm password" 
        name='password_confirmation'
        type='password'  
        onChange={handleFormChange}
        {...formInputProps} 
      />
    </>
  )
}

export default PostUserForm
