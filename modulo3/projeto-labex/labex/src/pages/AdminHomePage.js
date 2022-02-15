import { useNavigate } from 'react-router-dom';

function AdminHomePage() {

    const navigate = useNavigate()

    const goBack = () => {
      navigate(-1)
    }

    const goToCreateTripPage = () => {
        navigate("/admin/trips/create")
    }

    return (
      <div>
          <button onClick={goBack}>Voltar</button>
          <button onClick={goToCreateTripPage}>Criar Viagem</button>
        <p>AdminHomePage</p>

      </div>
    )
  }
  
export default AdminHomePage;