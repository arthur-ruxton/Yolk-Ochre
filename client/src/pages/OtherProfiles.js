import React, { useState, useEffect, useCallback } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { getToken } from '../helpers/auth'

import { Star, PersonPlusFill } from 'react-bootstrap-icons'
import Card from 'react-bootstrap/Card'
import UsernameList from '../components/UsernameList'
import Accordion from 'react-bootstrap/Accordion'

const OtherUserProfile = () => {
  
  const [username, setUsername] = useState()
  const [fname, setFname] = useState()
  const [lname, setLname] = useState()
  const [bio, setBio] = useState()
  const [pp, setPp] = useState()
  const [following, setFollowing] = useState([])
  const [followers, setFollowers] = useState([])
  const [favourites, setFavourites] = useState([])
  const [favouritedBy, setFavouritedBy] = useState([])
  // const [id, setId] = useState([])
  // const [email, setEmail] = useState()
  // const [website, setWebsite] = useState()

  const idObj = useParams()
  const otherUserId = idObj.id

  const getUserInfo = useCallback(async () => {
    try {
      const { data } = await axios.get(`/api/auth/profile/${otherUserId}/`)
      setUsername(data.username)
      setFname(data.first_name)
      setLname(data.last_name)
      setBio(data.bio)
      setPp(data.profile_image)
      setFollowing(data.following)
      setFollowers(data.followers)
      setFavourites(data.favourites)
      setFavouritedBy(data.favouritedBy)
      // setData(data.id)
      // setEmail(data.email)
      // setWebsite(data.website)
    } catch (error) {
      console.log('errore', error)
    }
  }, [otherUserId])

  useEffect(() => { // <-- this works
    getUserInfo()
  }, [getUserInfo]) 

  const handleFollow = async () => {
    const config = {
      method: 'put',
      url: `/api/auth/followToggle/${otherUserId}/`,
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    }
    try {
      await axios(config)
      await getUserInfo()
    } catch (error) {
      console.log(error)
    }
  }

  const handleFavourite = async () => {
    const config = {
      method: 'put',
      url: `/api/auth/favouriteToggle/${otherUserId}/`,
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    }
    try {
      await axios(config)
      await getUserInfo()
    } catch (error) {
      console.log(error)
    }
  }

  // const followingIds = following.map(user => user.id)
  // const followersIds = followers.map(user => user.id)
  // console.log('id list', followersIds)
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
                <Accordion.Header>
                  Followers {followers.length}
                </Accordion.Header>
                <Accordion.Body>
                  {followers.map((f) => (
                    <UsernameList {...f} key={f.id} />
                  ))}
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  Following {following.length}
                </Accordion.Header>
                <Accordion.Body>
                  {following.map((f) => (
                    <UsernameList {...f} key={f.id} />
                  ))}
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  Favourites {favourites.length}
                </Accordion.Header>
                <Accordion.Body>
                  {favourites.map((f) => (
                    <UsernameList {...f} key={f.id} />
                  ))}
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  Favourite of {favouritedBy.length}
                </Accordion.Header>
                <Accordion.Body>
                  {favouritedBy.map((f) => (
                    <UsernameList {...f} key={f.id} />
                  ))}
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Card.Body>
          <Card.Footer className="profile-footer">
            <PersonPlusFill onClick={handleFollow}/> <Star onClick={handleFavourite}/>
          </Card.Footer>
        </Card>
      </div>
    </div>
  )
}

export default OtherUserProfile