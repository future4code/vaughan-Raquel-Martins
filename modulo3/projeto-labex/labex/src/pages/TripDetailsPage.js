import axios from "axios";
import { useEffect } from "react";
import { URL_BASE } from "../constants/BASE_URL";
//import { useNavigate } from "react-router-dom";
import { useProtectedPage } from "../Hooks/useProtectedPage";

function TripDetailsPage() {
    useProtectedPage()

    // const navigate = useNavigate()



  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get(`${URL_BASE}/trip/DCeSvnWTOM1W8MjGFNjv`, {
        headers: {
          auth: token,
        },
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.response);
      });
  }, []);

  return (
    <div>
      <p>Detalhes da viagem!!!</p>
    </div>
  );
}

export default TripDetailsPage;
