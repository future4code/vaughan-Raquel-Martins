import React from "react";
import axios from "axios"

export default class CreatePlaylist extends React.Component{

    state ={
        name: ""
    }

    createPlaylist = () => {
const body = {
    name: this.state.name
};

const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"

axios.post(url, body,{
    headers:{
        Authorization: "raquel-martins-vaughan"
    }
}).then((response) => {
    console.log(response.data)
    this.setState({name:""})
    alert("Playlist criada com sucesso!")
}).catch((error) => {
    console.log(error.message)
})
    }

    onChangePlaylist = (event) => {
        this.setState({name: event.target.value})
    }

render() {

    return(
        <div>
            <button onClick={this.props.goToPlaylist}>Ver playlists!</button>
            

            <div>
                <input 
                placeholder="Nome da playlist"
                value={this.state.name}
                onChange={this.onChangePlaylist}
                />
                <button onClick={this.createPlaylist}>Criar playlist!</button>
            </div>
        </div>
    )
}
}
