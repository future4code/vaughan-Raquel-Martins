import axios from "axios";
import { useEffect, useState } from "react";
import { URL_BASE } from "../constants/BASE_URL";
import { useProtectedPage } from "../Hooks/useProtectedPage";
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";


function TripDetailsPage() {
    const [trip ,setTrip] = useState({})
    const [candidate , setCandidates] = useState([])
    useProtectedPage()
    const pathParams = useParams()
    const navigate = useNavigate()

    console.log(candidate)

console.log("CANDIDATOOOS", candidate)

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
        setCandidates(response.data.trip.candidates)
      })
      .catch((error) => {
        console.log(error.response);
      });
  }, []);

  const decideCandidate = (candidateId) => {
    const token = localStorage.getItem("token");
const body =
    {
      approve: true
    }

    axios.put(`${URL_BASE}/trips/${pathParams.id}/candidates/${candidateId}/decide`, body ,{
      headers : {
        auth: token,
      },
    })
    .then((response)=>{
     console.log(response)
     
    }).catch((error)=>{
      console.log(error)
    })
  }

  const goBack = () => {
    navigate(-1);
  };

  
  const candidatesList = candidate.map((candidate) => {
      return (
        <div>
      <p>Nome:{candidate.name}</p>
      <button onClick={()=> decideCandidate(candidate.id)}>Aprovar</button>
      </div>
      )
    });


  return (
    <div>


      <p>Detalhes da viagem!!!</p>
      <button onClick={goBack}>Voltar</button>
      <h1>{trip.name}</h1>
      <p>Nome: {trip.name}</p>
      <p>Descrição: {trip.description}</p>
      <p>Planeta: {trip.planet}</p>
      <p>Data: {trip.date}</p>


<h1>Candidatos </h1>
{candidate ? (<div>{candidatesList}</div>) : <p>Não há candidatos</p>}


    </div>
  );
}

export default TripDetailsPage;
