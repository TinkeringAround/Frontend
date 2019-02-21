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
import Activity from './activity'
import Levels from './level'
import Wrapper from '../atoms/AnimatedContainer'

// Mock
import userData from './mock'

//--------------------------------------------------------------------------//
export default () => {
  const appContext = useContext(AppContext)
  const [loading, setLoading] = useState(true)
  const [game, selectGame] = useState(null)
  const [achievements, selectAchievements] = useState(null)

  let finished = true
  const today = new Date()
  userData.activities.forEach(activity => {
    if (!activity.meta.completed && activity.game.meta.startDate < today) {
      finished = false
    }
  })

  if (appContext.user != null && appContext.user.hasOwnProperty('userID')) {
    // fetch user data
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }

  const toHome = () => {
    selectGame(null)
  }

  const toLevels = (game, achievements) => {
    selectGame(game)
    selectAchievements(achievements)
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
                color={Theme.textColors.lightGrey}
                fontSize={Theme.fontSizes.normal}
                marginBottom="20px"
              >
                {finished
                  ? 'Es gibt leider keine neuen Rätsel für dich.'
                  : 'Es gibt neue Rätsel für dich!'}
              </Text>

              {userData.activities.map(activity => {
                return <Activity onClick={toLevels} key={activity.game._id} activity={activity} />
              })}
            </Flex>
          </Wrapper>

          <Wrapper animate={game != null} styles={{ width: '100%', height: 'auto', top: '60px' }}>
            <Flex
              width="90%"
              flexDirection="column"
              justifyContent="flex-start"
              alignItems="center"
              marginTop="30px"
            >
              {game != null ? (
                <Levels
                  meta={game.meta}
                  levels={game.levels}
                  achievements={achievements}
                  toGame={toGame}
                />
              ) : (
                ''
              )}
            </Flex>
          </Wrapper>
        </React.Fragment>
      )}
    </React.Fragment>
  )
}
