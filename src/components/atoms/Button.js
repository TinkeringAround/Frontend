import styled from 'styled-components'

//--------------------------------------------------------------------------//
const Button = styled.button`
  width: ${props => (props.width == null ? 'auto' : props.width)};
  height: ${props => (props.height == null ? 'auto' : props.height)};

  margin: ${props => (props.margin == null ? '0' : props.margin)};
  padding: ${props => (props.padding == null ? '0' : props.padding)};

  color: ${props => (props.color == null ? props.theme.textColors.whiteText : props.color)};

  font-size: ${props => (props.fontSize == null ? props.theme.fontSizes.normal : props.fontSize)};
  font-family: ${props => (props.fontFamily == null ? props.theme.fontFamily : props.fontFamily)};
  text-align: center;
  letter-spacing: ${props =>
    props.letterSpacing == null ? props.theme.letterSpacing : props.letterSpacing};

  background-color: ${props =>
    props.backgroundColor == null ? props.theme.colors.white : props.backgroundColor};

  border: ${props => (props.border == null ? 'none' : props.border)};
  border-radius: ${props => (props.borderRadius == null ? '0' : props.borderRadius)};
  box-shadow: ${props => (props.boxShadow == null ? '0' : props.boxShadow)};

  outline: none;

  &:active {
    box-shadow: 0px 0px 0px #fff;
    transform: translateY(4px);
  }
`
export default Button
