import styled from 'styled-components'

//-------------------------------------------------------------------------//
const Container = styled.div`
  position: ${props => (props.position == null ? 'static' : props.position)};
  ${props =>
    props.position != null
      ? `  top: ${props.top == null ? 'auto' : props.top};
  left: ${props.left == null ? 'auto' : props.left};
  bottom: ${props.bottom == null ? 'auto' : props.bottom};
  right: ${props.right == null ? 'auto' : props.right};`
      : ''}

  margin: ${props => (props.margin == null ? '0' : props.margin)};
  ${props =>
    props.margin == null
      ? `margin-top: ${props.marginTop == null ? 'auto' : props.marginTop};
  margin-right: ${props.marginRight == null ? 'auto' : props.marginRight};
  margin-bottom: ${props.marginBottom == null ? 'auto' : props.marginBottom};
  margin-left: ${props.marginLeft == null ? 'auto' : props.marginLeft};`
      : ''}

  padding: ${props => (props.padding == null ? '0' : props.padding)};
  ${props =>
    props.padding == null
      ? `padding-top: ${props.paddingTop == null ? 'auto' : props.paddingTop};
  padding-right: ${props.paddingRight == null ? 'auto' : props.paddingRight};
  padding-bottom: ${props.paddingBottom == null ? 'auto' : props.paddingBottom};
  padding-left: ${props.paddingLeft == null ? 'auto' : props.paddingLeft};`
      : ''}

  border: ${props => (props.border == null ? 'none' : props.border)};
  ${props =>
    props.border == null
      ? `border-top: ${props.borderTop == null ? 'auto' : props.borderTop};
  border-right: ${props.borderRight == null ? 'auto' : props.borderRight};
  border-bottom: ${props.borderBottom == null ? 'auto' : props.borderBottom};
  border-left: ${props.borderLeft == null ? 'auto' : props.borderLeft};`
      : ''}

  width: ${props => (props.width == null ? '100%' : props.width)};
  height: ${props => (props.height == null ? '100%' : props.height)};

  background-color: ${props =>
    props.backgroundColor == null ? 'transparent' : props.backgroundColor};

  overflow-y: ${props => (props.overflowY == null ? 'auto' : props.overflowY)};
  overflow-x: ${props => (props.overflowX == null ? 'auto' : props.overflowX)};

  z-index: ${props => (props.zIndex == null ? '0' : props.zIndex)};
`
export default Container
