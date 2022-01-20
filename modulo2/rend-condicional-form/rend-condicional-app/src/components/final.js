import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
display: flex;
flex-direction:column;
row-gap: 1rem;
justify-content:center;
align-items:center;

`

export class Final extends React.Component {
    render(){

        return (
        <Container>
            <h1>ETAPA FINAL: O formulário acabou</h1>
            
       <p>Muito obrigado por participar! Entraremos em contato!</p>
        </Container>
    )
    }
    
}
