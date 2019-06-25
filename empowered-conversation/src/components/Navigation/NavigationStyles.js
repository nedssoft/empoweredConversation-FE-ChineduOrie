import styled from 'styled-components'

export const NavContainer = styled.header`
   position: fixed;
   z-index: 1000;
   top: 0;
   left: 0;
   width: 100%;
   transition: all 0.5s ease-in-out;
   -webkit-box-shadow: 0 0 1px rgba(0, 0, 0, 0.5);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0.5);
`
export const Nav = styled.nav`
  width: 100%;
  height: 90px;
  background: #fff;
  transition: height 0.3s linear;
  > * {
    height: 100%;
  }
  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
`