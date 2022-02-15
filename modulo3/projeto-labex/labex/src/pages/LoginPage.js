import { useNavigate } from 'react-router-dom';


function LoginPage() {

    const navigate = useNavigate()

    const goBack = () => {
        navigate(-1);
    }

    const goToAdminHomePage = () => {
        navigate("/admin/trips/list")
    }
    return (
      <div>
        <p>LoginPage</p>
        <button onClick={goBack}>Voltar</button>
        <button onClick={goToAdminHomePage}>Entrar</button>
      </div>
    );
  }
  
  export default LoginPage;
  