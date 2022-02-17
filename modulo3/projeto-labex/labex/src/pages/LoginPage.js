import { useNavigate } from "react-router-dom";
import axios from "axios";
import { URL_BASE } from "../constants/BASE_URL";
import HeaderTextIcon from "../components/HeaderTextIcon";
import styled from "styled-components";
import useFormHook from "../Hooks/useFormHook"

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
//   const [form, setForm] = useState({email: "" , password: ""})
const { form, onChangeForm } = useFormHook({email: "" , password: ""})

  const onSubmitLogin = (event) => {
    event.preventDefault();

    axios
      .post(`${URL_BASE}/login`, form)
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        console.log(response.data);
        navigate("/admin/trips/list");
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  const navigate = useNavigate();

  const goBack = () => {
    navigate("/");
  };


//   const onChangeForm = (event) => {
//       const {name , value} = event.target
//    setForm({...form, [name] : value})
//   }
  return (
    <Body>
      <HeaderTextIcon />

      <Container>
        <p>LoginPage</p>

        <form onSubmit={onSubmitLogin}>
          <div>
            <input
              name="email"
              placeholder="Email"
              label="Email"
              type="email"
              value={form.email}
              onChange={onChangeForm}
              required
            />
          </div>
          <div>
            <input
              name="password"
              placeholder="Senha"
              type="password"
              value={form.password}
              onChange={onChangeForm}
              required
              pattern={"^.{3,}"}
              title={"Sua senha deve ter no mínimo 3 caracteres"}
            />
          </div>

          <button onClick={goBack}>Voltar</button>
          <button type={"submit"}>Fazer Login</button>
        </form>
      </Container>
    </Body>
  );
}

export default LoginPage;
