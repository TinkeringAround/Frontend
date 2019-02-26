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

//--------------------------------------------------------------------------//
export default () => {
  const appContext = useContext(AppContext)
  const { user, activity, stage } = appContext
  const [loading, setLoading] = useState(true)

  if (user != null && stage == null) {
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }

  return (
    <React.Fragment>
      <Header setLoading={setLoading} />
      {loading ? (
        <Spinner />
      ) : (
        <React.Fragment>
          <Wrapper
            animate={user != null && activity == null && stage == null}
            styles={{ width: '100%', height: 'auto', top: '60px' }}
          >
            <Flex
              width="95%"
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
              {user != null ? (
                user.activities.map((activity, index) => {
                  return <Activity key={index} activity={activity} />
                })
              ) : (
                <React.Fragment />
              )}
            </Flex>
          </Wrapper>
          <Wrapper
            animate={user != null && activity != null && stage == null}
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
                <React.Fragment>
                  <Text
                    color={Theme.textColors.darkGrey}
                    fontSize={Theme.fontSizes.xxxlarge}
                    textAlign="center"
                    marginBottom="10px"
                  >
                    Level und Rätsel
                  </Text>
                  <Level setLoading={setLoading} />
                </React.Fragment>
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
