import axios from "axios";
import React from "react";


export default class PlaylistInfo extends React.Component {
state = {
    tracks : []
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
    const playlistClicked = this.state.tracks.map((music) => {
        return <div>

            <p>Nome:{music.name}</p>
        </div>
    })
    return(
        <div>
            {playlistClicked}
        </div>
    )
}
}