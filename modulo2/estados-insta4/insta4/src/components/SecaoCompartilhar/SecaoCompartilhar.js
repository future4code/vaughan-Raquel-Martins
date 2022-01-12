import React, {Component} from 'react'
import styled from "styled-components";

import iconeFacebook from "../../img/icon-facebook.svg";
import iconeInstagram from "../../img/icon-instagram.svg";
import iconeTwitter from "../../img/icon-twitter.svg";

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 5px;
    
`
const ImagemIcone = styled.img`
width: 25px;
`




export class SecaoCompartilhar extends Component {



	render() {
		return <Container>
            <ImagemIcone src={iconeFacebook}/>
            <ImagemIcone src={iconeInstagram} />
            <ImagemIcone src={iconeTwitter}  />
			
		</Container>
	}
}


