import axios from "axios";
import React from "react";
import styled from "styled-components";

const CoitainerBtnTxt = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 20%;
`;

const PoiterClick = styled.div`
  &:hover {
    cursor: pointer;
  }
`;
export default class AllPlaylist extends React.Component {
  state = {
    playlists: [],
    nomePlaylistTitulo: "",
    tracksList: [],
    idPlaylistAdd: "",

    nameMusicInput: "",
    nameArtistInput: "",
    urlInput: "",
  };

  componentDidMount = () => {
    this.getAllPlaylists();
   // this.getPlaylistTracks();
  };

  getAllPlaylists = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
        {
          headers: {
            Authorization: "raquel-martins-vaughan",
          },
        }
      )
      .then((response) => {
        this.setState({ playlists: response.data.result.list });
        console.log(response.data.result.list);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  deletePlaylist = (id) => {
    if (window.confirm(`Tem certeza que deseja deletar essa playlist?`)) {
      axios
        .delete(
          `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`,
          {
            headers: {
              Authorization: "raquel-martins-vaughan",
            },
          }
        )
        .then((response) => {
          console.log(response.data);
          this.getAllPlaylists();
        })
        .catch((error) => {
          console.log(error.message);
        });
    }
  };

  getPlaylistTracks = (id) => {
      console.log("getplaylisttracks id linha 75", id)
    axios
      .get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`,
        {
          headers: {
            Authorization: "raquel-martins-vaughan",
          },
        }
      )
      .then((response) => {
        this.setState({ tracksList: response.data.result.tracks });
        console.log(this.state.tracksList);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  getName(nome) {
    const nomePlay = nome;
    this.setState({ nomePlaylistTitulo: nomePlay });
  }

  addTrackToPlaylist = (id) => {
      console.log(id)
    const body = {
      name: this.state.nameMusicInput,
      artist: this.state.nameArtistInput,
      url: this.state.urlInput,
    };
    axios
      .post(
        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`,
        body,
        {
          headers: {
            Authorization: "raquel-martins-vaughan",
          },
        }
      )
      .then((response) => {
          this.setState({
            nameMusicInput: "",
            nameArtistInput: "",
            urlInput: "",
          })
        console.log(response.data);
        this.getPlaylistTracks(id);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  onChangeNameMusic = (event) => {
    this.setState({ nameMusicInput: event.target.value });
  };

  onChangeArtist = (event) => {
    this.setState({ nameArtistInput: event.target.value });
  };

  onChangeUrl = (event) => {
    this.setState({ urlInput: event.target.value });
  };

  pegaId = (id) => {
    this.setState({ idPlaylistAdd: id });
  };
  render() {
    const playlistList = this.state.playlists.map((playlist) => {
      return (
        <CoitainerBtnTxt key={playlist.id}>
          <PoiterClick onClick={() => this.getPlaylistTracks(playlist.id)}>
              <div  onClick={() => this.pegaId(playlist.id)} >
              <li onClick={() => this.getName(playlist.name)} >
              {playlist.name}
            </li>
              </div>
            
          </PoiterClick>

          <div>
            <button onClick={() => this.deletePlaylist(playlist.id)}>X</button>
          </div>
        </CoitainerBtnTxt>
      );
    });

    const playlistClicked = this.state.tracksList.map((track) => {
      return (
        <div>
          <p>
            Música: {track.name}, Artista: {track.artist}
          </p>
        </div>
      );
    });
    return (
      <div>
        <button onClick={this.props.goToRegister}>Criar Playlist!</button>
        <h3>Todas as playlist</h3>
        <ul>{playlistList}</ul>

        <div>
          <h3>Playlist Selecionada: {this.state.nomePlaylistTitulo}</h3>
          <input
            placeholder="Nome da música"
            value={this.state.nameMusicInput}
            onChange={this.onChangeNameMusic}
          />
          <input
            placeholder="Nome do artista"
            value={this.state.nameArtistInput}
            onChange={this.onChangeArtist}
          />
          <input
            placeholder="URL da música"
            value={this.state.urlInput}
            onChange={this.onChangeUrl}
          />
          <button onClick={() => this.addTrackToPlaylist(this.state.idPlaylistAdd)}>
            Adicionar Música!
          </button>
          <div>{playlistClicked}</div>
        </div>
      </div>
    );
  }
}
