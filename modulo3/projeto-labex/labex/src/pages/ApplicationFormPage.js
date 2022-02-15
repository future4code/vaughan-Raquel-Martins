import { useNavigate } from 'react-router-dom';


function ApplicationFormPage() {

    const navigate = useNavigate()

    const goBack = () => {
        navigate(-1);
    }
  return (
    <div>
      <p>
        Inscreva-se para uma viagem
        <input />

        <button onClick={goBack}>Voltar</button>
        <button>Enviar</button>
      </p>
    </div>
  );
}

export default ApplicationFormPage;
