import React, { useState, useEffect, useCallback } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

import { getToken, getUserId } from '../helpers/auth'

const SingleArtwork = () => {
  const [artwork, setArtwork] = useState()
  //const [isError, setIsError] = useState(false)
  const { id } = useParams()

  const getArtwork = useCallback(async () => {
    try {
      const data = await axios.get(`/api/art/${id}/`)
      setArtwork(data)
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }, [id])
  
  useEffect(() => {
    getArtwork()
  }, [getArtwork])

  const handleLike = async () => {
    try {
      await axios.post(
        'api/like',
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

  const handleDislike = async (likeId) => {
    try {
      await axios.delete(
        `api/like/${likeId}`,
        { headers: { Authorization: `Bearer ${getToken()}` } }
      )
      await getArtwork()
    } catch (error) {
      console.log(error)
    }
  }

  const userId = getUserId()
  const like = artwork && artwork.like.find((like) => like.owner === userId)
  const doesUserLike = userId && like //!!?

  console.log(`user likes ${doesUserLike}`)

  return (
    <div className="art-div">
      <img src={artwork.image} alt={'alt'}/>
      <div className="art-info-div">
        <div className="likes-div">
          {
            doesUserLike ? 
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
  )
}

export default SingleArtwork
