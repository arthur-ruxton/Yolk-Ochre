import * as React from 'react'
import { removeToken } from '../helpers/auth'
import { useNavigate } from 'react-router-dom'
// import SearchBar from '../pages/SearchBar'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Offcanvas from 'react-bootstrap/Offcanvas'
import { HouseDoor, Globe, Star, PersonCircle, Easel, DoorClosed } from 'react-bootstrap-icons'

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
      <div className="nav-div">
        {isLoggedIn ?
          (
            <Navbar expand={false}>
              <Container fluid>
                <Nav.Link href="/home"><HouseDoor /></Nav.Link>
                <Nav.Link href="/explore"><Globe /></Nav.Link>
                <Nav.Link href="/favourites"><Star /></Nav.Link>
                <Navbar.Toggle aria-controls="offcanvasNavbar" className="navbar-toggle"/>
                <Navbar.Offcanvas
                  id="offcanvasNavbar"
                  aria-labelledby="offcanvasNavbarLabel"
                  placement="end"
                  className='off-canvas'
                >
                  <Offcanvas.Body>
                    <Nav className="justify-content-end flex-grow-1 pe-3">
                      <Nav.Link href="/personalprofile"><PersonCircle /></Nav.Link>
                      <Nav.Link href="/new-post"><Easel /></Nav.Link>
                      <Nav.Link onClick={handleLogOut}><DoorClosed /></Nav.Link>
                    </Nav>
                  </Offcanvas.Body>
                </Navbar.Offcanvas>
              </Container>
            </Navbar>
          ) : (
            <>
              <Navbar bg="light" expand={false}>
                <Nav.Link href="/login">Log In</Nav.Link>
                <Nav.Link href="/register">Sign Up</Nav.Link>
              </Navbar>
            </>
          )}
      </div>
    </div>
  )
}

export default Header
