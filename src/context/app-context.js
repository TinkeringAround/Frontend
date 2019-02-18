import React from 'react'

const AppContext = React.createContext({
  authenticated: false,
  login: (email, password) => {},
  logout: () => {}
})

export default AppContext
