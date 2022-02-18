import axios from "axios";
import { URL_BASE } from "../constants/BASE_URL";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
//import { useState } from "react";
import { useProtectedPage } from "../Hooks/useProtectedPage";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
//import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { AUTH_TOKEN } from "../constants/TOKEN_AUTH";
import useFormHook from "../Hooks/useFormHook";

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
`;

function CreateTripPage() {
  useProtectedPage();
  const navigate = useNavigate();

  // const [nome, setNome] = useState("");
  // const [planeta, setPlaneta] = useState("");
  // const [data, setData] = useState("");
  // const [descricao, setDescricao] = useState("");
  // const [duracao, setDuracao] = useState(undefined);

  const { form, onChangeForm, cleanFields } = useFormHook({
    name: "",
    planet: "",
    date: "",
    description: "",
    durationInDays: Number("") ,
  });

  const goBack = () => {
    navigate(-1);
  };

  const createTrip = (event) => {
    event.preventDefault();
  
    axios
      .post(`${URL_BASE}/trips`, form, {
        headers: {
          auth: `${AUTH_TOKEN}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        cleanFields()
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // const onChangeName = (event) => {
  //   setNome(event.target.value);
  // };

  // const onChangePlanet = (event) => {
  //   setPlaneta(event.target.value);
  // };

  // const onChangeDate = (event) => {
  //   setData(event.target.value);
  // };

  // const onChangeDescription = (event) => {
  //   setDescricao(event.target.value);
  // };

  // const onChangeDuration = (event) => {
  //   setDuracao(event.target.value);
  // };

  const todayDate = new Date().toISOString().slice(0,10)

  return (
    <Content>
      <p>CreateTripPage</p>
      <form onSubmit={createTrip}>
        <input
          placeholder="Nome"
          value={form.name}
          onChange={onChangeForm}
          pattern={"^.{5,}"}
          // inputProps={{ pattern: "[a-z]" }}
          title={"O nome deve ter no mínimo 5 caracteres"}
          required
          name={"name"}
        />

        <InputLabel id="demo-simple-select-standard-label">Planeta</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={form.planet}
          onChange={onChangeForm}
          label="Planeta"
          required
          name={"planet"}
        >
          <MenuItem value={"Marte"}>Marte</MenuItem>
          <MenuItem value={"Mercúrio"}>Mercúrio</MenuItem>
          <MenuItem value={"Vênus"}>Vênus</MenuItem>
          <MenuItem value={"Jupter"}>Jupter</MenuItem>
          <MenuItem value={"Urano"}>Urano</MenuItem>
          <MenuItem value={"Saturno"}>Saturno</MenuItem>
          <MenuItem value={"Lua"}>Lua</MenuItem>
          <MenuItem value={"Plutão"}>Plutão</MenuItem>
          <MenuItem value={"Plutão"}>Netuno</MenuItem>
          {/* <MenuItem value={"Éris"}>Éris</MenuItem>
          <MenuItem value={"Ceres"}>Ceres</MenuItem>
          <MenuItem value={"Haumea"}>Haumea</MenuItem>
          <MenuItem value={"Makemake"}>Makemake</MenuItem> */}
          <MenuItem value={"Terra"}>Terra</MenuItem>
          {/* <MenuItem value={"XO-4"}>XO-4</MenuItem>
          <MenuItem value={"HD 107146"}>HD 107146</MenuItem> */}
        </Select>

        <input
          placeholder="Data"
          value={form.date}
          onChange={onChangeForm}
          type="date"
          required
          name={"date"}
          min={todayDate}
        />
        <input
          placeholder="Descrição"
          value={form.description}
          onChange={onChangeForm}
          required
          pattern={"^.{30,}"}
          title={"O texto deve ter no mínimo 30 caracteres"}
          name={"description"}

        />
        <input
          placeholder="Duração em dias"
          value={form.durationInDays}
          onChange={onChangeForm}
          type={"number"}
          required
          min={50}
          title={"O número de dias deve ser no mínimo 50"}
          name={"durationInDays"}

        />
        <button onClick={goBack}>Voltar</button>
        <button type={"submit"} >Criar</button>
      </form>
    </Content>
  );
}

export default CreateTripPage;
