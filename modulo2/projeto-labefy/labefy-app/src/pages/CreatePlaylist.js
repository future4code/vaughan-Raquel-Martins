import React from "react";
import axios from "axios"
import styled from "styled-components";


const ContainerBody = styled.div`
  display: flex;

flex-direction: column;
align-items: center;

  padding: 10px;
  background-color: #121212;
  color: #ff7d0d;
  min-height: 100vh;
  
`;
const InputStyle = styled.input`
  padding: 0.5rem;
  border-radius: 1rem;
  outline: 0;
  -webkit-box-shadow: none;
  box-shadow: none;
  border: 1px solid grey;
  margin-bottom: 2rem;
  margin-right: 10px;
  &:focus {
    outline: none !important;
    border-color: #ff7d0d;
    box-shadow: 0 0 10px #ffa355;
  }
`;

const BtnPrimary = styled.div`
  background-color: #ff7d0d;
  padding: 8px;
  color: white;
  border-radius: 1rem;
  font-weight: 500;

  &:hover {
    cursor: pointer;
    background-color: #cf6000;
  }
`;

const ContentBtnBack = styled.div`
  display: flex;
  align-self: flex-start;
`;


const ContentInputCriarPlay = styled.div`
display:flex;
justify-content: center;
align-items: flex-start;
`

export default class CreatePlaylist extends React.Component{

    state ={
        name: ""
    }

    createPlaylist = () => {
const body = {
    name: this.state.name
};

const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"

axios.post(url, body,{
    headers:{
        Authorization: "raquel-martins-vaughan"
    }
}).then((response) => {
    console.log(response.data)
    this.setState({name:""})
    alert("Playlist criada com sucesso!")
}).catch((error) => {
    console.log(error.message)
})
    }

    onChangePlaylist = (event) => {
        this.setState({name: event.target.value})
    }

render() {

    return(
        <ContainerBody>
            <ContentBtnBack>
            <BtnPrimary onClick={this.props.goToPlaylist}>Ver playlists!</BtnPrimary>
            </ContentBtnBack>
            
            
            <h3>Labefy, vem curtir com a gente! </h3>
            <ContentInputCriarPlay>
                
                <InputStyle 
                placeholder="Nome da playlist"
                value={this.state.name}
                onChange={this.onChangePlaylist}
                />
                <BtnPrimary onClick={this.createPlaylist}>Criar playlist!</BtnPrimary>
            </ContentInputCriarPlay>
        </ContainerBody>
    )
}
}
