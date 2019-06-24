import styled from 'styled-components';

export const Logo = styled.div`
  margin-right: 4rem;
`;
export const LogoImg = styled.img`
  width: ${props => props.width ? props.width : '100px'};
  height: ${props => props.height ? props.height : '100px'};
  object-fit: contain;
`