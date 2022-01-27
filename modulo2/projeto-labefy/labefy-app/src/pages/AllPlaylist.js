import axios from "axios";
import React from "react";
import styled from "styled-components";


const CoitainerBtnTxt = styled.div`
display:flex;
justify-content: space-between;
align-items: center;
width: 10%;
`
export default class AllPlaylist extends React.Component {
  state = {
    playlists: [],
  };

  componentDidMount = () => {
    this.getAllPlaylists();
  };

  getAllPlaylists = () => {
    
      
    axios
      .get("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists", {
        headers: {
          Authorization: "raquel-martins-vaughan",
        },
      })
      .then((response) => {
        this.setState({ playlists: response.data.result.list });
        console.log(response.data.result.list);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  deletePlaylist = (id) => {

    if (window.confirm(`Tem certeza que deseja deletar essa playlist?`)){
        axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`, {
            headers: {
                Authorization: "raquel-martins-vaughan",
              } 
          }).then((response) => {
              console.log(response.data)
              this.getAllPlaylists()
          }).catch((error)=>{
              console.log(error.message)
          })
    }
     
  }

  render() {
    const playlistList = this.state.playlists.map((playlist) => {
        return <CoitainerBtnTxt>
            <div>
            <li key={playlist.id}>{playlist.name}</li>
            </div>
            
            <button onClick={() => this.deletePlaylist(playlist.id)}>X</button>
        </CoitainerBtnTxt>
    })
    return (
      <div>
        <button onClick={this.props.goToRegister}>Criar Playlist!</button>
        <h3>Todas as playlist</h3>
        <ul>{playlistList}</ul>
      </div>
    );
  }
}
