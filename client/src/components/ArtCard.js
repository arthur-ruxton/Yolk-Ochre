import React from 'react'
// import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import { getCurrentUserId } from '../helpers/auth'

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
    <div className="art-card">
      <img src={image} alt={caption} />
      <div className="card-body">
        <p className="likes">likes: {likes.length}</p>
        <span className="card-username">
          {
            owner.id === personalId ?
              <Link to={'/personalprofile'}>{owner.username}</Link >
              : <Link to={`/otherprofiles/${owner.id}`}>{owner.username}</Link >
          }
        </span>
        <span className="card-text">{caption}</span>
        <p className="card-location">{location}</p>
        <p className="card-comments">{comments}</p>
        <Button className="button"><Link className="link" to={`/view-one-post/${id}`}>View</Link></Button>
      </div>
    </div> 
  )
}

export default ArtCard