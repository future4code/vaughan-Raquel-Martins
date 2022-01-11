import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';
import CardGrandePerfil from './components/CardGrande/CardGrandePerfil';

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
        <CardGrandePerfil 
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
          inicial="maio de 2021"
          final="novembro de 2021"
        />
        
        <CardGrande 
          imagem="https://i.ibb.co/QjtZwm8/oswaldo-logo.png" 
          nome="Faculdades Oswaldo Cruz - Monitoria" 
          descricao="Atuei como monitora de Matemática, Físico-Química, Química Analítica Quantitativa e Qualitativa, auxiliando os alunos de farmácia da Faculdades Oswaldo Cruz nessas matérias." 
          inicial="fevereiro de 2020"
          final="novembro de 2021"
        />

<CardGrande 
          imagem="https://pedidopago-v2-prod.s3.sa-east-1.amazonaws.com/01EQ12GY88WZQN7Q2FF8PWSZ5W/logo7704011227899585410.png" 
          nome="Laboratório Buenos Ayres - Estágio" 
          descricao="Atuei no setor de conferência de receitas médicas e na elaboração de rótulos para embalagens de medicamentos" 
          inicial="março de 2021"
          final="maio de 2021"
        />
      </PageSectionContainer>
<PageSectionContainer>
  <Titulo>Formação acadêmica</Titulo>
  <CardGrande 
    imagem="https://i.ibb.co/QcLkzqd/labenu-logo.png"
    nome="Labenu"
    descricao="Web Full Stack, Engenharia de Software"
    inicial="novembro de 2021"
    final="julho de 2022"
  />

<CardGrande 
    imagem="https://i.ibb.co/QjtZwm8/oswaldo-logo.png"
    nome="Faculdades Oswaldo Cruz"
    descricao="Bacharelado em Farmácia, Farmácia"
    inicial="2018"
    final="2022"
  />
</PageSectionContainer>
      <PageSectionContainer>
        <Titulo>Minhas redes sociais</Titulo>
        <ImagemButton 
          imagem="https://cdn-icons-png.flaticon.com/512/174/174857.png" 
          link="https://www.linkedin.com/in/raquel-martins-17b194171/"
          texto="Linkedin" 
        />        

        <ImagemButton 
          imagem="https://cdn-icons-png.flaticon.com/512/25/25231.png" 
          link="https://github.com/Raquelmms"
          texto="GitHub" 
        />        
      </PageSectionContainer>

      </ContainerApp>
  );
}

export default App;
