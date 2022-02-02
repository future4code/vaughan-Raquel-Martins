import axios from "axios";
import React from "react";
import styled from "styled-components";
import deleteIcon from "../img/highlight_off_white_24dp.svg";

const ContainerBody = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  background-color: #121212;
  color: #ff7d0d;
  min-height: 100vh;
  padding: 10px;
`;

const ContentBtnBack = styled.div`
  display: flex;
  align-self: flex-start;
`;
const ContainerSection = styled.div`
  display: grid;
  grid-template-columns: 0.7fr 1fr;
  column-gap: 8%;
`;

const InputsBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

const BtnAdd = styled.div`
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

const CoitainerBtnTxt = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0.3rem;
  padding: 0.3rem;
`;

const BtnDelete = styled.div`
  background-color: #121212;
  color: white;
  border-radius: 50%;
  height: 24px;
  width: 24px;

  &:hover {
    cursor: pointer;
  }
`;

const PoiterClick = styled.div`
  &:hover {
    cursor: pointer;
  }
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

const AudioStyle = styled.audio`
&::-webkit-media-controls-panel {
  background-color: #ff7d0d;
}

`

export default class AllPlaylist extends React.Component {
  state = {
    playlists: [],
    nomePlaylistTitulo: "",
    tracksList: [],
    idPlaylistAdd: "",

    nameMusicInput: "",
    nameArtistInput: "",
    urlInput: "",

    urlMusicPlay: [],
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
    console.log("getplaylisttracks id linha 75", id);
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
    console.log(id);
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
        });
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

  // playMusic(url) {
  //   console.log(url);
  //   this.setState({ urlMusicPlay: url });
  //   console.log("state do urlMusicPlay", this.state.urlMusicPlay);
  // }

  render() {
    const playlistList = this.state.playlists.map((playlist) => {
      return (
        <CoitainerBtnTxt key={playlist.id}>
          <PoiterClick onClick={() => this.getPlaylistTracks(playlist.id)}>
            <div onClick={() => this.pegaId(playlist.id)}>
              <li onClick={() => this.getName(playlist.name)}>
                {playlist.name}
              </li>
            </div>
          </PoiterClick>

          <div>
            <BtnDelete onClick={() => this.deletePlaylist(playlist.id)}>
              <img src={deleteIcon} alt="ícone de delete" />
            </BtnDelete>
          </div>
        </CoitainerBtnTxt>
      );
    });

    const playlistClicked = this.state.tracksList.map((track) => {
      return (
        <CoitainerBtnTxt>
          <div>
            <p>
              Música: {track.name}, Artista: {track.artist}
            </p>
          </div>

          <div>
            <AudioStyle controls>
              <source src={track.url} type="audio/mpeg" />
            </AudioStyle>
          </div>
        </CoitainerBtnTxt>
      );
    });
    return (
      <ContainerBody>
        <ContainerSection>
          <div>
            <ContentBtnBack>
              <BtnAdd onClick={this.props.goToRegister}>Criar Playlist!</BtnAdd>
            </ContentBtnBack>

            <h3>Todas as playlist</h3>
            <ul>{playlistList}</ul>
          </div>

          <div>
            <div>
              <h3>Playlist Selecionada: {this.state.nomePlaylistTitulo}</h3>

              <InputsBtn>
                <InputStyle
                  placeholder="Nome da música"
                  value={this.state.nameMusicInput}
                  onChange={this.onChangeNameMusic}
                />
                <InputStyle
                  placeholder="Nome do artista"
                  value={this.state.nameArtistInput}
                  onChange={this.onChangeArtist}
                />
                <InputStyle
                  placeholder="URL da música"
                  value={this.state.urlInput}
                  onChange={this.onChangeUrl}
                />
                <BtnAdd
                  onClick={() =>
                    this.addTrackToPlaylist(this.state.idPlaylistAdd)
                  }
                >
                  Adicionar
                </BtnAdd>
              </InputsBtn>
            </div>

            <div>{playlistClicked}</div>
          </div>
        </ContainerSection>
      </ContainerBody>
    );
  }
}
