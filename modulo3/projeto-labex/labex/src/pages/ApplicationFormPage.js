import { useNavigate } from "react-router-dom";
import { useRequestData } from "../Hooks/useRequestData";
import { URL_BASE } from "../constants/BASE_URL";
import { useState } from "react";
import useFormHook from "../Hooks/useFormHook";
import axios from "axios";

function ApplicationFormPage() {
  //const [countries] = useRequestData(`https://restcountries.com/v3.1/all`)
  //const [option, setOption] = useState()
  const [id, setId] = useState("");
  const [trips, isLoadingTrips, errorTrips] = useRequestData(
    `${URL_BASE}/trips`
  );

  const { form, onChangeForm, cleanFields } = useFormHook({
    name: "",
    age: "",
    applicationText: "",
    profession: "",
    country: "",
  });

  const applyToTrip = (event) => {
    event.preventDefault();

    axios
      .post(`${URL_BASE}/trips/${id}/apply`, form)
      .then((res) => {
        console.log(res);
        cleanFields();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onChangeId = (event) => {
    setId(event.target.value);
    console.log("ID", event.target.value);
  };

  const tripList =
    trips &&
    trips.trips.map((travel) => {
      return <option value={travel.id}>{travel.name}</option>;
    });

  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  

  return (
    <div>
      <h1>Inscreva-se para uma viagem</h1>

      <form onSubmit={applyToTrip}>
        <select
          placeholder="Escolha uma viagem"
          value={id}
          onChange={onChangeId}
        >
          {!isLoadingTrips && trips && tripList}

          {isLoadingTrips && (
            <div class="ui active dimmer">
              <div class="ui text loader">Carregando...</div>
            </div>
          )}
          {!isLoadingTrips && errorTrips && (
            <p>Ocorreu um erro na requisição</p>
          )}

          {!isLoadingTrips && trips && trips.length === 0 && (
            <p>Não há nenhuma viagem</p>
          )}
        </select>
        <input
          onChange={onChangeForm}
          name={"name"}
          value={form.name}
          placeholder="Nome"
          required
          pattern={"^.{3,}"}
          title={"O nome deve ter no mínimo 3 caracteres"}
        />
        <input
          onChange={onChangeForm}
          name={"age"}
          value={form.age}
          placeholder="Idade"
          required
          type={"number"}
          min={18}
        />
        <input
          onChange={onChangeForm}
          name={"applicationText"}
          value={form.applicationText}
          placeholder="Texto de Candidatura"
          required
          pattern={"^.{30,}"}
          title={"O texto deve ter no mínimo 30 caracteres"}
          
        />
        <input
          onChange={onChangeForm}
          name={"profession"}
          value={form.profession}
          placeholder="Profissão"
          required
          pattern={"^.{10,}"}
          title={"A profissão deve ter no mínimo 10 caracteres"}
        />
        <input
          onChange={onChangeForm}
          name={"country"}
          value={form.country}
          placeholder="País"
          required
        />

        <button onClick={goBack}>Voltar</button>
        <button type={"submit"}>Enviar</button>
      </form>
    </div>
  );
}

export default ApplicationFormPage;
