import axios from "axios";
import { BASE_URL } from "../constants/urls";
import { goToFeed } from "../routes/coordinator";
export const login = (body, navigate) => {
  axios
    .post(`${BASE_URL}/users/login`, body)
    .then((res) => {
      console.log(res);
      localStorage.setItem("token", res.data.token);
      goToFeed(navigate);
    })
    .catch((err) => {
      console.log(err);
      alert("Erro no login");
    });
};
