import React from 'react'
import { Link } from 'react-router-dom'

const UsernameList = ({ username, id }) => {
  return (
    <>
      <Link to={`/otherprofiles/${id}`}><p>{username}</p></Link>
    </>
  )
}

export default UsernameList
