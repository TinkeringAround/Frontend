import styled from 'styled-components'

//--------------------------------------------------------------------------//
const Box = styled.div`
  width: ${props => (props.width == null ? 'auto' : props.width)};
  height: ${props => (props.height == null ? 'auto' : props.height)};

  margin: ${props => (props.margin == null ? 'auto' : props.margin)};
  padding: ${props => (props.padding == null ? '0' : props.padding)};

  background-color: ${props => (props.backgroundColor == null ? '#FFF' : props.backgroundColor)};

  border: ${props => (props.border == null ? 'none' : props.border)};
  border-radius: ${props => (props.borderRadius == null ? '0' : props.borderRadius)};
`
export default Box
