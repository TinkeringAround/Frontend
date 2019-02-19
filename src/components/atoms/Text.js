import styled from 'styled-components'

//--------------------------------------------------------------------------//
const Text = styled.text`
  width: ${props => (props.width == null ? 'auto' : props.width)};
  height: ${props => (props.height == null ? 'auto' : props.height)};

  color: ${props => (props.color == null ? props.theme.textColors.white : props.color)};

  margin: ${props => (props.margin == null ? 'auto' : props.margin)};
  padding: ${props => (props.padding == null ? '0' : props.padding)};

  font-size: ${props => (props.fontSize == null ? props.theme.fontSizes.default : props.fontSize)};
  letter-spacing: ${props =>
    props.letterSpacing == null ? props.theme.letterSpacing : props.letterSpacing};
  text-align: ${props => (props.textAlign == null ? 'left' : props.textAlign)};
`
export default Text
