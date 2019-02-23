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

const Pagestyles = {
  top: '0px',
  width: '100%',
  height: '100%',
  backgroundColor: Theme.colors.white
}

//-------------------------------------------------------------------------//
const App = () => {
  const [userData, setUserData] = useState(null)
  const [stage, setStage] = useState(null)
  const isLarge = useMedia(['(min-width: 800px)'], [true], false)

  // Initial Setup
  if (userData == null) {
    const data = Cookie.load('userData')
    if (data != null && data.hasOwnProperty('userID')) {
      setTimeout(() => {
        setUserData(data)
      }, 1000)
    }
  }

  const login = data => {
    Cookie.save('userData', data, { path: '/' })
    setUserData(data)
  }

  const logout = () => {
    // save everything via API
    Cookie.remove('userData')
    setStage(null)
    setUserData(null)
  }

  console.log('UserData: ', userData)
  console.log('Stage: ', stage)

  return (
    <AppContext.Provider
      value={{
        login: data => {
          login(data)
        },
        logout: () => {
          logout()
        },
        setStage: stage => {
          setStage(stage)
        },
        user: userData
      }}
    >
      <ThemeProvider theme={Theme}>
        {!isLarge ? (
          <React.Fragment>
            <Page styles={Pagestyles} animate={userData == null}>
              <Login />
            </Page>
            <Page styles={Pagestyles} animate={userData != null && stage == null}>
              <Home />
            </Page>
            <Page styles={Pagestyles} animate={userData != null && stage != null}>
              <Game stage={stage} />
            </Page>
          </React.Fragment>
        ) : (
          <h1 style={{ margin: '300px auto', textAlign: 'center' }}>
            Diese App ist nur für Mobile ausgelegt.
          </h1>
        )}
      </ThemeProvider>
    </AppContext.Provider>
  )
}

export default App
