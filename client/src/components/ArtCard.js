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
    <div>
      <div className="art-card">
        <img src={image} alt={caption} />
        <div className="card-body">
          <p className="likes">likes: {likes.length}</p>
          <p className="card-username">
            {
              owner.id === personalId ?
                <Link to={'/personalprofile'}>{owner.username}</Link >
                : <Link to={`/otherprofiles/${owner.id}`}>{owner.username}</Link >
            }
          </p>
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