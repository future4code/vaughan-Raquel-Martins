import axios from "axios";
import { URL_BASE } from "../constants/BASE_URL";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
`;

function CreateTripPage() {
  const [nome, setNome] = useState("");
  const [planeta, setPlaneta] = useState("");
  const [data, setData] = useState("");
  const [descricao, setDescricao] = useState("");
  const [duracao, setDuracao] = useState(undefined);

  const navigate = useNavigate();

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
            auth : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Im93T2g5ZWo2bW50akZqNUNRMVB4IiwiZW1haWwiOiJhc3Ryb2RldkBnbWFpbC5jb20uYnIiLCJpYXQiOjE1ODk1NjI5MDh9.aB4dNbTCkToXB7pdzEa-tuMa-QbRQDUd93eva4-cec0'
          }
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onChangeName = (event) => {
      setNome(event.target.value)
  }

  const onChangePlanet = (event) => {
    setPlaneta(event.target.value)
}

const onChangeDate = (event) => {
    setData(event.target.value)
}

const onChangeDescription = (event) => {
    setDescricao(event.target.value)
}

const onChangeDuration = (event) => {
    setDuracao(event.target.value)
}

  return (
    <Content>
      <p>CreateTripPage</p>
      <input placeholder="Nome" value={nome} 
      onChange={onChangeName}
      />
      <input placeholder="Planeta" value={planeta}
      onChange={onChangePlanet}
      />
      <input placeholder="Data" value={data}
      onChange={onChangeDate}
      type="date"
      />
      <input placeholder="Descrição" value={descricao}
      onChange={onChangeDescription}
      />
      <input placeholder="Duração em dias" value={duracao} 
      onChange={onChangeDuration}  type="number"
      />
      <button onClick={goBack}>Voltar</button>
      <button onClick={CreateTrip}>Criar</button>
    </Content>
  );
}

export default CreateTripPage;
