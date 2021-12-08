
import React from 'react'
// import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

const ArtCard = ({
  id,
  owner,
  image, 
  caption,
  location,
  like,
  comments,
}) => {

  return (
    <div>
      <div className="art-card">
        <img src={image} alt={caption} />
        <div className="card-body">
          <p className="likes">likes: {like.length}</p>
          <p className="card-username">{owner.username}</p>
          <p className="card-text">{caption}</p>
          <p className="card-location">{location}</p>
          <p className="card-comments">{comments}</p>
          <Button><Link to={`/view-one-post/${id}`}>View</Link></Button>
        </div>
      </div>
    </div>
  )
}

export default ArtCard