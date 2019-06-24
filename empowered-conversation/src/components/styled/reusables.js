import styled, { css } from 'styled-components'
import { NavLink } from 'react-router-dom'
import { primary as primary_color, black as black_color } from './variables'

export const background = css`
  background-image: linear-gradient(145deg, rgba(36,180,165,1) 0%, rgba(143,237,194,1) 100%);
`
export const responsiveWidth = css`
  @media screen and (max-width: 768px) {
    width: 90%;
    max-width: 90%
  }
  @media screen and (max-width: 499px) {
    width: 90%;
    max-width: 90%
  }
`
export const CustomNavLink = styled(NavLink)`
  color: ${black_color};
  font-size: 1.6rem;
  text-decoration: none;
  line-height: 1.5;
  text-transform: uppercase;
  border-bottom-width: 0;
  transition: border-bottom-width 650ms;
  &:hover, &.active {
    border-bottom: 1px solid ${primary_color};
    color: ${primary_color};
    border-bottom-width: 100%;
  }
`