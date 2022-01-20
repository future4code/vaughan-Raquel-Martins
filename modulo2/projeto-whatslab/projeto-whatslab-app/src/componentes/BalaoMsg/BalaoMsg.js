import React from "react";
import styled from "styled-components";



const ContainerBalao = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 60%;
  min-width: 8%;
  margin-bottom: 1em;
  word-wrap: break-word;
  background-color: #ffffff;

  padding: 0.9em 0.8em;
  border-radius: 0.5em;
  font-weight: 450;
  line-height: 1.3;
  

  box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.2);
  
`;

const ContainerNome = styled.div`
  color: #8ab4f8;
  font-size: 0.8em;
  font-weight: 600;
  margin-bottom: 0.2em;
`;

function BalaoMsg(props) {
  return (
   
      <ContainerBalao>
        <ContainerNome>{props.nome}</ContainerNome>
        <div>{props.msg}</div>
      </ContainerBalao>
    
  );
}

export default BalaoMsg;
