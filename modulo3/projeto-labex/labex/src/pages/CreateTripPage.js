import axios from "axios";
import { URL_BASE } from "../constants/BASE_URL";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";
import { useProtectedPage } from "../Hooks/useProtectedPage";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { AUTH_TOKEN } from "../constants/TOKEN_AUTH";

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
`;

function CreateTripPage() {
  useProtectedPage();
  const navigate = useNavigate();

  const [nome, setNome] = useState("");
  const [planeta, setPlaneta] = useState("");
  const [data, setData] = useState("");
  const [descricao, setDescricao] = useState("");
  const [duracao, setDuracao] = useState(undefined);

  const goBack = () => {
    navigate(-1);
  };

  const CreateTrip = () => {
    const body = {
      name: nome,
      planet: planeta,
      date: data,
      description: descricao,
      durationInDays: Number(duracao),
    };
    axios
      .post(`${URL_BASE}/trips`, body, {
        headers: {
          auth: `${AUTH_TOKEN}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        setNome("");
        setPlaneta("");
        setData("");
        setDescricao("");
        setDuracao(undefined);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onChangeName = (event) => {
    setNome(event.target.value);
  };

  const onChangePlanet = (event) => {
    setPlaneta(event.target.value);
  };

  const onChangeDate = (event) => {
    setData(event.target.value);
  };

  const onChangeDescription = (event) => {
    setDescricao(event.target.value);
  };

  const onChangeDuration = (event) => {
    setDuracao(event.target.value);
  };

  return (
    <Content>
      <p>CreateTripPage</p>
      <input placeholder="Nome" value={nome} onChange={onChangeName} />

      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">Planeta</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={planeta}
          onChange={onChangePlanet}
          label="Planeta"
        >
          <MenuItem value={"Marte"}>Marte</MenuItem>
          <MenuItem value={"Mercúrio"}>Mercúrio</MenuItem>
          <MenuItem value={"Vênus"}>Vênus</MenuItem>
          <MenuItem value={"Jupter"}>Jupter</MenuItem>
          <MenuItem value={"Urano"}>Urano</MenuItem>
          <MenuItem value={"Saturno"}>Saturno</MenuItem>
          <MenuItem value={"Lua"}>Lua</MenuItem>
          <MenuItem value={"Plutão"}>Plutão</MenuItem>
          <MenuItem value={"Éris"}>Éris</MenuItem>
          <MenuItem value={"Ceres"}>Ceres</MenuItem>
          <MenuItem value={"Haumea"}>Haumea</MenuItem>
          <MenuItem value={"Makemake"}>Makemake</MenuItem>
          <MenuItem value={"Terra"}>Terra</MenuItem>
          <MenuItem value={"XO-4"}>XO-4</MenuItem>
          <MenuItem value={"HD 107146"}>HD 107146</MenuItem>
        </Select>
      </FormControl>

      <input
        placeholder="Data"
        value={data}
        onChange={onChangeDate}
        type="date"
      />
      <input
        placeholder="Descrição"
        value={descricao}
        onChange={onChangeDescription}
      />
      <input
        placeholder="Duração em dias"
        value={duracao}
        onChange={onChangeDuration}
        type="number"
      />
      <button onClick={goBack}>Voltar</button>
      <button onClick={CreateTrip}>Criar</button>
    </Content>
  );
}

export default CreateTripPage;
