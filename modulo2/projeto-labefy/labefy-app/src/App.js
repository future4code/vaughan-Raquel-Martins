import "./App.css";
import React from "react";
import CreatePlaylist from "./pages/CreatePlaylist";
import AllPlaylist from "./pages/AllPlaylist";
import PlaylistInfo from "./pages/PlaylistInfo";
import axios from "axios";

export default class App extends React.Component {
  state = {
    currentScreen: "create",
  };

  goToRegister = () => {
    this.setState({ currentScreen: "create" });
  };

  goToPlaylist = () => {
    this.setState({ currentScreen: "playlist" });
  };

  goToInfo = (id) => {
    this.setState({ currentScreen: "info", idTrack: id });

    console.log(this.state.idTrack);
  };

  chooseScreen = () => {
    switch (this.state.currentScreen) {
      case "create":
        return <CreatePlaylist goToPlaylist={this.goToPlaylist} />;
      case "playlist":
        return (
          <AllPlaylist
            goToRegister={this.goToRegister}
            moreInfo={this.goToInfo}
          />
        );
      case "info":
        return <PlaylistInfo goToPlaylist={this.goToPlaylist} />;
      default:
        return <CreatePlaylist />;
    }
  };

  // showInfo = () => {
  // this.setState.showDetail({showDetail : !this.state.showDetail})
  // console.log(this.state.showDetail)
  // }

  // getPlaylistTracks = (id) => {
  //   axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/track`, {
  //       headers: {
  //           Authorization: "raquel-martins-vaughan"
  //       }
  //   }).then((response) => {
  //       console.log(response)
  //       this.setState({tracks : response.data.result.list })
  //   }).catch((error) => {
  //       console.log(error.message)
  //   })
  // }

  render() {
    return (
      <div>
        {this.chooseScreen()}

      </div>
    );
  }
}
