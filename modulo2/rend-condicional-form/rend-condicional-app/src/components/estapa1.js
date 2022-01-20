import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
display: flex;
flex-direction:column;
row-gap: 1rem;
justify-content:center;
align-items:center;

`

export class Etapa1 extends React.Component {
    render(){

        return (
        <Container>
            <h1>ETAPA 1: Dados gerais</h1>
            <label>1. Qual o seu nome?</label>
            <input placeholder='Nome'
            />

           <label>2. Informe a sua idade</label>
            <input placeholder='Idade' />

            <label>3. Iforme o seu email</label>
            <input placeholder='Email' />

            <label>4. Qual a sua escolaridade?</label>
            <select>
           <option>Ensino Médio Incompleto</option> 
           <option>Ensino Médio Completo</option>
           <option>Ensino Superior Incompleto</option>
           <option>Ensino Superior Completo</option>
            </select>
        </Container>
    )
    }
    
}
