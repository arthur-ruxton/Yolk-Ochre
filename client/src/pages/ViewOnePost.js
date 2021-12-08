import React from 'react'
import { useState, useEffect, useCallback } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom' //Link
// import { fetchOneArtwork } from '../helpers/api'
// import { getToken, getCurrentUserId } from '../helpers/auth'

const ViewOnePost = () => { // <-- this works
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

  
  
  return (
    <>
      <div><p>{artOwner.username}</p></div>
      <div><img src={artImage} /></div>
      <div><p>{artCaption}</p></div>
      <div><p>{artLocation}</p></div>
      <div><p>{artLikes.length}</p></div>
    </>
  )
}

export default ViewOnePost

