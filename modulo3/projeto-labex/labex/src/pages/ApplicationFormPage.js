import { useNavigate } from 'react-router-dom';


function ApplicationFormPage() {

    const navigate = useNavigate()

    const goBack = () => {
        navigate(-1);
    }
  return (
    <div>
      
        <h1>Inscreva-se para uma viagem</h1>
        <input />

        <button onClick={goBack}>Voltar</button>
        <button>Enviar</button>
      
    </div>
  );
}

export default ApplicationFormPage;
