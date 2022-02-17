import { useNavigate } from "react-router-dom";
import { useProtectedPage } from "../Hooks/useProtectedPage";
//import { useEffect, useState } from "react";
import { URL_BASE } from "../constants/BASE_URL";
import { AUTH_TOKEN } from "../constants/TOKEN_AUTH";
import { useRequestData } from "../Hooks/useRequestData";
import axios from "axios";

function AdminHomePage() {
  useProtectedPage();
  const navigate = useNavigate();

  const [trips, isLoadingTrips, errorTrips, getTrips] = useRequestData(
    `${URL_BASE}/trips`
  );

  const goToTripDetailsPage = (id) => {
    console.log(id);
    navigate(`/admin/trips/${id}`);
  };
  const tripList =
    trips &&
    trips.trips.map((travel) => {
      return (
        <div>
          <div>
            <div onClick={() => goToTripDetailsPage(travel.id)}>
              {travel.name}
            </div>{" "}
            <div>
              <button onClick={() => deleteTrip(travel)}>X</button>
            </div>
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
            auth: `${AUTH_TOKEN}`,
          },
        })
        .then((response) => {
          console.log(response);
          alert("Viagem deletada com sucesso!");
          getTrips(`${URL_BASE}/trips`);
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
