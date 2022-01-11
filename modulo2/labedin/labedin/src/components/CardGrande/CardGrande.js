import React from 'react';
import './CardGrande.css'
import styled from 'styled-components'

const BigContainer = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;
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

function CardGrande(props) {
    return (
        <BigContainer>

            <ImgContainer>
                <Imagem src={ props.imagem } />
            </ImgContainer>
                
            
            
            <NomeEDescricao>
                <Nome>{ props.nome }</Nome>
                <p>{ props.descricao }</p>
            </NomeEDescricao>
        </BigContainer>
    )
}

export default CardGrande;