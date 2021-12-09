import React, { useState, useEffect, useCallback } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { getToken } from '../helpers/auth'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

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
          <Card.Body className="card-body">
            <Card.Text className="bio">
              {fname} {lname}: {bio}
            </Card.Text>
            <Button onClick={handleFollow}>Heart</Button><Card.Text>Followers: {followers.length}</Card.Text>
            <Card.Text>
              following: {following.length}
            </Card.Text>
            <Card.Text>
              favourites: {favourites.length}
            </Card.Text>
            <Button onClick={handleFavourite}>Heart</Button><Card.Text>Favourited by: {favouritedBy.length}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  )
}

export default OtherUserProfile