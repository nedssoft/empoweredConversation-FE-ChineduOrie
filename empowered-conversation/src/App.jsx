import React from 'react';
import styled from 'styled-components';
import GlobalStyle from './components/styled/GlobalStyles';
import Navigation from './components/Navigation/Navigation'

const AppWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <AppWrapper>
        <Navigation />
      </AppWrapper>
    </React.Fragment>
  );
}

export default App;
