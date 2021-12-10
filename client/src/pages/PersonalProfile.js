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

  // const followingIds = following.map(user => user.id)
  // const followersIds = followers.map(user => user.id)
  // const favouritesIds = favourites.map(user => user.id)
  // const favouritedByIds = favouritedBy.map(user => user.id)


  return (
    <div className="profile">
      <div className="user-details">
        <Card style={{ width: '35rem' }}>
          <Card.Img className="pp" variant="top" src={`${pp}`} />
          <Card.ImgOverlay>
            <Card.Title className='card-title'>
              {username}
            </Card.Title>
          </Card.ImgOverlay>
        </Card>
        <Card style={{ width: '35rem' }}>
          <Card.Header>
            <Card.Title>
              {fname} {lname} 
            </Card.Title>
            <Card.Text className="bio">
              {bio}
            </Card.Text>
          </Card.Header>
          <Card.Body className="card-body">
            <Card.Text>Followers {followers.length}</Card.Text>
            <Card.Text>Following {following.length}</Card.Text>
            <Card.Text>Favourites {favourites.length}</Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div className='art-list'>
        {userArtList.map((m) => (
          <ArtCard {...m} key={m.id}/>
        ))}
      </div> 
    </div>
  )
}

export default PersonalProfile
