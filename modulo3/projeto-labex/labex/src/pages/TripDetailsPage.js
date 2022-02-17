import axios from "axios";
import { useEffect, useState } from "react";
import { URL_BASE } from "../constants/BASE_URL";
import { useProtectedPage } from "../Hooks/useProtectedPage";
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

function TripDetailsPage() {
    const [trip ,setTrip] = useState({})
    useProtectedPage()
    const pathParams = useParams()
    console.log("pathParams",pathParams)
    console.log("pathParams.id",pathParams.id)
    const navigate = useNavigate()



  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get(`${URL_BASE}/trip/${pathParams.id}`, {
        headers: {
          auth: token,
        },
      })
      .then((response) => {
        console.log(response.data.trip);
        setTrip(response.data.trip)
      })
      .catch((error) => {
        console.log(error.response);
      });
  }, []);


  const goBack = () => {
    navigate(-1);
  };

  return (
    <div>


      <p>Detalhes da viagem!!!</p>
      <button onClick={goBack}>Voltar</button>
      <h1>{trip.name}</h1>
      <p>Nome: {trip.name}</p>
      <p>Descrição: {trip.description}</p>
      <p>Planeta: {trip.planet}</p>
      <p>Data: {trip.date}</p>




    </div>
  );
}

export default TripDetailsPage;
