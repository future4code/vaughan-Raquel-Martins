import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { URL_BASE } from "../constants/BASE_URL";
//import { useRequestData } from "../Hooks/useRequestData";

function ListTripsPage() {
    const [trips , setTrips] = useState([])

    useEffect(() => {
        getTrips()
    }, [])
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const goToApplicationFormPage = () => {
    navigate("/trips/application")
  };


  const getTrips = () => {
      axios.get(`${URL_BASE}/trips`)
      .then((res)=>{
          console.log(res.data)
          setTrips(res.data.trips)
      }).catch((err) =>{
          console.log(err)
      })
  }
//   const [trips, isLoadingTrip, errorTrip] = useRequestData(`${URL_BASE}/trips`);

//   const tripList =
//     trips &&
//     trips.map((trip) => {
//       return <p>{trip.name}</p>;
//     });

    console.log(trips)
    const tripList = trips.map((trip) => {
       return <p>{trip.name}</p>
    })
    
  return (
    <div>
      <button onClick={goBack}>Voltar</button>
      <button onClick={goToApplicationFormPage}>Inscrever-se</button>
      <h1>Lista de Viagens</h1>

      {/* {isLoadingTrip && <p>Carregando...</p>}
      {!isLoadingTrip && errorTrip && <p>Ocorreu um erro na requisição</p>}
      {!isLoadingTrip && trips && trips.length > 0 && tripList}
      {!isLoadingTrip && trips && trips.length === 0 && 
        <p>Não há nenhuma viagem</p>} */}

        {tripList}


    </div>
  );
}

export default ListTripsPage;
