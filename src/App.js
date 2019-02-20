import React, { useState, useEffect } from 'react'
import Cookie from 'react-cookies'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import axios from 'axios'

// Context
import AppContext from './context/app-context'

// Theme
import Theme from './theme'

// Components
import Login from './components/Login'
import Home from './components/Home'

//-------------------------------------------------------------------------//
export default () => {
  const [authenticated, setAuthenticated] = useState(false)
  const [userData, setUserData] = useState(null)

  if (!authenticated && userData == null) {
    const data = Cookie.load('userData')
    if (data != null && data.hasOwnProperty('userID')) {
      setUserData(data)
      setAuthenticated(true)
    }
  }

  const login = (email, password) => {
    axios
      .post('http://157.230.76.219:30000/api/v1/users/login', {
        email: email,
        password: password
      })
      .then(function(response) {
        Cookie.save('userData', response.data.data, { path: '/' })
        setUserData(response.data.data)
        setAuthenticated(true)
        console.log(response.data.data)
      })
      .catch(function(error) {
        console.log(error)
      })
  }

  const logout = () => {
    // save everything
    Cookie.remove('userData')
    setUserData(null)
    setAuthenticated(false)
  }

  useEffect(() => {
    console.log('Updated.')
  })

  const routes = authenticated ? (
    <Switch>
      <Route to="/" component={Home} />
      <Redirect to="/" />
    </Switch>
  ) : (
    <Switch>
      <Route to="/" component={Login} />
      <Redirect to="/" />
    </Switch>
  )

  console.log('Authenticated: ', authenticated)
  console.log('UserData: ', userData)

  return (
    <AppContext.Provider
      value={{
        login: (email, password) => {
          login(email, password)
        },
        logout: () => {
          logout()
        },
        user: userData
      }}
    >
      <ThemeProvider theme={Theme}>
        <Router>{routes}</Router>
      </ThemeProvider>
    </AppContext.Provider>
  )
}
