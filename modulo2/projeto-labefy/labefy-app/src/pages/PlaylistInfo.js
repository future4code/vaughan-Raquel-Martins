import axios from "axios";
import React from "react";


export default class PlaylistInfo extends React.Component {
state = {
    tracks : [],
    idTrack: "",
}

getPlaylistTracks = (id) => {
    axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/track`, {
        headers: {
            Authorization: "raquel-martins-vaughan"
        }
    }).then((response) => {
        console.log(response)
        this.setState({tracks : response.data.result.list })
    }).catch((error) => {
        console.log(error.message)
    })
}
render(){
 
    return(
        <div>

<button onClick={this.props.goToPlaylist}>Ver playlists!</button>
            
   
        </div>
    )
}
}