import styled from 'styled-components'

//--------------------------------------------------------------------------//
const Text = styled.p`
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

  font-family: ${props =>
    props.fontFamily == null ? props.theme.fonts.default : props.fontFamily};
  font-size: ${props => (props.fontSize == null ? props.theme.fontSizes.default : props.fontSize)};

  letter-spacing: ${props =>
    props.letterSpacing == null ? props.theme.letterSpacing : props.letterSpacing};
    line-height: ${props => (props.lineHeight == null ? props.theme.lineHeight : props.lineHeight)};
  text-align: ${props => (props.textAlign == null ? 'left' : props.textAlign)};

  overflow-wrap: ${props => (props.overflowWrap == null ? 'normal' : props.overflowWrap)};
`
export default Text
