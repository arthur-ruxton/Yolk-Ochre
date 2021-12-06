import React from 'react'
import Card from 'react-bootstrap/Card'
// import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

const ArtCard = ({
  image,
  caption,
  owner
}) => {

  return (
    <div>
      <Card style={{ width: '18rem' }} className="art-card">
      <Card.Img className="card-image" variant="top" src={image} 
          alt={caption}/>
      </Card>
      <Card.Title className="card-title">
        <Link to={`profile/${owner.id}`}>{owner.username}</Link>
      </Card.Title>
      <Card.Body className="card-body">
        <Card.Text className="card-text">
          {caption}
        </Card.Text>
      </Card.Body>
    </div>
  )
}

export default ArtCard
