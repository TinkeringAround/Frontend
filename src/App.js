import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import axios from 'axios'

// Context
import AppContext from './context/app-context'

// Theme
import Theme from './theme'

// Components
import Login from './components/Login'

//-------------------------------------------------------------------------//
export default () => {
  const [authenticated, setAuthenticated] = React.useState(false)

  const login = (email, password) => {
    axios
      .post('http://157.230.76.219:30000/api/v1/users/login', {
        email: email,
        password: password
      })
      .then(function(response) {
        setAuthenticated(true)
        console.log(response)
      })
      .catch(function(error) {
        console.log(error)
      })
  }

  const logout = () => {
    // save everything
    setAuthenticated(false)
  }

  const routes = authenticated ? (
    <React.Fragment />
  ) : (
    <Switch>
      <Route exact to="/" component={Login} />
      <Redirect to="/" />
    </Switch>
  )

  return (
    <AppContext.Provider
      value={{
        authenticated: authenticated,
        login: (email, password) => {
          login(email, password)
        },
        logout: () => {
          logout()
        }
      }}
    >
      <ThemeProvider theme={Theme}>
        <Router>{routes}</Router>
      </ThemeProvider>
    </AppContext.Provider>
  )
}
