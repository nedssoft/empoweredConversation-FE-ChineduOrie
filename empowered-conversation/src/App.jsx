import React from "react";
import styled from "styled-components";
import { Switch, Route } from "react-router-dom";
import GlobalStyle from "./components/styled/GlobalStyles";
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";
import NewConversation from "./components/Conversation/NewConversation";
import Resources from "./components/Resources/Resources";
import NotFound from './components/Error/NotFound'
import Landing from './components/Landing/Landing'

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
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/conversation/new" component={NewConversation} />
          <Route path="/conversation/resources" component={Resources} />
          <Route path="*" component={NotFound} />
        </Switch>
        <Footer />
      </AppWrapper>
    </React.Fragment>
  );
}

export default App;
