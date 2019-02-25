import styled from 'styled-components'

//--------------------------------------------------------------------------//
const Box = styled.div`
  width: ${props => (props.width == null ? 'auto' : props.width)};
  height: ${props => (props.height == null ? 'auto' : props.height)};

  margin: ${props => (props.margin == null ? 'auto' : props.margin)};
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

  background-color: ${props =>
    props.backgroundColor == null ? 'transparent' : props.backgroundColor};

  border: ${props => (props.border == null ? 'none' : props.border)};
  ${props =>
    props.border == null
      ? `border-top: ${props.borderTop == null ? 'auto' : props.borderTop};
  border-right: ${props.borderRight == null ? 'auto' : props.borderRight};
  border-bottom: ${props.borderBottom == null ? 'auto' : props.borderBottom};
  border-left: ${props.borderLeft == null ? 'auto' : props.borderLeft};`
      : ''}

  border-radius: ${props => (props.borderRadius == null ? '0' : props.borderRadius)};
  box-shadow: ${props => (props.boxShadow == null ? '0' : props.boxShadow)};

  z-index: ${props => (props.zIndex == null ? '0' : props.zIndex)};
`
export default Box
