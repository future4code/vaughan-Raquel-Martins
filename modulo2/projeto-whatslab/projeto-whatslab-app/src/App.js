import styled from "styled-components";
import React from "react";
import "./App.css";

import BalaoMsg from "./componentes/BalaoMsg/BalaoMsg";

const ContainerMain = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  flex-direction: column;
  justify-content: center;
  justify-items: center;
  
  background-color: white;
 
  width: 100%;
  flex-grow:1;
`;


const ContainerBox = styled.div`
display:flex;
width: 30%;
justify-content:flex-end;
padding:2em;
flex-direction: column;
background-color: #a4d6ec;
border: 2px solid black;
`
const BtnEnviar = styled.button`
  cursor: pointer;

  padding:1em;
  border: none;
  border-radius: 0.5em;
  font-weight: 600;
  &:hover {
    background-color: #002852;
    color: white;
  }
`;

const InputBox = styled.input`
  padding: 1em;
  margin: 0.4em;
  border-radius: 0.5em;
  box-shadow: 0 0 0 0;
  border: 0 none;
  outline: 0;
  &:focus {
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
  }
`;

export class App extends React.Component {
  state = {
    mensagens: [],

    valorNome: "",
    valorMsg: "",
  };

  onChangeNome = (event) => {
    this.setState({ valorNome: event.target.value });
  };

  onChangeMsg = (event) => {
    this.setState({ valorMsg: event.target.value });
  };

  onClickEnviar = () => {
    const novaMsg = {
      nomeEnviado: this.state.valorNome,
      msgEnviado: this.state.valorMsg,
    };

    const copiaMsgs = [...this.state.mensagens, novaMsg];

    this.setState({ mensagens: copiaMsgs });
    this.setState({
      valorNome: "",
      valorMsg: "",
    });
  };

  render() {
    const listaDeMsg = this.state.mensagens.map((envio) => {
      return <BalaoMsg nome={envio.nomeEnviado} msg={envio.msgEnviado} />;
    });

    return (
      <ContainerMain>
        <ContainerBox>


        
        <div>{listaDeMsg}</div>

        <div>
          <InputBox
            onChange={this.onChangeNome}
            value={this.state.valorNome}
            placeholder="Usuário"
          />
          <InputBox
            onChange={this.onChangeMsg}
            value={this.state.valorMsg}
            placeholder="Mensagem"
          />
          <BtnEnviar onClick={this.onClickEnviar}>Enviar!</BtnEnviar>
        </div>
        </ContainerBox>
      </ContainerMain>
    );
  }
}

export default App;
