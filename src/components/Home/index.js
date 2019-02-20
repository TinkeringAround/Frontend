import React from 'react'

// Theme
import Theme from '../../theme'

// Atoms
import Flex from '../atoms/Flex'
import Container from '../atoms/Container'

// Components
import Header from './Header'
import Puzzle from './Puzzle'

//--------------------------------------------------------------------------//
export default () => {
  return (
    <React.Fragment>
      <Container width="100vw" height="100vh" backgroundColor={Theme.colors.white}>
        <Header />
      </Container>
      <Container height="auto" position="absolute" left="0" top="20%" overflow="scroll">
        <Flex width="90%" flexDirection="column" justifyContent="flex-start" alignItems="center">
          <Puzzle />
          <Puzzle />
          <Puzzle />
          <Puzzle />
          <Puzzle />
          <Puzzle />
          <Puzzle />
          <Puzzle />
          <Puzzle />
        </Flex>
      </Container>
    </React.Fragment>
  )
}
