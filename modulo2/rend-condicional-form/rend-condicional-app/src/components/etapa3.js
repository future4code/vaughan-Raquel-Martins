import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
display: flex;
flex-direction:column;
row-gap: 1rem;
justify-content:center;
align-items:center;

`

export class Etapa3 extends React.Component {
    render(){

        return (
        <Container>
            <h1>ETAPA 3: Informações sobre quem não se formou no ensino superior nem está cursando</h1>
            <label>1. Por que você não terminou um curso de graduação?</label>
            <input 
            />

           <label>2. Você fez algum curso complementar?</label>
            <input  />
            <select>
           <option>Curso técnico</option> 
           <option>Cursos de inglês</option>
           <option>Não fiz curso complementar</option>
            </select>
        
        </Container>
    )
    }
    
}
