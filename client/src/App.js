import React from 'react'
// import axios from 'axios'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'

import { getToken } from './helpers/auth'

import Header from './components/Header'
import Footer from './components/Footer'

import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import Explore from './pages/Explore'
import Profile from './pages/Profile'
import Favourites from './pages/Favourites'
import NewPost from './pages/NewPost'
import ViewOnePost from './pages/ViewOnePost'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    if (getToken()) {
      setIsLoggedIn(true)
    } else {
      setIsLoggedIn(false)
    }
  }, [])

  return (
    <Router>
      <header>
        <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      </header>
      <main>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/home" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/profile" element={<Profile isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/view-one-post/:id" element={<ViewOnePost />} />
          <Route path="/new-post" element={<NewPost />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </Router>
  )
}

export default App