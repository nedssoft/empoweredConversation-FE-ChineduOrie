import React from 'react';
import styled from 'styled-components';
import GlobalStyle from './components/styled/GlobalStyles';
import Navigation from './components/Navigation/Navigation'
import Footer from './components/Footer/Footer'
import NewConversation from './components/Conversation/NewConversation'

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
        <NewConversation />
        <Footer />
      </AppWrapper>
    </React.Fragment>
  );
}

export default App;
