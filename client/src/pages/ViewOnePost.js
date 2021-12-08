import React from 'react'
import { useState, useEffect, useCallback } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
//import { fetchOneArtwork } from '../helpers/api'
import { getToken, getCurrentUserId } from '../helpers/auth'

const ViewOnePost = () => { // <-- this works
  const [artwork, setArtwork] = useState({})
  const { id } = useParams() 

  const getArtwork = useCallback(async () => {
    try {
      //fetchOneArtwork(id).then(setArtwork)
      const { data } = await axios.get(`/api/art/${id}`)
      setArtwork(data)
    } catch (error) {
      console.log(error)
    }
  }, [id])

  useEffect(() => { // <-- this works
    getArtwork()
  }, [getArtwork]) 

  const handleLike = async () => {
    try {
      await axios.post(
        '/api/like/',
        {
          artwork: artwork.id,
          likes: true,
        },
        { headers: { Authorization: `Bearer ${getToken()}` } }
      )
      await getArtwork()
    } catch (error) {
      console.log(error)
    }
  }

  console.log(`user does like ${userDoesLike}`)

  console.log(artwork) // <-- this works
  
  return (
    <>
      <div>{id}</div>
      <div className="art-div">
        <img src={artwork.image} alt={'alt'}/>
        <div className="art-info-div">
          <div className="likes-div">
            {
              userDoesLike ? 
                (<p className="like-button" onClick={handleDislike(like.id)}>red heart</p>) : 
                (<p className="dislike-button" onClick={handleLike}>empty heart</p>)
            }
            <p className="like-number">
              {artwork.like.length}
            </p>
          </div>
          <p className="art-show-title">
            <Link to={`profile/${artwork.owner.id}`}>{artwork.owner.username}</Link>
          </p>
          <p className="artDescription">{artwork.caption}</p>
          <p calssName="expand-button">expand icon</p>
        </div>
      </div>
    </>
  )
}

export default ViewOnePost

