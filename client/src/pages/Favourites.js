import React, { useState, useEffect } from 'react'
import { fetchAllArt } from '../helpers/api'
import ArtCard from '../components/ArtCard'
import { getCurrentUserId } from '../helpers/auth'
import axios from 'axios'


const Home = () => {
  const [artList, setArtList] = useState([])
  const [userFavourites, setUserFavourites] = useState([])

  useEffect(() => {
    fetchAllArt().then(setArtList)
  }, [])

  const id = getCurrentUserId()

  useEffect(() => {
    const getUserInfo = async () => {
      const { data } = await axios.get(`/api/auth/profile/${id}/`)
      setUserFavourites(data.favourites)
    }
    getUserInfo()
  }, [id])

  
  const favouritesIdArray = userFavourites.map(user => user.id)
  const favouritesArtList = []

  for (let i = 0; i < artList.length; i++){
    if (favouritesIdArray.includes(artList[i].owner.id)) {
      favouritesArtList.push(artList[i])
    }
  }  
  

  return (
    <div className='art-list'>
      {favouritesArtList.map((m) => (
        <ArtCard {...m} key={m.id}/>
      ))}
    </div> 
  )
}

export default Home
