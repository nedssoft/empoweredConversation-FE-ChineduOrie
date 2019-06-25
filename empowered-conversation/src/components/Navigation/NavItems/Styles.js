import styled from 'styled-components'

export const Li = styled.li`
  padding:  2rem;
  display: inline-block;
`
export const Ul = styled.ul`
  list-style: none;
  position: absolute;
  right: 200px;
  display: flex;
  align-items: center;
  @media (max-width: 500px) {
    position: relative;
    left: 0;
    padding: 0 1.5rem;
    padding-bottom: 2rem;
    flex-direction: column;
    display: ${props => props.flex? 'flex' : 'none'};
  }
`