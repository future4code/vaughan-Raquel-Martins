import "./App.css";
import { Etapa1 } from "./components/estapa1";
import React from "react";
import { Etapa2 } from "./components/etapa2";
import { Etapa3 } from "./components/etapa3";
import { Final } from "./components/final";
import styled from "styled-components";

const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  justify-content: center;
  align-items: center;
`;

export default class App extends React.Component {
  state = {
    etapa: 1,
  };

  renderizarEtapa = () => {
    switch (this.state.etapa) {
      case 1:
        return <Etapa1 />;
        break;
      case 2:
        return <Etapa2 />;
        break;
      case 3:
        return <Etapa3 />;
        break;
      case 4:
        return <Final />;
        break;
        default :
        return <Final />
        break
    }
  };

  proximaEtapa = () => {
    const etapaAtual = this.state.etapa;
    const etapaSeguinte = etapaAtual + 1;
    this.setState({ etapa: etapaSeguinte });
  };

 
     
    

  render() {
   
    const botaoNaTela = () => {
      if(this.state.etapa !== 4 ){
        return <Btn onClick={this.proximaEtapa}>Próxima Etapa</Btn>
      }

    }

    return (
      <FormContainer>
        {this.renderizarEtapa()}
        {botaoNaTela()}
       
      </FormContainer>
    );
  }
}
