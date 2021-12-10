import React from 'react'
import Card from 'react-bootstrap/Card'
//import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import { getCurrentUserId } from '../helpers/auth'
import { Search, Check2Circle } from 'react-bootstrap-icons'

const ArtCard = ({
  id,
  owner,
  image, 
  caption,
  location,
  likes,
  comments,
}) => {

  const personalId = getCurrentUserId() 
  
  return (
    <div className='card-div'>
      <Card className="art-card" style={{ width: '30rem' }} >
        <Card.Img src={image} alt={caption} variant="top" />
      </Card>
      <Card className="art-card" style={{ width: '30rem' }} >
        <Card.Body>
          <Card.Text className="likes"><Check2Circle /> {likes.length}</Card.Text>
          <Card.Title className="card-username">
            {
              owner.id === personalId ?
                <Link to={'/personalprofile'}>{owner.username}</Link >
                : <Link to={`/otherprofiles/${owner.id}`}>{owner.username}</Link >
            }
          </Card.Title>
          <Card.Text className="caption">{caption}</Card.Text>
          <Card.Text className="location">{location}</Card.Text>
          <Card.Text className="comments">{comments}</Card.Text>
          <Card.Footer>
            <Link className="link" to={`/view-one-post/${id}`}><Search /></Link>
          </Card.Footer>
        </Card.Body>
      </Card> 
    </div>
  )
}

export default ArtCard