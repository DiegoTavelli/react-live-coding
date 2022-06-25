import { Link as LinkWouter } from "wouter";
import styled from '@emotion/styled'

const SIZES = {
  small: '1.2rem',
  medium: '2rem',
  large: '3rem'
}

const getFontSize = props => {
  const size = SIZES[props.size]
  if (!size) {
    console.warn(`[Button Styled Component] This size is not correct. Use ${Object.keys(SIZES).join(', ')}`)
    return SIZES.small
  }
  return size
}

export const Link = styled(LinkWouter)`
  ${'' /* background-color: ${props => props.theme.colors.primary}; */}
  background-color: var(--brand-color_5);
  border-radius: 19px;
  border: transparent;
  box-shadow: 1px 1px 2px var(--brand-color_6);
  color: ${({ theme }) => theme.colors.textColor};
  cursor: pointer;
  font-size: ${getFontSize};
  padding: .5rem .9rem;

  :hover {
    background-color: var(--brand-color_2);
    border-color: var(--brand-color_2);
    color: white;
  }

  [disabled] {
    opacity: .3;
    pointer-events: none;
  }

${'' /* css shadow gradient */}



`

export const Button = Link.withComponent('button')