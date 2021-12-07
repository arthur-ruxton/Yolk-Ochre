import * as React from 'react'
import { Link } from 'react-router-dom'
import { removeToken } from '../helpers/auth'
import { useNavigate } from 'react-router-dom'
// import SearchBar from '../pages/SearchBar'

const Header = ({ isLoggedIn, setIsLoggedIn }) => {
  const navigate = useNavigate()

  const handleLogOut = () => {
    removeToken()
    setIsLoggedIn(false)
    navigate('/login')
  }

  return (
    <div className="header-div">
      <div className="title-div">
        <h1>YolkOchre</h1>
      </div>
      <div className="nav-div">
        <nav>
          <ul>
            {isLoggedIn ? (
              <>
                <li>
                  <Link className="nav-link" to="/home">House</Link>
                </li>
                <li>
                  <Link className="nav-link" to="/explore">Earth</Link>
                </li>
                <li>
                  <Link className='nav-link' to="/favourites">Heart</Link>
                </li>
                <li>
                  <Link className='nav-link' to="/new-post">Blank canvas</Link>
                </li>
                <li>
                  <Link className='nav-link' to ="/profile">ProfilePicture</Link>
                </li>
                <li>
                  <span className='nav-link' onClick={handleLogOut}>Logout</span>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link className='nav-link' to="/login">Log In</Link>
                </li>
                <li>
                  <Link className='nav-link' to="/register">Sign Up</Link>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Header
