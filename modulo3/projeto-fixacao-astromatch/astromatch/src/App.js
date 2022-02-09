import { useState } from 'react';
import styled from 'styled-components';
import  InitialScreen  from './pages/InitialScreen';
import MatchesScreen from './pages/MatchesScreen';


const DivWrapper = styled.div`
  max-height: 500px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  border-radius: 8px;
  display:flex;
  justify-content:center;
  align-items:center;
  min-height: 100vh;
`;

function App() {
  const [currentScreen , setCurrentScreen] = useState("initial")

  const goToHome = () => {
    setCurrentScreen("initial");
  };

  const goToMatches = () => {
    setCurrentScreen("matches")
  }

  const chooseScreen = () => {
    switch (currentScreen) {
      case "initial":
        return (
          <InitialScreen goToMatches={() => goToMatches()}/>
        );
      case "matches":
        return (
         <MatchesScreen goToHome={()=> goToHome()}/> 
        )
      default:
        return (
          <InitialScreen />
        );
    }
  };

  
  return (

<DivWrapper>
  {chooseScreen()}
</DivWrapper>

  
      
    
  );
}

export default App;
