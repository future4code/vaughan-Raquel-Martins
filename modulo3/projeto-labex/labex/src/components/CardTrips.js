import style from "styled-components";

const Content = style.div`
box-shadow: rgba(240, 46, 170, 0.4) -5px 5px, rgba(240, 46, 170, 0.3) -10px 10px, rgba(240, 46, 170, 0.2) -15px 15px, rgba(240, 46, 170, 0.1) -20px 20px, rgba(240, 46, 170, 0.05) -25px 25px;
width: 60%;
border-radius: 1rem
display:flex;
flex-direction:column;
padding: 2rem;
margin: 2rem 2rem;

background: rgba(255, 255,255, 0.1);
backdrop-filter: blur( 10px );
--webkit-backdrop-filter: blur(10px);
border-radius:1rem;
`



function CardHomeTrips(props) {
  return (
      
    <Content>
     <h3>Nome: {props.name}</h3>
     <h3>Descrição: {props.description}</h3>
     <h3>Planeta: {props.planet}</h3>
     <h3>Duração: {props.period}</h3>
     <h3>Data: {props.date}</h3>
    </Content>
    
  );
}

export default CardHomeTrips;
