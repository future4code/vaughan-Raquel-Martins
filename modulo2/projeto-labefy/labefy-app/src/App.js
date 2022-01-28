import "./App.css";
import React from "react";
import CreatePlaylist from "./pages/CreatePlaylist";
import AllPlaylist from "./pages/AllPlaylist";


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
      default:
        return <CreatePlaylist />;
    }
  };



  render() {
    return (
      <div>
        {this.chooseScreen()}

      </div>
    );
  }
}
