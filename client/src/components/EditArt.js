import React, { useState } from 'react' // useEffect
import { useNavigate, useParams } from 'react-router-dom' // useParams
import axios from 'axios'
import Form from 'react-bootstrap/Form'
import PostArtForm from '../components/PostArtForm'
import { getToken } from '../helpers/auth'

const EditPost = () => {
  const [data, setData] = useState({
    image: '',
    caption: '',
    location: '',
  })

  const { id } = useParams()

  const [errorInfo, setErrorInfo] = useState({})
  const [isError, setIsError] = useState(false) 

  const navigate = useNavigate()

  const handleError = (error) => {
    if (error.response) {
      setErrorInfo(error.response.data)
      setIsError(true)
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    const config = {
      method: 'put',
      url: `/api/art/${id}/`,
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
      data: {
        image: data.image, caption: data.caption, location: data.location,
      },
    }

    try {
      const { data } = await axios(config).catch(handleError)
      console.log(data)
      setIsError(false)
      navigate(`/view-one-post/${id}/`)
    } catch (err) {
      console.log(err)
    }
  }

  const handleFormChange = (event) => {
    const { name, value } = event.target
    setData({
      ...data,
      [name]: value,
    }),
    console.log(data)
  }

  const formInputProps = { data, errorInfo, handleFormChange }

  return (
    <div>
      <section className="form-section">
        <div className="form-box">
          <h1>Post</h1>
          <Form onSubmit={handleSubmit} className="form">
            <PostArtForm formInputProps={formInputProps} />
            <div>
              <Form.Control id="submit-button" type="submit" value="Post" />
            </div>
            {isError ? (
              <div className="error">
                <p>Error. Please try again</p>
              </div>
            ) : (
              <></>
            )}
          </Form>
        </div>
      </section>
    </div>
  )
}

export default EditPost
