import React, { useContext } from 'react'

// Context
import AppContext from '../../../context/app-context'

// Theme
import Theme from '../../../theme'

// Atoms
import Flex from '../../atoms/Flex'
import Container from '../../atoms/Container'
import Text from '../../atoms/Text'
import Button from '../../atoms/Button'
import SVG from '../../atoms/Svg'

// Icons
import icons from '../../../assets/icons'
import Box from '../../atoms/Box'

//--------------------------------------------------------------------------//
export default props => {
  const appContext = useContext(AppContext)
  const { activity, setStage } = appContext
  const { game, achievements } = activity
  const { levels, meta } = game
  const { setLoading } = props

  return levels.map((level, levelIndex) => {
    const date = new Date(meta.startDate.getTime() + levelIndex * (24 * 60 * 60 * 1000))
    const today = new Date()

    if (date > today) return <React.Fragment />

    return (
      <Container
        key={'Game-' + levelIndex}
        height={150 + 150 * parseInt((level.length - 1) / 2) + 'px'}
        backgroundColor={Theme.colors.white}
        marginTop="20px"
        marginBottom="10px"
      >
        <Flex flexDirection="column" justifyContent="flex-start" alignItems="center">
          <Text
            color={Theme.textColors.lightGrey}
            fontSize={Theme.fontSizes.medium}
            margin="0 auto"
          >
            {date.getDate() + '.' + date.toLocaleString('de', { month: 'long' })}
          </Text>
          <Flex justifyContent="center" alignItems="center" flexWrap="wrap">
            {level.map((stage, stageIndex) => {
              const solved = stage.solution === achievements[levelIndex][stageIndex]
              const svg = icons.getSVG(stage.type)

              return (
                <Container
                  key={'Game-' + levelIndex + '-Stage-' + stageIndex}
                  width="120px"
                  height="120px"
                  margin="5px 10px"
                  position="relative"
                >
                  <SVG
                    position="absolute"
                    width="55px"
                    height="55px"
                    margin="0"
                    bottom="0px"
                    right="0px"
                    fill={solved ? Theme.colors.yellow : Theme.colors.lightGrey}
                    stroke="white"
                    strokeWidth="20"
                    viewBox={icons.getSVG('crown').viewBox}
                    zIndex="100"
                  >
                    {icons.getSVG('crown').path}
                  </SVG>
                  <Flex width="100%" height="100%" justifyContent="center" alignItems="center">
                    <Button
                      width="90%"
                      height="90%"
                      margin="auto"
                      backgroundColor={solved ? Theme.colors.yellow : Theme.colors.lightGrey}
                      borderRadius={Theme.borderRadius.huge}
                      onClick={() => {
                        setLoading(true)
                        setStage({
                          data: activity.game.levels[levelIndex][stageIndex],
                          levelIndex: levelIndex,
                          stageIndex: stageIndex,
                          solved: solved
                        })
                      }}
                    >
                      <Box
                        width="85%"
                        height="85%"
                        borderRadius={Theme.borderRadius.huge}
                        backgroundColor={Theme.colors.white}
                      >
                        <Flex justifyContent="center" alignItems="center">
                          <SVG
                            width="45px"
                            height="45px"
                            margin="auto"
                            fill={solved ? Theme.colors.yellow : Theme.colors.lightGrey}
                            viewBox={svg.viewBox}
                          >
                            {svg.path}
                          </SVG>
                        </Flex>
                      </Box>
                    </Button>
                  </Flex>
                </Container>
              )
            })}
          </Flex>
        </Flex>
      </Container>
    )
  })
}
