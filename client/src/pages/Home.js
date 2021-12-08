import React, { useState, useEffect } from 'react'
import { fetchAllArt } from '../helpers/api'
import ArtCard from '../components/ArtCard'
import { getCurrentUserId } from '../helpers/auth'
import axios from 'axios'

const Home = () => {
  const [artList, setArtList] = useState([])
  const [userFollowing, setUserFollowing] = useState([])

  useEffect(() => {
    fetchAllArt().then(setArtList)
  }, [])

  const id = getCurrentUserId()

  useEffect(() => {
    const getUserInfo = async () => {
      const { data } = await axios.get(`/api/auth/profile/${id}/`)
      setUserFollowing(data.following)
    }
    getUserInfo()
  }, [id])

  
  const followingIdArray = userFollowing.map(user => user.id)
  const followingArtList = []

  for (let i = 0; i < artList.length; i++){
    if (followingIdArray.includes(artList[i].owner.id)) {
      followingArtList.push(artList[i])
    }
  }  
  

  return (
    <div>
      <ul className="art-list">
        {followingArtList.map((m) => (
          <li key={m.id}>
            <ArtCard {...m} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Home