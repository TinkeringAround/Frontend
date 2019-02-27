import React, { useState } from 'react'
import Cookie from 'react-cookies'
import { ThemeProvider } from 'styled-components'

// Context
import AppContext from './context/app-context'

// Theme
import Theme from './theme'

// Hooks
import useMedia from './components/hooks/useMedia'

// Components
import Page from './components/atoms/AnimatedContainer'
import Login from './components/Login'
import Home from './components/Home'
import Game from './components/Game'

// Mock
import mock from './mock'

const Pagestyles = {
  top: '0px',
  width: '100%',
  height: '100%',
  backgroundColor: Theme.colors.white
}

//-------------------------------------------------------------------------//
const App = () => {
  const [user, setUser] = useState(null)
  const [activity, setActivity] = useState(null)
  const [stage, setStage] = useState(null)
  const isLarge = useMedia(['(min-width: 465px)'], [true], false)
  const isSmall = useMedia(['(max-width: 360px)'], [true], false)

  // Initial Setup
  if (user == null) {
    const data = Cookie.load('user')
    if (data != null && data.hasOwnProperty('userID')) {
      setTimeout(() => {
        setUser(mock)
      }, 1000)
    }
  }

  const login = data => {
    Cookie.save('user', data, { path: '/' })
    setUser(mock)
  }

  const logout = () => {
    // save everything via API
    Cookie.remove('user')

    setStage(null)
    setActivity(null)
    setUser(null)
  }

  console.log('user: ', user)
  console.log('activity: ', activity)
  console.log('stage: ', stage)

  return (
    <AppContext.Provider
      value={{
        user: user,
        activity: activity,
        stage: stage,
        login: data => {
          login(data)
        },
        logout: () => {
          logout()
        },
        setActivity: activity => {
          setActivity(activity)
        },
        setStage: stage => {
          setStage(stage)
        }
      }}
    >
      <ThemeProvider theme={Theme}>
        {!isLarge && !isSmall ? (
          <React.Fragment>
            <Page styles={Pagestyles} animate={user == null}>
              <Login />
            </Page>
            <Page styles={Pagestyles} animate={user != null && stage == null}>
              <Home />
            </Page>
            <Page styles={Pagestyles} animate={user != null && stage != null}>
              <Game />
            </Page>
          </React.Fragment>
        ) : (
          <h1
            style={{
              fontSize: isSmall ? '18px' : '25px',
              margin: isSmall ? '225px auto' : '300px auto',
              textAlign: 'center'
            }}
          >
            Diese App ist nur für Mobile ausgelegt mit einer min. Weite von 350px und einer max.
            Weite von 465px.
          </h1>
        )}
      </ThemeProvider>
    </AppContext.Provider>
  )
}

export default App
