import React, { useState, useContext } from 'react'

// Context
import AppContext from '../../context/app-context'

// Theme
import Theme from '../../theme'

// Atoms
import Flex from '../atoms/Flex'
import Text from '../atoms/Text'
import Wrapper from '../atoms/AnimatedContainer'

// Components
import Header from './header'
import Spinner from '../Spinner/'
import Activity from './activity'
import Level from './level'

// Mock
import userData from './mock'

//--------------------------------------------------------------------------//
export default () => {
  const appContext = useContext(AppContext)
  const [activities, setActivities] = useState(null)
  const [loading, setLoading] = useState(true)
  const [activity, setActivity] = useState(null)

  if (appContext.user != null && appContext.user.hasOwnProperty('userID')) {
    // fetch activity data
    setTimeout(() => {
      setActivities(userData.activities)
      setLoading(false)
    }, 1000)
  }

  const toLevels = activity => {
    setActivity(activity)
  }

  const toActivities = () => {
    setActivity(null)
  }

  const playGame = (activity, levelIndex, stageIndex) => {
    appContext.setStage(activity.game.levels[levelIndex].stages[stageIndex])
    setActivity(null)
  }

  return (
    <React.Fragment>
      <Header showBack={activity != null} toActivities={toActivities} />
      {loading ? (
        <Spinner />
      ) : (
        <React.Fragment>
          <Wrapper
            animate={activity == null}
            styles={{ width: '100%', height: 'auto', top: '60px' }}
          >
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
                textAlign="center"
                marginBottom="10px"
              >
                Aktivitäten
              </Text>

              {activities.map((activity, index) => {
                return <Activity key={index} activity={activity} toLevels={toLevels} />
              })}
            </Flex>
          </Wrapper>
          <Wrapper
            animate={activity != null}
            styles={{ width: '100%', height: 'auto', top: '60px' }}
          >
            <Flex
              width="90%"
              height="auto"
              marginTop="30px"
              flexDirection="column"
              justifyContent="flex-start"
              alignItems="center"
            >
              {activity != null ? (
                <Level activity={activity} play={playGame} />
              ) : (
                <React.Fragment />
              )}
            </Flex>
          </Wrapper>
        </React.Fragment>
      )}
    </React.Fragment>
  )
}
