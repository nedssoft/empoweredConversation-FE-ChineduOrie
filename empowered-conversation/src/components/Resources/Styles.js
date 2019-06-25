import styled from 'styled-components'
 import { flexColum } from '../styled/reusables'
import { secondary, black } from '../styled/variables'

export const Wrapper = styled.div`
  width: 60%;
  height: 100%;
  margin: auto;
  padding-top: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Title  = styled.h2`
 font-size: 2.8rem;
 font-weight: 600;
 color: ${secondary};
`

export const Container = styled.div`
  ${flexColum}
  position: relative;
  h3 {
    font-size: ${secondary};
  }
`
export const Author = styled.span`
  position: absolute;
  right: 30px;
  bottom: 30px;
  font-style: italic;
  text-decoration: underline;
`
export const Text = styled.div`
  margin: 2rem auto;
  line-height: 1.5rem;
  color: ${black};
`