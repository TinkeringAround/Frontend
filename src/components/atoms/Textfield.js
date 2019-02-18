import styled from 'styled-components'

//--------------------------------------------------------------------------//
const Textfield = styled.input`
  width: ${props => (props.width == null ? 'auto' : props.width)};
  height: ${props => (props.height == null ? 'auto' : props.height)};

  color: ${props => (props.color == null ? props.theme.textColors.white : props.color)};

  margin: ${props => (props.margin == null ? 'auto' : props.margin)};
  padding: ${props => (props.padding == null ? '0' : props.padding)};

  font-size: ${props => (props.fontSize == null ? props.theme.fontSizes.normal : props.fontSize)};
  font-family: ${props => (props.fontFamily == null ? props.theme.fontFamily : props.fontFamily)};
  text-align: ${props => (props.textAlign == null ? 'center' : props.textAlign)};
  letter-spacing: ${props =>
    props.letterSpacing == null ? props.theme.letterSpacing : props.letterSpacing};

  background-color: ${props =>
    props.backgroundColor == null ? props.theme.colors.white : props.backgroundColor};

  border: none;

  &:focus {
    outline: none;
  }
`
export default Textfield
