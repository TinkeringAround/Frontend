import styled from 'styled-components'

//--------------------------------------------------------------------------//
const Text = styled.text`
  width: ${props => (props.width == null ? 'auto' : props.width)};
  height: ${props => (props.height == null ? 'auto' : props.height)};

  color: ${props => (props.color == null ? props.theme.textColors.white : props.color)};

  margin: ${props => (props.margin == null ? 'auto' : props.margin)};
  margin-top: ${props => (props.marginTop == null ? '0' : props.marginTop)};
  margin-right: ${props => (props.marginRight == null ? '0' : props.marginRight)};
  margin-bottom: ${props => (props.marginBottom == null ? '0' : props.marginBottom)};
  margin-left: ${props => (props.marginLeft == null ? '0' : props.marginLeft)};

  padding: ${props => (props.padding == null ? '0' : props.padding)};
  padding-top: ${props => (props.paddingTop == null ? '0' : props.paddingTop)};
  padding-right: ${props => (props.paddingRight == null ? '0' : props.paddingRight)};
  padding-bottom: ${props => (props.paddingBottom == null ? '0' : props.paddingBottom)};
  padding-left: ${props => (props.paddingLeft == null ? '0' : props.paddingLeft)};

  font-size: ${props => (props.fontSize == null ? props.theme.fontSizes.default : props.fontSize)};
  letter-spacing: ${props =>
    props.letterSpacing == null ? props.theme.letterSpacing : props.letterSpacing};
  text-align: ${props => (props.textAlign == null ? 'left' : props.textAlign)};
`
export default Text
