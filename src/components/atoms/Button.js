import styled from 'styled-components'

//--------------------------------------------------------------------------//
const Button = styled.button`
  width: ${props => (props.width == null ? 'auto' : props.width)};
  height: ${props => (props.height == null ? 'auto' : props.height)};

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

  color: ${props => (props.color == null ? props.theme.textColors.whiteText : props.color)};

  font-size: ${props => (props.fontSize == null ? props.theme.fontSizes.normal : props.fontSize)};
  font-family: ${props => (props.fontFamily == null ? props.theme.fontFamily : props.fontFamily)};
  text-align: ${props => (props.textAlign == null ? 'center' : props.textAlign)};
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
