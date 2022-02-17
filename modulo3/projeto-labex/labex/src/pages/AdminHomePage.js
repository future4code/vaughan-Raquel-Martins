import { useNavigate } from "react-router-dom";
import { useProtectedPage } from "../Hooks/useProtectedPage";
import { useEffect, useState } from "react";
import { URL_BASE } from "../constants/BASE_URL";
//import { useRequestList } from "../Hooks/useRequestList";
import axios from "axios";


function AdminHomePage() {
  useProtectedPage();
  const navigate = useNavigate();
const [trips, setTrips] = useState([]) ;
const [isLoadingTrips, setLoading] = useState(false);
const [errorTrips, setError] = useState("");

//   const [trips, isLoadingTrips, errorTrips] = useRequestList();

 useEffect(()=>{
     getTrips()
 }, [])

const getTrips = () => {
    setLoading(true);
    axios
      .get(`${URL_BASE}/trips`)
      .then((res) => {
        setTrips(res.data.trips);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  };



//   const getTripDetail = (travel) => {
// axios.get(`${URL_BASE}/trip/${travel.id}`, {
//     headers  :{
//         auth : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IkNmbjZPd0YyOVU5TDJSYzV0UWo1IiwiZW1haWwiOiJhc3Ryb2RldkBnbWFpbC5jb20uYnIiLCJpYXQiOjE1NzMxNDM4Njh9.mmOrfGKlXpE3pIDUZfS3xV5ZwttOI2Exmoci9Sdsxjs'
//     }
// }).then((res)=>{
//     navigate(``)
// })
//   }

  const tripList =
    trips &&
    trips.map((travel) => {
      return (
        <div>
          <div>
            {travel.name} <button onClick={() => deleteTrip(travel)}>X</button>
          </div>
        </div>
      );
    });

  const deleteTrip = (travel) => {
    console.log(travel);
    if (
      window.confirm(`Tem certeza que deseja deletar a viagem ${travel.name}`)
    ) {
      axios
        .delete(`${URL_BASE}/trips/${travel.id}`, {
          headers: {
            auth: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ilp3N0tNUEp2RmFqRmtmUlE4N3RBIiwiZW1haWwiOiJhc3Ryb2RldkBnbWFpbC5jb20uYnIiLCJpYXQiOjE2MTc5MDE4NDd9.yKi2emMJ-Ln3fNigx09HNZIDWPEhF8e_WnbYAAd1r2k",
          },
        })
        .then((response) => {
          console.log(response);
          alert("Viagem deletada com sucesso!");
          getTrips();
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const goBack = () => {
    navigate("/");
  };

  const goToCreateTripPage = () => {
    navigate("/admin/trips/create");
  };

  const logoutUser = () => {
    window.localStorage.clear();
    navigate("/login");
  };

  return (
    <div>
      <h1>Painel Administrativo</h1>
      <button onClick={goBack}>Voltar</button>
      <button onClick={goToCreateTripPage}>Criar Viagem</button>
      <button onClick={logoutUser}>Logout</button>

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
    </div>
  );
}

export default AdminHomePage;
