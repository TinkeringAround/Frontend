import React, { useState, useContext } from 'react'

// Context
import AppContext from '../../context/app-context'

// Theme
import Theme from '../../theme'

// Atoms
import Flex from '../atoms/Flex'
import Text from '../atoms/Text'

// Components
import Header from './header'
import Spinner from '../Spinner/'
import Wrapper from '../atoms/AnimatedContainer'
import Box from '../atoms/Box'

// Mock
import userData from './mock'

//--------------------------------------------------------------------------//
export default () => {
  const appContext = useContext(AppContext)
  const [loading, setLoading] = useState(true)
  const [game, selectGame] = useState(null)
  const [achievements, selectAchievements] = useState(null)

  if (appContext.user != null && appContext.user.hasOwnProperty('userID')) {
    // fetch user data
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }

  const toHome = () => {
    selectGame(null)
  }

  const toGame = level => {
    console.log('Game starting...')
  }

  return (
    <React.Fragment>
      <Header enableBack={game != null} back={toHome} />
      {loading ? (
        <Spinner />
      ) : (
        <React.Fragment>
          <Wrapper animate={game == null} styles={{ width: '100%', height: 'auto', top: '60px' }}>
            <Flex
              width="90%"
              flexDirection="column"
              justifyContent="flex-start"
              alignItems="center"
              marginTop="30px"
            >
              <Text
                color={Theme.textColors.darkGrey}
                fontSize={Theme.fontSizes.xxxlarge}
                marginLeft="0px"
                marginBottom="20px"
              >
                Aktivitäten
              </Text>

              {userData.activities.map(activity => {
                console.log('Activity: ', activity)

                return <React.Fragment />
              })}
            </Flex>
          </Wrapper>
        </React.Fragment>
      )}
    </React.Fragment>
  )
}

/*{['Apfel', 'Banane', 'Teppich'].map(activity => {
  console.log('Activity: ', activity)

  return (
    <div className="">
      <h1>{activity}</h1>
    </div>
  )
})}

               {userData.activities.map(activity => {
                  console.log('Activity: ', activity)

                  return (
                    <Box
                      key={activity.game._id}
                      width="100%"
                      height="100%"
                      backgroundColor={Theme.colors.lightBlue}
                      borderRadius="12px"
                    >
                      <Text margin="100px auto" color={Theme.textColors.darkGrey}>
                        {activity.game.title}
                      </Text>
                    </Box>
                  )
                })}
                */
