import React, { useState, useEffect } from 'react'
import { fetchAllArt } from '../helpers/api'
import ArtCard from '../components/ArtCard'

const Explore = () => {
  const [artList, setArtList] = useState([])

  useEffect(() => {
    fetchAllArt().then(setArtList)
  }, [])


  return (
    <div>
      <ul className="art-list">
        {artList.map((m) => (
          <li key={m.id}>
            <ArtCard {...m} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Explore
