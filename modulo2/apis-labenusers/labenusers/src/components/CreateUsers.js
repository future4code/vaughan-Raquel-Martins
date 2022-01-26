import React from "react";
import styled from "styled-components";
import axios from "axios";


const ContainerPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: Helvetica, sans-serif;
`;

const ContainerBtnList = styled.div`
  display: flex;
  align-self: flex-start;
`;

const ContainerCreate = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: 2px 2px 5px darkgray;
  padding: 2rem;
  border-radius: 1rem;
`;

const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
`;

const BtnCreate = styled.button`
  border: none;
  background-color: #446fe9;
  color: white;
  font-weight: 700;
  border-radius: 1rem;
  padding: 0.5rem;

  border-color: #694fd1;
  color: #fff;
  background-image: -webkit-linear-gradient(
    45deg,
    #823edb 50%,
    transparent 50%
  );
  background-image: linear-gradient(45deg, #823edb 50%, transparent 50%);
  background-position: 100%;
  background-size: 400%;
  -webkit-transition: background 300ms ease-in-out;
  transition: background 300ms ease-in-out;
  &:hover {
    cursor: pointer;
    background-position: 0;
  }
`;

const BtnReturnPage = styled.button`
  border: none;
  background-color: #446fe9;
  color: white;
  font-weight: 700;
  border-radius: 1rem;
  padding: 0.5rem;

  &:hover {
    cursor: pointer;
    background-color: #3b559d;
  }
`;

const InputStyle = styled.input`
  padding: 0.5rem;
  border-radius: 1rem;
  outline: 0;
  -webkit-box-shadow: none;
  box-shadow: none;
  border: 1px solid grey;

  &:focus { 
    outline: none !important;
    border-color: #719ECE;
    box-shadow: 0 0 10px #719ECE;
}
`;

export default class CreateUsers extends React.Component{

  state={
    nameInput: "",
    emailInput: "",
  }

  createUser = () => {
    const body = {
      name: this.state.nameInput,
      email: this.state.emailInput,
    };

    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        body,
        {
          headers: {
            Authorization: "raquel-martins-vaughan",
          },
        }
      )
      .then((response) => {
        console.log(response.data);
        this.setState({ nameInput: "", emailInput: "" });
        alert("Usuário foi criado");
      })
      .catch((error) => {
        alert("Erro ao criar usuário");
        console.log(error.message);
      });
  };

  onChangeNameValue = (event) => {
    this.setState({ nameInput: event.target.value });
  };

  onChangeEmailValue = (event) => {
    this.setState({ emailInput: event.target.value });
  };

  render() {
    return (
      <ContainerPage>
        <ContainerBtnList>
          <BtnReturnPage onClick={this.props.goToList}>
            Ir para página de lista
          </BtnReturnPage>
        </ContainerBtnList>
        <ContainerCreate>
          <ContainerInput>
            <label>Nome:</label>
            <InputStyle
              placeholder="Nome"
              value={this.state.nameInput}
              onChange={this.onChangeNameValue}
            />
          </ContainerInput>
          <ContainerInput>
            <label>Email:</label>
            <InputStyle
              placeholder="Email"
              value={this.state.emailInput}
              onChange={this.onChangeEmailValue}
            />
          </ContainerInput>
  
          <BtnCreate onClick={this.createUser}>Criar Usuário</BtnCreate>
        </ContainerCreate>
      </ContainerPage>
    );
  }
 
}
