import { useNavigate } from "react-router-dom";
import { URL_BASE } from "../constants/BASE_URL";
import { useRequestData } from "../Hooks/useRequestData";
import styled from "styled-components";
import HeaderTextIcon from "../components/HeaderTextIcon";
import universeImg from "../assets/Preview.svg";
import  CardTrips  from  "../components/CardTrips"
import Button from "@mui/material/Button";

const BodyContent = styled.div`

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

const CenterList = styled.div`
display: grid;
justify-items: center;

`

const Btns = styled.div`
    display:grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 1rem;
    `

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

  console.log(trips)

  const tripList =
    trips &&
    trips.trips.map((travel) => {
      return (
      <CardTrips name={travel.name} description={travel.description}
      planet={travel.planet} period={travel.durationInDays} 
      date={travel.date}
      />)
    });



  return (
    <BodyContent style={{ backgroundImage: `url(${universeImg})` }}>
      <HeaderTextIcon />

      
<CenterList>
<Btns>  
        <Button variant="contained" onClick={goBack}>Voltar</Button>
        <Button variant="contained" onClick={goToApplicationFormPage}>Inscrever-se</Button>
      </Btns>
<h1>Lista de Viagens</h1>

      {isLoadingTrips && (
        <div className="ui active dimmer">
          <div className="ui text loader">Carregando...</div>
        </div>
      )}
      {!isLoadingTrips && errorTrips && <p>Ocorreu um erro na requisição</p>}
      {!isLoadingTrips && trips && tripList}
      {!isLoadingTrips && trips && trips.length === 0 && (
        <p>Não há nenhuma viagem</p>
      )}
</CenterList>
    </BodyContent>
  );
}

export default ListTripsPage;
