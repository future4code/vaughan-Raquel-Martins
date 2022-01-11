import React from 'react';
import './ImagemButton.css'

import styled from 'styled-components'

const ImagemEBtnContainer = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid lightgray;
    border-radius: 50px;
    width: 200px;
    padding: 15px 30px;
    margin: 10px auto;

`

const ImagemBtn = styled.img`
 width: 30px;
    margin-right: 10px;
`

const Link = styled.a`
color: black;
text-decoration: none;
`


function ImagemButton(props) {
    return (
        <ImagemEBtnContainer>
            <ImagemBtn src={ props.imagem }/>
            <Link target='_blank' href={props.link}><p>{ props.texto }</p></Link>
        </ImagemEBtnContainer>

    )
}

export default ImagemButton;