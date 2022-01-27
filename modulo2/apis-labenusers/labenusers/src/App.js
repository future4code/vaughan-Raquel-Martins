import React from "react";
import "./App.css";
import UsersList from "./components/UsersList";
import CreateUsers from "./components/CreateUsers";
import styled from "styled-components";
import MoreInfoUser from "./components/MoreInfoUser";




const Container = styled.div`
  padding: 1rem;
  
  
`;

class App extends React.Component {
  state = {
    query: "",

    currentScreen: "register",
  };

  chooseScreen = () => {
    switch (this.state.currentScreen) {
      case "register":
        return <CreateUsers goToList={this.goList} />;
      case "list":
        return <UsersList goToRegister={this.goRegister} 
       moreInfo={this.goInfo} />;
      case "info":
        return <MoreInfoUser goToList={this.goList} />
      default:
        return <div>Erro! Página não encontrada</div>
    }
  };

  goRegister = () => {
    this.setState({ currentScreen: "register" });
  };

  goList = () => {
    this.setState({ currentScreen: "list" });
  };

 goInfo = () => {
   this.setState({currentScreen: "info"})
 }

  render() {
    return (
      <Container>
        <div>{this.chooseScreen()}</div>
      </Container>
    );
  }
}

export default App;
