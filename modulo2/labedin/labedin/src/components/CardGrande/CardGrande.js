import React from 'react';
import './CardGrande.css'
import styled from 'styled-components'

const BigContainer = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid lightgray;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;
    border-radius: 20px;
`

const ImgContainer = styled.div`
margin-right: 10px;
    border-radius: 50%;
`

const Imagem = styled.img`
    border-radius: 50%;
    width: 80px;  
    
`
const NomeEDescricao = styled.div`
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
`
const Nome = styled.h4`
 margin-bottom: 15px;
`

const TempoInicialEFinal = styled.p`
color: gray;
font-size: 0.8rem;
`

const ContainerColunm = styled.div`
display: flex;
flex-direction: column;
`

function CardGrande(props) {
    return (
        <BigContainer>

            <ImgContainer>
                <Imagem src={ props.imagem } />
            </ImgContainer>
                
            
            <ContainerColunm>

           
            <NomeEDescricao>
                <Nome>{ props.nome }</Nome>
                <p>{ props.descricao }</p>
            </NomeEDescricao>

            <TempoInicialEFinal>{props.inicial} - {props.final}</TempoInicialEFinal>
             </ContainerColunm>
        </BigContainer>
    )
}

export default CardGrande;