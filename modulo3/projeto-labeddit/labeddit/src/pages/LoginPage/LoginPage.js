import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { StyledContainer, Content, ContentInput } from "./styled";
import { goToSignup, goToFeed } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../constants/urls";
import useForm from "../../hooks/useForm";

const LoginPage = () => {
  const navigate = useNavigate();

  const { form, onChangeForm } = useForm({
    email: "",
    password: "",
  });

  const login = (event) => {
    event.preventDefault();
    axios.post(`${BASE_URL}/users/login`, form)
    .then((res)=>{
        console.log(res)
        localStorage.setItem("token", res.data.token);
        goToFeed(navigate)
    }).catch((err)=>{
        console.log(err)
    })
  };

  return (
    <StyledContainer>
      <Content>
        <form onSubmit={login}>
          <ContentInput>
            <TextField
              name={"email"}
              value={form.email}
              id="filled-basic"
              label="Email"
              variant="filled"
              onChange={onChangeForm}
            />
          </ContentInput>
          <ContentInput>
            <TextField
              name={"password"}
              value={form.password}
              id="filled-basic"
              label="Senha"
              variant="filled"
              type="password"
              onChange={onChangeForm}
            />
          </ContentInput>

          <Button type={"submit"} variant="contained" color="primary">
            Entrar
          </Button>
          <Button
            onClick={() => goToSignup(navigate)}
            variant="contained"
            color="primary"
          >
            Cadastrar
          </Button>
        </form>
      </Content>
    </StyledContainer>
  );
};

export default LoginPage;
