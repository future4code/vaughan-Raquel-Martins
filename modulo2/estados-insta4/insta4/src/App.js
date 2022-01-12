import React from "react";
import styled from "styled-components";
import Post from "./components/Post/Post";

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

class App extends React.Component {
  render() {
    return (
      <MainContainer>
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
        <Post
          nomeUsuario={"michele"}
          fotoUsuario={"https://picsum.photos/id/388/50/50"}
          fotoPost={"https://picsum.photos/id/237/200/150"}
        />
      </MainContainer>
    );
  }
}

export default App;
