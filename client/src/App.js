import React from 'react'
// import axios from 'axios'
import { Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'

import { getToken } from './helpers/auth'

import Header from './components/Header'
import Footer from './components/Footer'
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'

function HomePage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    if (getToken()) {
      setIsLoggedIn(true)
    } else {
      setIsLoggedIn(false)
    }
  }, [])

  return (
    <>
      <header>
        <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      </header>
      <main>
        <Home />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

function UserRegister() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    if (getToken()) {
      setIsLoggedIn(true)
    } else {
      setIsLoggedIn(false)
    }
  }, [])

  return (
    <>
      <header>
        <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      </header>
      <main>
        <Register />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

function UserLogin() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    if (getToken()) {
      setIsLoggedIn(true)
    } else {
      setIsLoggedIn(false)
    }
  }, [])

  return (
    <>
      <header>
        <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      </header>
      <main>
        <Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

function App() {

  return (
    <>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/register" element={<UserRegister />} />
        <Route path="/login" element={<UserLogin />} />
      </Routes>
    </>
  )
}

export default App
