import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';

import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }`

const ContainerApp = styled.div`
 display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`

const PageSectionContainer = styled.div`
 width: 40vw;
  margin: 10px 0;

`

const Titulo = styled.h2`
 display: flex;
  justify-content: center;
  margin-bottom: 20px;
`


  
function App() {
  return (
    <ContainerApp>

      <GlobalStyle/>
      <PageSectionContainer>
        <Titulo>Dados pessoais</Titulo>
        <CardGrande 
          imagem="https://i.ibb.co/gv6JL8D/foto-perfil.png" 
          nome="Raquel Martins" 
          descricao="Olá, sou estudante de Web Full Stack na Labenu, estou em processo
          de transição de carreira, meu objetivo é ajudar as pessoas através da programação, automatizando processos.
          Também sou estudante de farmácia na Faculdades Oswaldo Cruz e me formarei em 2022."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </PageSectionContainer>

      <PageSectionContainer>
<CardPequeno 
imagem="https://cdn-icons.flaticon.com/png/512/3178/premium/3178158.png?token=exp=1641923671~hmac=0e614e33596bd7ba0fb7dc0c8c39452d"
nome="Email"
descricao="raqueldemedeiros@gmail.com"
/>
      </PageSectionContainer>

      <PageSectionContainer>
        <CardPequeno
        imagem="https://cdn-icons-png.flaticon.com/512/447/447031.png"
        nome="Endereço"
        descricao="Barra Funda, São Paulo - SP"
        />
      </PageSectionContainer>

      <PageSectionContainer>
        <Titulo>Experiências profissionais</Titulo>
        <CardGrande 
          imagem="https://i.ibb.co/k0fxK1v/shs.jpg" 
          nome="SHS Health Tech - Estágio" 
          descricao="Realizei padronização e cadastro de itens hospitalares para a modelo da empresa, participei do projeto de implementação do 
          sistema interno da SHS, onde pude contribuir com feedbacks de melhorias da usabilidade do usuário. " 
        />
        
        <CardGrande 
          imagem="https://i.ibb.co/QjtZwm8/oswaldo-logo.png" 
          nome="Faculdades Oswaldo Cruz - Monitoria" 
          descricao="Atuei como monitora de Matemática, Físico-Química, Química Analítica Quantitativa e Qualitativa, auxiliando os alunos de farmácia da Faculdades Oswaldo Cruz nessas matérias." 
        />

<CardGrande 
          imagem="https://pedidopago-v2-prod.s3.sa-east-1.amazonaws.com/01EQ12GY88WZQN7Q2FF8PWSZ5W/logo7704011227899585410.png" 
          nome="Laboratório Buenos Ayres - Estágio" 
          descricao="Atuei no setor de conferência de receitas médicas e na elaboração de rótulos para embalagens de medicamentos" 
        />
      </PageSectionContainer>

      <PageSectionContainer>
        <Titulo>Minhas redes sociais</Titulo>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </PageSectionContainer>

      </ContainerApp>
  );
}

export default App;
