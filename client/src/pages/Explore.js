import React, { useState, useEffect } from 'react'
import { fetchAllArt } from '../helpers/api'
import ArtCard from '../components/ArtCard'


const Explore = () => {
  const [artList, setArtList] = useState([])

  useEffect(() => {
    fetchAllArt().then(setArtList)
  }, [])


  return (
    <div className='art-list'>
      {artList.map((m) => (
        <ArtCard {...m} key={m.id}/>
      ))}
    </div> 
  )
}

export default Explore
