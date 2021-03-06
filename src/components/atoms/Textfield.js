import styled from 'styled-components'

//--------------------------------------------------------------------------//
const Textfield = styled.input`
  width: ${props => (props.width == null ? 'auto' : props.width)};
  height: ${props => (props.height == null ? 'auto' : props.height)};

  color: ${props => (props.color == null ? props.theme.textColors.white : props.color)};

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

  font-size: ${props => (props.fontSize == null ? props.theme.fontSizes.normal : props.fontSize)};
  font-family: ${props =>
    props.fontFamily == null ? props.theme.fonts.default : props.fontFamily};
  text-align: ${props => (props.textAlign == null ? 'center' : props.textAlign)};
  letter-spacing: ${props =>
    props.letterSpacing == null ? props.theme.letterSpacing : props.letterSpacing};

  background-color: ${props =>
    props.backgroundColor == null ? 'transparent' : props.backgroundColor};

border: ${props => (props.border == null ? 'none' : props.border)};
  ${props =>
    props.border == null
      ? `border-top: ${props.borderTop == null ? 'none' : props.borderTop};
  border-right: ${props.borderRight == null ? 'none' : props.borderRight};
  border-bottom: ${props.borderBottom == null ? 'none' : props.borderBottom};
  border-left: ${props.borderLeft == null ? 'none' : props.borderLeft};`
      : ''}

  outline: none;

  &:focus {
    outline: none;
  }
`
export default Textfield
