import React from 'react';
import './CardPequeno.css'

import styled from 'styled-components'

const ContainerPequeno = styled.div`
    display: flex;
    
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
`

const ImagemContainePequeno = styled.img`
    width: 40px;
    padding-right:2%;
`


function CardPequeno(props){
    return <ContainerPequeno>
        <ImagemContainePequeno src={props.imagem}/>
        <div>
      <p> <strong>{props.nome}: </strong>
           {props.descricao}</p>
        </div>
    </ContainerPequeno>
}

export default CardPequeno;