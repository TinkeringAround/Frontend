import styled from 'styled-components'

//--------------------------------------------------------------------------//
const Flex = styled.div`
  display: flex;
  flex-direction: ${props => (props.flexDirection == null ? 'row' : props.flexDirection)};
  justify-content: ${props => (props.justifyContent == null ? 'center' : props.justifyContent)};
  align-items: ${props => (props.alignItems == null ? 'center' : props.alignItems)};

  width: ${props => (props.width == null ? '100%' : props.width)};
  height: ${props => (props.height == null ? '100%' : props.height)};

  margin: ${props => (props.margin == null ? '0' : props.margin)};
  margin-top: ${props => (props.marginTop == null ? '0' : props.marginTop)};
  margin-right: ${props => (props.marginRight == null ? 'auto' : props.marginRight)};
  margin-bottom: ${props => (props.marginBottom == null ? '0' : props.marginBottom)};
  margin-left: ${props => (props.marginLeft == null ? 'auto' : props.marginLeft)};

  padding: ${props => (props.padding == null ? '0' : props.padding)};
  padding-top: ${props => (props.paddingTop == null ? '0' : props.paddingTop)};
  padding-right: ${props => (props.paddingRight == null ? '0' : props.paddingRight)};
  padding-bottom: ${props => (props.paddingBottom == null ? '0' : props.paddingBottom)};
  padding-left: ${props => (props.paddingLeft == null ? '0' : props.paddingLeft)};

  overflow-y: ${props => (props.overflowY == null ? 'auto' : props.overflowY)};
  overflow-x: ${props => (props.overflowX == null ? 'auto' : props.overflowX)};
`
export default Flex
