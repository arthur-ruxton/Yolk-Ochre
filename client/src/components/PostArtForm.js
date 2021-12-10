import React from 'react'
import Form from 'react-bootstrap/Form'

const PostArtForm = ({ formInputProps }) => {
  const handleFormChange = formInputProps.handleFormChange

  return (
    <>
      <Form.Control
        name='image'
        type='text'
        placeholder='Image Url'
        onChange={handleFormChange}
        {...formInputProps}
      />
      <Form.Control
        name='caption'
        type='text'
        placeholder='Caption'
        onChange={handleFormChange}
        {...formInputProps}
        as="textarea" rows={3}
      />
      <Form.Control
        name='location'
        type='text'
        placeholder='Location'
        onChange={handleFormChange}
        {...formInputProps}
      />
    </>
  )
}

export default PostArtForm
