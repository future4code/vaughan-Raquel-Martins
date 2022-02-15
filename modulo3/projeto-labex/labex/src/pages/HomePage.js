import style from "styled-components";
import universeImg from "../assets/space-ship.png";
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header'
import CardHome from '../components/CardHome'


const BodyContent = style.div`

background-size: cover;
min-height: 100vh;

top:0;
margin: 0;
padding: 0;
color: white;
display:grid;
grid-template-rows: 150px 1fr;

`;

const SectionContent = style.div`
display: flex;
justify-content: center;
border-radius: 10px;
`


function HomePage() {

  const navigate = useNavigate()

  const goToListTripsPage = () => {
    navigate("/trips/list")
  }

  const goToLoginPage = () => {
    navigate("/login")
  }


  return (
    <BodyContent style={{ backgroundImage: `url(${universeImg})` }}>
      <Header goToListTripsPage={goToListTripsPage} goToLoginPage={goToLoginPage} />
     
      <SectionContent>
      <CardHome  />

     
      </SectionContent>
    </BodyContent>
  );
}

export default HomePage;


