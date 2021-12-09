import * as React from 'react'
import { Link } from 'react-router-dom'
import { removeToken } from '../helpers/auth'
import { useNavigate } from 'react-router-dom'
// import SearchBar from '../pages/SearchBar'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Offcanvas from 'react-bootstrap/Offcanvas'

const Header = ({ isLoggedIn, setIsLoggedIn }) => {
  const navigate = useNavigate()

  const handleLogOut = () => {
    removeToken()
    setIsLoggedIn(false)
    navigate('/login')
  }

  return (
    <div className="header-div">
      <h1>YolkOchre.</h1>
      {isLoggedIn ?
        (
          <Navbar expand={false}>
            <Container fluid>
              <Nav.Link><Link className="nav-link" to="/home">House</Link></Nav.Link>
              <Nav.Link><Link className="nav-link" to="/explore">Earth</Link></Nav.Link>
              <Nav.Link><Link className='nav-link' to="/favourites">Heart</Link></Nav.Link>
              <Navbar.Toggle aria-controls="offcanvasNavbar" classname="navbar-toggle"/>
              <Navbar.Offcanvas
                id="offcanvasNavbar"
                aria-labelledby="offcanvasNavbarLabel"
                placement="end"
              >
                <Offcanvas.Body>
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Nav.Link><Link className='nav-link' to="/new-post">Blank canvas</Link></Nav.Link>
                    <Nav.Link><Link className='nav-link' to ="/personalprofile">ProfilePicture</Link></Nav.Link>
                    <Nav.Link><span className='nav-link' onClick={handleLogOut}>Logout</span></Nav.Link>
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        ) : (
          <>
            <Navbar bg="light" expand={false}>
              <Nav.Link><Link className='nav-link' to="/login">Log In</Link></Nav.Link>
              <Nav.Link><Link className='nav-link' to="/register">Sign Up</Link></Nav.Link>
            </Navbar>
          </>
        )}
    </div>
  )
}

export default Header
