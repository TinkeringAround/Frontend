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

    return (
      <Container
        key={'Game-' + levelIndex}
        height={135 + 120 * (level.stages.length - 1) + 'px'}
        backgroundColor={Theme.colors.white}
        marginTop="20px"
        marginBottom="10px"
      >
        <Flex flexDirection="column" justifyContent="flex-start" alignItems="center">
          <Text
            color={Theme.textColors.lightGrey}
            fontSize={Theme.fontSizes.normal}
            margin="0 auto"
          >
            {date.getDate() + '.' + date.toLocaleString('de', { month: 'long' })}
          </Text>
          {level.stages.map((stage, stageIndex) => {
            const solved =
              stage.puzzle.solution === achievements[levelIndex].forLevels[stageIndex]
                ? true
                : false
            const svg = icons.getSVG(stage.type)

            return (
              <Button
                key={'Game-' + levelIndex + '-Stage-' + stageIndex}
                width="100%"
                height="100px"
                margin="5px auto 10px auto"
                backgroundColor={solved ? Theme.colors.disabled : Theme.colors.lightBlue}
                borderRadius="12px"
                boxShadow={`0 5px 0 ${solved ? Theme.colors.lightGrey : Theme.colors.darkBlue}`}
                onClick={() => play(activity, levelIndex, stageIndex)}
              >
                <Flex justifyContent="space-around" alignItems="center">
                  <SVG
                    width="80px"
                    height="80px"
                    margin="auto 20px"
                    fill={solved ? Theme.textColors.lightGrey : Theme.textColors.white}
                    viewBox={svg.viewBox}
                  >
                    {svg.path}
                  </SVG>
                  <Flex flexDirection="column" justifyContent="center" alignItems="center">
                    <Text
                      width="90%"
                      margin="auto auto 8px 0"
                      fontSize={Theme.fontSizes.large}
                      color={solved ? Theme.textColors.lightGrey : Theme.textColors.white}
                    >
                      {stage.title}
                    </Text>
                    <Text
                      width="90%"
                      margin="0 auto auto 0"
                      fontSize={Theme.fontSizes.default}
                      color={solved ? Theme.textColors.lightGrey : Theme.textColors.white}
                    >
                      {stage.comment}
                    </Text>
                  </Flex>
                </Flex>
              </Button>
            )
          })}
        </Flex>
      </Container>
    )
  })
}
