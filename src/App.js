import React, { useState } from 'react'
import Cookie from 'react-cookies'
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

// Context
import AppContext from './context/app-context'

// Theme
import Theme from './theme'

// Components
import Login from './components/Login'
import Home from './components/Home'

//-------------------------------------------------------------------------//
const App = props => {
  const [authenticated, setAuthenticated] = useState(false)
  const [userData, setUserData] = useState(null)

  // Initial Setup
  if (!authenticated && userData == null) {
    const data = Cookie.load('userData')
    if (data != null && data.hasOwnProperty('userID')) {
      setUserData(data)
      setAuthenticated(true)
      props.history.push('/home')
    }
  }

  const login = data => {
    Cookie.save('userData', data, { path: '/' })
    setUserData(data)
    setAuthenticated(true)
    props.history.push('/home')
  }

  const logout = () => {
    // save everything via API
    Cookie.remove('userData')
    setUserData(null)
    setAuthenticated(false)
    props.history.push('/login')
  }

  const routes = authenticated ? (
    <Switch>
      <Route to="/home" component={Home} />
      <Redirect to="/home" />
    </Switch>
  ) : (
    <Switch>
      <Route to="/login" component={Login} />
      <Redirect to="/login" />
    </Switch>
  )

  return (
    <AppContext.Provider
      value={{
        login: data => {
          login(data)
        },
        logout: () => {
          logout()
        },
        user: userData
      }}
    >
      <ThemeProvider theme={Theme}>{routes}</ThemeProvider>
    </AppContext.Provider>
  )
}

export default withRouter(App)
