import React from 'react'
import { useState, useEffect, useCallback } from 'react'
import axios from 'axios'
import { useParams, Link } from 'react-router-dom' //Link
// import { fetchOneArtwork } from '../helpers/api'
import { getToken, getCurrentUserId } from '../helpers/auth'
import Card from 'react-bootstrap/Card'
//import Button from 'react-bootstrap/Button'
import { Check2Circle, GeoAlt } from 'react-bootstrap-icons'

const ViewOnePost = () => { // <-- this works
  const [artId, setArtId] = useState()
  const [artOwner, setArtOwner] = useState({})
  const [artImage, setArtImage] = useState()
  const [artCaption, setArtCaption] = useState()
  const [artLocation, setArtLocation] = useState()
  const [artLikes, setArtLikes] = useState([])
  // const [artComments, setArtComments] = useState([])

  const { id } = useParams()
  const getArtwork = useCallback(async () => {
    try {
      //fetchOneArtwork(id).then(setArtwork)
      const { data } = await axios.get(`/api/art/${id}`)
      setArtId(data.id)
      setArtOwner(data.owner)
      setArtImage(data.image)
      setArtCaption(data.caption)
      setArtLocation(data.location)
      setArtLikes(data.likes)
      // setArtComments(data.comments)
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }, [id])

  useEffect(() => { // <-- this works
    getArtwork()
  }, [getArtwork]) 

  const handleLike = async () => {

    const config = {
      method: 'put',
      url: `/api/art/likeToggle/${artId}/`,
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    }

    try {
      await axios(config)
      await getArtwork()
    } catch (error) {
      console.log(error)
    }
  }

  const personalId = getCurrentUserId()

  return (
    <div className='view-one-div'>
      <Card style={{ width: '45rem' }}>
        <Card.Img src={artImage} alt={artCaption} variant="top" />
      </Card>
      <div className="art-card">
        <Card>
          <Card.Body style={{ width: '25rem' }}>
            <Card.Title className="card-owner">
              {
                artOwner.id === personalId ?
                  <Link to={'/personalprofile'}>{artOwner.username}</Link >
                  : <Link to={`/otherprofiles/${artOwner.id}`}>{artOwner.username}</Link >
              }
            </Card.Title>
            <Card.Text className="caption">{artCaption}</Card.Text>
            <Card.Text className="location"><GeoAlt/> {artLocation}</Card.Text>
            <Card.Text className="like-button"><Check2Circle onClick={handleLike} /> {artLikes.length}</Card.Text>
          </Card.Body>
        </Card> 
      </div>
    </div>
  )
}

export default ViewOnePost

