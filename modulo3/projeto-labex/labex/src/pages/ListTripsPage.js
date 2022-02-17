// import axios from "axios";
// import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { URL_BASE } from "../constants/BASE_URL";
import { useRequestData } from "../Hooks/useRequestData";
import style from "styled-components";
import HeaderTextIcon from "../components/HeaderTextIcon";
import universeImg from "../assets/universe.png";

const BodyContent = style.div`

background-size: cover;
min-height: 100vh;

top:0;
margin: 0;
padding: 0;
color: white;
display:grid;
grid-template-rows: 150px 1fr;
flex-grow: 1;
height: 100%;

-webkit-background-size: cover;
-moz-background-size: cover;
-o-background-size: cover;
background-size: cover;
overflow: auto;
text-shadow: 2px 2px 5px #000000;
`;

function ListTripsPage() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const goToApplicationFormPage = () => {
    navigate("/trips/application");
  };

  const [trips, isLoadingTrips, errorTrips] = useRequestData(
    `${URL_BASE}/trips`
  );

  const tripList =
    trips &&
    trips.trips.map((travel) => {
      return <p>{travel.name}</p>;
    });



  return (
    <BodyContent style={{ backgroundImage: `url(${universeImg})` }}>
      <HeaderTextIcon />

      <div>
        <button onClick={goBack}>Voltar</button>
        <button onClick={goToApplicationFormPage}>Inscrever-se</button>
      </div>

      <h1>Lista de Viagens</h1>

      {isLoadingTrips && (
        <div class="ui active dimmer">
          <div class="ui text loader">Carregando...</div>
        </div>
      )}
      {!isLoadingTrips && errorTrips && <p>Ocorreu um erro na requisição</p>}
      {!isLoadingTrips && trips && tripList}
      {!isLoadingTrips && trips && trips.length === 0 && (
        <p>Não há nenhuma viagem</p>
      )}

    </BodyContent>
  );
}

export default ListTripsPage;
