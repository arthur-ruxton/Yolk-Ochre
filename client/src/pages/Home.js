import React from 'react'
// import { fetchOneArtwork } from '../helpers/api'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Home = () => {
  const [artwork, setArtwork] = useState()

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get('/api/art/1/')
        console.log(data)
        setArtwork(data)
      } catch (error) {
        console.log(error)
      }
    }
    getData()
  }, [])

  console.log(artwork)

  return (
    <div>
      <h1>Hello World</h1>
      <p>{artwork.caption}</p>
    </div>
  )
}

export default Home
