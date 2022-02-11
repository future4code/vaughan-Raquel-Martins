import HeaderMatches from "../components/HeaderMatches";
import styled from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";

const Content = styled.div`
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1), 0 2px 8px rgba(0, 0, 0, 0.22);
  border-radius: 8px;
  min-height: 400px;

  overflow: scroll;
  overflow-x: hidden;
  width: 400px;
  height: 600px;
`;

const ContentMatches = styled.div`
  width: 400px;
  height: 600px;
`;

const ListContent = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;

  &:hover {
    background-color: #d3d3d3;
    transition: background-color 1s ease;
  }
`;
const Img = styled.img`
  border-radius: 50%;
  width: 60px;
  height: 50px;
  padding: 0 10px;
`;
function MatchesScreen(props) {
  const [listaMatches, setListaMatches] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getMatches();
  }, []);

  const getMatches = () => {
    axios
      .get(
        `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/raquel-martins/matches`
      )
      .then((response) => {
        setLoading(true);
        setListaMatches(response.data.matches);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const listaRenderizadaMatches = listaMatches.map((match) => {
    return (
      <ListContent key={match.name} onClick={() => props.goToChat()}>
        <Img src={match.photo} />
        <p>{match.name}</p>
      </ListContent>
    );
  });

  return (
    <Content>
      <HeaderMatches goToHome={props.goToHome} />

      {loading ? (
        <ContentMatches>{listaRenderizadaMatches}</ContentMatches>
      ) : (
        <div className="ui active inverted dimmer">
          <div className="ui small text loader">Buscando...</div>
        </div>
      )}
    </Content>
  );
}

export default MatchesScreen;
