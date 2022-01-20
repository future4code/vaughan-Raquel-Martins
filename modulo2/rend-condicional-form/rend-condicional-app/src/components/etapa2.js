import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
display: flex;
flex-direction:column;
row-gap: 1rem;
justify-content:center;
align-items:center;

`

export class Etapa2 extends React.Component {
    render(){

        return (
        <Container>
            <h1>ETAPA 2: Informações educacionais para quem está cursando (ou já terminou) o ensino superior</h1>
            <label>1. Qual curso?</label>
            <input placeholder='Curso'
            />

           <label>2. Qual a unidade de ensino?</label>
            <input placeholder='unidade de ensino' />

        </Container>
    )
    }
    
}
