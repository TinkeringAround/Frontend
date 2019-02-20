import styled from 'styled-components'

//-------------------------------------------------------------------------//
const Container = styled.div`
  position: ${props => (props.position == null ? 'static' : props.position)};
  top: ${props => (props.top == null ? 'auto' : props.top)};
  left: ${props => (props.left == null ? 'auto' : props.left)};
  bottom: ${props => (props.bottom == null ? 'auto' : props.bottom)};
  right: ${props => (props.right == null ? 'auto' : props.right)};

  margin: ${props => (props.margin == null ? '0' : props.margin)};
  margin-top: ${props => (props.marginTop == null ? '0' : props.marginTop)};
  margin-right: ${props => (props.marginRight == null ? '0' : props.marginRight)};
  margin-bottom: ${props => (props.marginBottom == null ? '0' : props.marginBottom)};
  margin-left: ${props => (props.marginLeft == null ? '0' : props.marginLeft)};

  padding: ${props => (props.padding == null ? '0' : props.padding)};
  padding-top: ${props => (props.paddingTop == null ? '0' : props.paddingTop)};
  padding-right: ${props => (props.paddingRight == null ? '0' : props.paddingRight)};
  padding-bottom: ${props => (props.paddingBottom == null ? '0' : props.paddingBottom)};
  padding-left: ${props => (props.paddingLeft == null ? '0' : props.paddingLeft)};

  width: ${props => (props.width == null ? '100%' : props.width)};
  height: ${props => (props.height == null ? '100%' : props.height)};

  background-color: ${props =>
    props.backgroundColor == null ? props.theme.colors.white : props.backgroundColor};

  overflow-y: ${props => (props.overflowY == null ? 'auto' : props.overflowY)};
  overflow-x: ${props => (props.overflowX == null ? 'auto' : props.overflowX)};

  z-index: ${props => (props.zIndex == null ? '1' : props.zIndex)};
`
export default Container
