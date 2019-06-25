import styled from 'styled-components'
import { flexColum } from '../styled/reusables'
import { primary } from '../styled/variables'

export const FooterContainer = styled.footer`
  width: 100%;
  min-height: 150px;
  background: ${primary};
  padding: 1rem;
  ${flexColum};
  color: #fff;
  p {
    margin: 2rem auto;
    text-align: center;
    font-size: 1.6rem;
  }
`;

export const Ul = styled.ul`
  ${flexColum};
  flex-direction: row;
`;