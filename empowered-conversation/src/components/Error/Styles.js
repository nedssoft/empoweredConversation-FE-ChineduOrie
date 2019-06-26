import styled from 'styled-components'
import { background} from '../styled/reusables'

export const Container = styled.div`
  ${background};
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  h1 {
    font-size: 10rem;
    text-align: center;
    span {
      padding: 0 0.8rem;
    }
  }
  p {
    font-size: 4rem;
    font-style: italic;
    text-align: center;
    padding: 2rem;
  }
`