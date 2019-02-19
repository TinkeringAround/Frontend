import styled from 'styled-components'

//--------------------------------------------------------------------------//
const Flex = styled.div`
  display: flex;
  flex-direction: ${props => (props.flexDirection == null ? 'row' : props.flexDirection)};
  justify-content: ${props => (props.justifyContent == null ? 'center' : props.justifyContent)};
  align-items: ${props => (props.alignItems == null ? 'center' : props.alignItems)};

  width: ${props => (props.width == null ? '100%' : props.width)};
  height: ${props => (props.height == null ? '100%' : props.height)};

  margin-right: auto;
  margin-left: auto;

  overflow-y: scroll;
  overflow-x: hidden;
`
export default Flex
