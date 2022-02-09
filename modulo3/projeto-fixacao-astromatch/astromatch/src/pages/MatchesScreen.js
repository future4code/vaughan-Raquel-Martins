import HeaderMatches from "../components/HeaderMatches";
import styled from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";

const Content = styled.div`
  min-height:100vh;
  width: 100%;
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
  width: 50px;
  height: 50px;
  padding: 0 10px;
`;
function MatchesScreen(props) {
  const [listaMatches, setListaMatches] = useState([]);

  useEffect(() => {
    getMatches();
  }, []);

  const getMatches = () => {
    axios
      .get(
        `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/raquel-martins/matches`
      )
      .then((response) => {
        console.log(response.data.matches);
        setListaMatches(response.data.matches);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const listaRenderizadaMatches = listaMatches.map((match) => {
    return (
      <ListContent key={match.name}>
        <Img src={match.photo} />
        <p>{match.name}</p>
      </ListContent>
    );
  });

  return (
    <div>
      <HeaderMatches goToHome={props.goToHome} />
      <div>
         <Content>
           {listaRenderizadaMatches}
           </Content>
      </div>
     
    </div>
  );
}

export default MatchesScreen;
