import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { getCurrentUserId } from '../helpers/auth'
import { fetchAllArt } from '../helpers/api'
import ArtCard from '../components/ArtCard'
import Card from 'react-bootstrap/Card'

const PersonalProfile = () => {
  const [artList, setArtList] = useState([])

  const [username, setUsername] = useState()
  const [fname, setFname] = useState()
  const [lname, setLname] = useState()
  const [bio, setBio] = useState()
  const [pp, setPp] = useState()
  const [following, setFollowing] = useState([])
  const [followers, setFollowers] = useState([])
  const [favourites, setFavourites] = useState([])
  const [favouritedBy, setFavouritedBy] = useState([])
  // const [email, setEmail] = useState()
  // const [website, setWebsite] = useState()

  useEffect(() => {
    fetchAllArt().then(setArtList)
  }, [])

  const userId = getCurrentUserId()

  useEffect(() => {
    const getUserInfo = async () => {
      const { data } = await axios.get(`/api/auth/profile/${userId}/`)
      setUsername(data.username)
      setFname(data.first_name)
      setLname(data.last_name)
      setBio(data.bio)
      setPp(data.profile_image)
      setFollowing(data.following)
      setFollowers(data.followers)
      setFavourites(data.favourites)
      setFavouritedBy(data.favouritedBy)
      // setEmail(data.email)
      // setWebsite(data.website)
    }
    getUserInfo()
  }, [userId])

  const userArtList = []

  for (let i = 0; i < artList.length; i++){
    if ((artList[i].owner.id) === userId) {
      userArtList.push(artList[i])
    }
  }  

  const followingIds = following.map(user => user.id)
  const followersIds = followers.map(user => user.id)
  const favouritesIds = favourites.map(user => user.id)
  const favouritedByIds = favouritedBy.map(user => user.id)

  return (
    <div>
      <div className="user-details">
        <Card>
          <Card.Img className="pp" variant="top" src={`${pp}`} style={{ minWidth: '200px' }}/>
          <Card.Body className="card-body">
            <Card.Title className='card-title'>
              <p className="username">{username}</p>
            </Card.Title>
            <Card.Text>
              <p className="bio">{fname} {lname}: {bio}</p>
            </Card.Text>
            <Card.Text>
              <p>followers</p>
              <p className="followers-count">{followersIds.length}</p>
              <p>following</p>
              <p className="following-count">{followingIds.length}</p>
              <p>favourites</p>
              <p>{favouritesIds}</p>
              <p>favourited by</p>
              <p>{favouritedByIds}</p>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div>
        <ul className="art-list">
          {userArtList.map((m) => (
            <li key={m.id}>
              <ArtCard {...m} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default PersonalProfile
