import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { URL_BASE } from "../constants/BASE_URL";
import HeaderTextIcon from "../components/HeaderTextIcon";
import styled from "styled-components";

const Body = styled.div`
  display: grid;
  grid-template-columns: 1fr;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  border-radius: 10px;
  flex-direction: column;
  width: 70%;
`;

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitLogin = () => {
    console.log(email, password);

    const body = {
      email: email,
      password: password,
    };

    axios
      .post(`${URL_BASE}/login`, body)
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        console.log(response.data);
        goToAdminHomePage();
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  const navigate = useNavigate();

  const goBack = () => {
    navigate("/");
  };

  const goToAdminHomePage = () => {
    navigate("/admin/trips/list");
  };

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };
  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };
  return (
    <Body>
      <HeaderTextIcon />

      <Container>
        <p>LoginPage</p>
        <input
          placeholder="Email"
          label="Email"
          type="email"
          value={email}
          onChange={onChangeEmail}
        />
        <input
          placeholder="Senha"
          type="password"
          value={password}
          onChange={onChangePassword}
        />

        <button onClick={goBack}>Voltar</button>
        <button onClick={onSubmitLogin}>Entrar</button>
      </Container>
    </Body>
  );
}

export default LoginPage;
