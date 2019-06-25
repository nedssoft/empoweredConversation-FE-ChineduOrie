import styled from 'styled-components'
 import { flexColum, Submit } from '../styled/reusables'
import { secondary, black } from '../styled/variables'

export const Wrapper = styled.div`
  width: 60%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10rem auto;
  min-height: 500px;
  @media (max-width: 500px) {
    width: 90%;
  }
`;
export const Title  = styled.h2`
 font-size: 2.8rem;
 font-weight: 600;
 color: ${secondary};
 margin: 4rem auto;
 text-align: center;
`

export const Container = styled.div`
  ${flexColum}
  position: relative;
  h3 {
    color:${secondary};
    font-size: 1.8rem;
    align-self: flex-start;
    position: relative;
  }
`
export const Author = styled.span`
  font-style: italic;
  text-decoration: underline;
  font-size: 1.6rem;
  color: ${secondary};
  align-self: flex-end;
`
export const Text = styled.div`
  margin: 2rem auto;
  font-size: 1.6rem;
  line-height: 1.5;
  color: ${black};
`
export const ActionBtn = styled(Submit)`
  width: max-content;
  padding: 1rem;
  &:hover {
    background-image: linear-gradient(to right, #24b4a5,#20c997 );
    width: 30rem;
  }
`