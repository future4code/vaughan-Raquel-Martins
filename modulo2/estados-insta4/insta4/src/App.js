import React from "react";
import styled from "styled-components";
import Post from "./components/Post/Post";

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const NovoPost = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const BoxInput = styled.input`
  margin-bottom: 5%;
  width: 100%;
  padding: 2%;
`;

const BtnPostar = styled.button`
  width: 100%;
  border: none;
  border-radius: 20px;
  background-color: #6002ee;
  color: white;
  margin-bottom: 10%;
  padding: 2%;
`;

const Wrapper = styled.div `
  &:hover .myBtn {
    cursor: pointer;
    background-color: #360481;
  }
  `



class App extends React.Component {
  state = {
    pessoas: [
      {
        nomeUsuario: "paulinha",
        fotoUsuario: "https://picsum.photos/id/158/50/50",
        fotoPost: "https://picsum.photos/id/15/200/150",
      },
      {
        nomeUsuario: "raquel",
        fotoUsuario: "https://picsum.photos/id/368/50/50",
        fotoPost: "https://picsum.photos/id/180/200/150",
      },
      {
        nomeUsuario: "michele",
        fotoUsuario: "https://picsum.photos/id/388/50/50",
        fotoPost: "https://picsum.photos/id/237/200/150",
      },
    ],

    valorInputNome: "",
    valorInputLinkFotoPerfil: "",
    valorInputLinkFotoPost: "",
  };

  

  adicionarPost = () => {
    const novoPost = {
      nomeUsuario: this.state.valorInputNome,
      fotoUsuario: this.state.valorInputLinkFotoPerfil,
      fotoPost: this.state.valorInputLinkFotoPost,
    };

    const copiaPosts = [...this.state.pessoas, novoPost];

    this.setState({ pessoas: copiaPosts });
    this.setState({
      valorInputNome: "",
      valorInputLinkFotoPerfil: "",
      valorInputLinkFotoPost: "",
    });
  };

  onChangeInputNome = (event) => {
    this.setState({ valorInputNome: event.target.value });
  };

  onChangeInputFotoPerfil = (event) => {
    this.setState({ valorInputLinkFotoPerfil: event.target.value });
  };

  onChangeInputFotoPost = (event) => {
    this.setState({ valorInputLinkFotoPost: event.target.value });
  };

  render() {
    const listaDePosts = this.state.pessoas.map((pessoa) => {
      return (
        <Post
          key={pessoa.nomeUsuario}
          nomeUsuario={pessoa.nomeUsuario}
          fotoUsuario={pessoa.fotoUsuario}
          fotoPost={pessoa.fotoPost}
        />
      );
    });

    return (
      <MainContainer>
        <h2>Adicionar Novo Post</h2>
        <NovoPost>
          <label>
            Nome
            <BoxInput
              value={this.state.valorInputNome}
              onChange={this.onChangeInputNome}
              placeholder={"Nome do usuário"}
            />
          </label>
          <label>
            Link
            <BoxInput
              value={this.state.valorInputLinkFotoPerfil}
              onChange={this.onChangeInputFotoPerfil}
              placeholder={"Link da foto de perfil"}
            />
          </label>
          <label>
            Link
            <BoxInput
              value={this.state.valorInputLinkFotoPost}
              onChange={this.onChangeInputFotoPost}
              placeholder={"Link da foto do post"}
            />
          </label>
          <Wrapper>
            <BtnPostar onClick={this.adicionarPost} className="myBtn" >Postar!</BtnPostar>
          </Wrapper>
          
        </NovoPost>

        {listaDePosts}
      </MainContainer>

      /*        <MainContainer>
        <Post
          nomeUsuario={"paulinha"}
          fotoUsuario={"https://picsum.photos/id/158/50/50"}
          fotoPost={"https://picsum.photos/id/15/200/150"}
        />
        <Post
          nomeUsuario={"raquel"}
          fotoUsuario={"https://picsum.photos/id/368/50/50"}
          fotoPost={"https://picsum.photos/id/180/200/150"}
        />

        <Post>
          {listaDeComponentes}
        </>
        <Post
          nomeUsuario={"michele"}
          fotoUsuario={"https://picsum.photos/id/388/50/50"}
          fotoPost={"https://picsum.photos/id/237/200/150"}
        />
      </MainContainer>  */
    );
  }
}

export default App;
