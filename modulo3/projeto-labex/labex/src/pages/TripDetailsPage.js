import axios from "axios";
import { useEffect, useState } from "react";
import { URL_BASE } from "../constants/BASE_URL";
import { useProtectedPage } from "../Hooks/useProtectedPage";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { AUTH_TOKEN } from "../constants/TOKEN_AUTH";

//import Button from "@mui/material/Button";

function TripDetailsPage() {
  const [trips, setTrip] = useState([]);
  const [candidate, setCandidates] = useState([]);
  const [aprove, setAprove] = useState([]);
  useProtectedPage();
  const pathParams = useParams();
  const navigate = useNavigate();


  useEffect(() => {
    getTripDetail();
  }, []);

  const getTripDetail = () => {
    axios
      .get(`${URL_BASE}/trip/${pathParams.id}`, {
        headers: {
          auth: `${AUTH_TOKEN}`,
        },
      })
      .then((response) => {
        setTrip(response.data.trip);
        setCandidates(response.data.trip.candidates);
        setAprove(response.data.trip.approved);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  const decideCandidate = (candidateId, choice) => {
    const body = {
      approve: choice,
    };

    axios
      .put(
        `${URL_BASE}/trips/${pathParams.id}/candidates/${candidateId}/decide`,
        body,
        {
          headers: {
            auth: `${AUTH_TOKEN}`,
          },
        }
      )
      .then((response) => {
        console.log(response);
        getTripDetail();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const goBack = () => {
    navigate(-1);
  };

  const candidatesList = candidate.map((candidate) => {
    return (
      <div>
        <p>Nome:{candidate.name}</p>
        <button onClick={() => decideCandidate(candidate.id, true)}>Aprovar</button>
        <button onClick={() => decideCandidate(candidate.id, false)}>Rejeitar</button>
      </div>
    );
  });

  const aprovedList = aprove.map((candidate) => {
    return (
      <div>
        <p>{candidate.name}</p>
      </div>
    );
  });

  return (
    <div>
      <p>Detalhes da viagem!!!</p>
      <button onClick={goBack}>Voltar</button>

      <h1>{trips.name}</h1>
      <p>Nome: {trips.name}</p>
      <p>Descrição: {trips.description}</p>
      <p>Planeta: {trips.planet}</p>
      <p>Data: {trips.date}</p>

      <h1>Candidatos </h1>
      {candidate.length !== 0 ? (
        <div>{candidatesList}</div>
      ) : (
        <p>Não há candidatos</p>
      )}

      <h1>Aprovados</h1>
      {aprove.length !== 0 ? (
        <div>{aprovedList}</div>
      ) : (
        <p>Não há candidatos aprovados</p>
      )}
    </div>
  );
}

export default TripDetailsPage;
