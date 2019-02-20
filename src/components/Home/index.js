import React, { useContext } from 'react'

// Context
import AppContext from '../../context/app-context'

// Theme
import Theme from '../../theme'

// Atoms
import Flex from '../atoms/Flex'
import Container from '../atoms/Container'
import Text from '../atoms/Text'

// Components
import Header from './Header'
import Game from './Game'

// Mock
const userData = {
  _id: '1234345678910111213',
  email: 't.maier@gingco.net',
  username: 'Thomas',
  password: '$2a$10$OOXyjzvKxrHCz1wADGQneuH8Mea6tsp.LVBwUAAeE0CKKuN.7EG.m',
  meta: {
    createdAt: new Date(2019, 2, 15),
    status: 'active',
    code: '670373'
  },
  activities: [
    {
      meta: {
        completed: false
      },
      game: {
        _id: '98765432101112131',
        title: 'Adventskalender',
        description: 'Viel Spaß beim ersten digitalen Adventskalender!',
        meta: {
          servePuzzlesDaily: false,
          startDate: new Date(2019, 1, 15)
        },
        levels: [
          {
            stages: [
              {
                title: 'Wo ist das?',
                comment: 'Zum Einstieg ein relativ leichtes Rätsel für dich.',
                clue: 'Es befindet sich irgendwo in unserer Wohnung.',
                type: 'picture',
                puzzle: {
                  task: '/assets/images/badezimmer.jpeg',
                  solution: 'Badezimmer',
                  hint: ''
                }
              },
              {
                title: 'Was ist die Antwort?',
                comment: 'Das sollte ja kein Problem für dich sein.',
                clue: '',
                type: 'text',
                puzzle: {
                  task: 'Was ist rot, rund und gesund?',
                  solution: 'Apfel',
                  hint: ''
                }
              }
            ]
          },
          {
            stages: [
              {
                title: 'Errätst du den Code?',
                comment: 'Richtige Kombination führt zu einem neuer Hinweis.',
                clue: 'Setze die richtigen Felder, dann bekommst du den nächsten Hinweis.',
                type: 'matrix',
                puzzle: {
                  task: '6,4',
                  solution: '11, 24, 33, 52',
                  hint: 'Unter dem Kühlschrank'
                }
              }
            ]
          }
        ]
      },
      achievements: [
        {
          forLevels: ['Badezimmer', '']
        },
        {
          forLevels: ['']
        }
      ]
    }
  ]
}

//--------------------------------------------------------------------------//
export default () => {
  const appContext = useContext(AppContext)

  let finished = true
  const today = new Date()
  userData.activities.forEach(activity => {
    if (!activity.meta.completed && activity.game.meta.startDate < today) {
      finished = false
    }
  })

  return (
    <React.Fragment>
      <Container width="100vw" height="100vh" backgroundColor={Theme.colors.white}>
        <Header />
        <Container height="auto" position="absolute" left="0" top="60px" overflow="scroll">
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
              return (
                <Game
                  key={activity.game._id}
                  single={userData.activities.length > 1 ? false : true}
                  game={activity}
                />
              )
            })}
          </Flex>
        </Container>
      </Container>
    </React.Fragment>
  )
}
