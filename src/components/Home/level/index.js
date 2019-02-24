import React from 'react'

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

//--------------------------------------------------------------------------//
export default props => {
  const { activity, play } = props
  const { game, achievements } = activity
  const { levels, meta } = game

  return levels.map((level, levelIndex) => {
    const date = new Date(meta.startDate.getTime() + levelIndex * (24 * 60 * 60 * 1000))
    const today = new Date()

    if (date > today) return <React.Fragment />

    console.log(level.stages.length)
    console.log(parseInt((level.stages.length - 1) / 2))

    return (
      <Container
        key={'Game-' + levelIndex}
        height={220 + 150 * parseInt((level.stages.length - 1) / 2) + 'px'}
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
          <Flex justifyContent="center" alignItems="center" marginTop="15px" flexWrap="wrap">
            {level.stages.map((stage, stageIndex) => {
              const solved =
                stage.puzzle.solution === achievements[levelIndex].forLevels[stageIndex]
                  ? true
                  : false
              const svg = icons.getSVG(stage.type)

              return (
                <Button
                  key={'Game-' + levelIndex + '-Stage-' + stageIndex}
                  width="120px"
                  height="120px"
                  margin="20px"
                  backgroundColor={solved ? Theme.colors.disabled : Theme.colors.lightBlue}
                  borderRadius="100px"
                  onClick={() => play(activity, levelIndex, stageIndex)}
                >
                  <Flex justifyContent="center" alignItems="center">
                    <SVG
                      width="80px"
                      height="80px"
                      margin="auto"
                      fill={solved ? Theme.textColors.lightGrey : Theme.textColors.white}
                      viewBox={svg.viewBox}
                    >
                      {svg.path}
                    </SVG>
                  </Flex>
                </Button>
              )
            })}
          </Flex>
        </Flex>
      </Container>
    )
  })
}

//
