
import React from 'react'
import Card from 'react-bootstrap/Card'
//import Button from '@restart/ui/esm/Button'
//import { Link } from 'react-router-dom'

const ArtCard = ({
  id,
  image, 
  caption,
  owner,
}) => {

  console.log(owner)

  return (
    <div>
      <Card style={{ width: '18rem' }} className="movie-card">
        <Card.Img className="card-image" variant="top" src={image} 
          alt={caption} style={{ height: '100%', width: '50%' }}/>
        <Card.Body className="card-body">
          <Card.Title className="card-title">{owner.username}</Card.Title>
          <Card.Text className="card-text">
            {caption} id = {id}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}

export default ArtCard