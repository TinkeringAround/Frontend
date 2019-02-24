import styled from 'styled-components'

//--------------------------------------------------------------------------//
const Flex = styled.div`
  display: flex;
  flex-direction: ${props => (props.flexDirection == null ? 'row' : props.flexDirection)};
  justify-content: ${props => (props.justifyContent == null ? 'center' : props.justifyContent)};
  align-items: ${props => (props.alignItems == null ? 'center' : props.alignItems)};

  flex-wrap: ${props => (props.flexWrap == null ? 'nowrap' : props.flexWrap)};

  width: ${props => (props.width == null ? '100%' : props.width)};
  height: ${props => (props.height == null ? '100%' : props.height)};

  margin: ${props => (props.margin == null ? '0' : props.margin)};
  ${props =>
    props.margin == null
      ? `margin-top: ${props.marginTop == null ? 'auto' : props.marginTop};
  margin-right: ${props.marginRight == null ? 'auto' : props.marginRight};
  margin-bottom: ${props.marginBottom == null ? 'auto' : props.marginBottom};
  margin-left: ${props.marginLeft == null ? 'auto' : props.marginLeft};`
      : ''}
  
  background-color: ${props =>
    props.backgroundColor == null ? 'transparent' : props.backgroundColor};

  padding: ${props => (props.padding == null ? '0' : props.padding)};
  ${props =>
    props.padding == null
      ? `padding-top: ${props.paddingTop == null ? 'auto' : props.paddingTop};
  padding-right: ${props.paddingRight == null ? 'auto' : props.paddingRight};
  padding-bottom: ${props.paddingBottom == null ? 'auto' : props.paddingBottom};
  padding-left: ${props.paddingLeft == null ? 'auto' : props.paddingLeft};`
      : ''}
      
  overflow-y: ${props => (props.overflowY == null ? 'auto' : props.overflowY)};
  overflow-x: ${props => (props.overflowX == null ? 'auto' : props.overflowX)};
`
export default Flex
