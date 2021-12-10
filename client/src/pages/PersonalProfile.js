import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { getCurrentUserId } from '../helpers/auth'
import { fetchAllArt } from '../helpers/api'
import ArtCard from '../components/ArtCard'
import Card from 'react-bootstrap/Card'
import UsernameList from '../components/UsernameList'
import Accordion from 'react-bootstrap/Accordion'

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
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Followers {followers.length}</Accordion.Header>
                <Accordion.Body>
                  {followers.map((f) => (
                    <UsernameList {...f} key={f.id} />
                  ))}
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Following {following.length}</Accordion.Header>
                <Accordion.Body>
                  {following.map((f) => (
                    <UsernameList {...f} key={f.id} />
                  ))}
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Favourites {favourites.length}</Accordion.Header>
                <Accordion.Body>
                  {favourites.map((f) => (
                    <UsernameList {...f} key={f.id} />
                  ))}
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>Favourite of {favouritedBy.length}</Accordion.Header>
                <Accordion.Body>
                  {favouritedBy.map((f) => (
                    <UsernameList {...f} key={f.id} />
                  ))}
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
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
