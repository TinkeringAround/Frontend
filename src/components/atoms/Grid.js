import styled from 'styled-components'

//--------------------------------------------------------------------------//
const Grid = styled.div`
  display: grid;

  grid-template-columns: ${props =>
    props.gridTemplateColumns == null ? 'auto' : props.gridTemplateColumns};
  grid-template-rows: ${props =>
    props.gridTemplateRows == null ? 'auto' : props.gridTemplateRows};
  grid-template-areas: ${props =>
    props.gridTemplateAreas == null ? 'row' : props.gridTemplateAreas};

  justify-content: ${props => (props.justifyContent == null ? 'center' : props.justifyContent)};
  align-items: ${props => (props.alignItems == null ? 'center' : props.alignItems)};


  position: ${props => (props.position == null ? 'static' : props.position)};
  ${props =>
    props.position != null
      ? `  top: ${props.top == null ? 'auto' : props.top};
  left: ${props.left == null ? 'auto' : props.left};
  bottom: ${props.bottom == null ? 'auto' : props.bottom};
  right: ${props.right == null ? 'auto' : props.right};`
      : ''}


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
 
 
  overflow-y: ${props => (props.overflowY == null ? 'auto' : props.overflowY)};
  overflow-x: ${props => (props.overflowX == null ? 'auto' : props.overflowX)};
`
export default Grid
