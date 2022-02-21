import React from "react"
import { BASE_URL } from "../../constants/urls";
import { useRequestData } from "../../hooks/useRequestData";

const FeedPage = () => {

    const [posts, isLoadingPosts, errorPosts] = useRequestData(
        `${BASE_URL}/posts`
      );

      console.log("POSTS",posts)


    return(
        <div>
            FeedPage
            {isLoadingPosts && (
        <div className="ui active dimmer">
          <div className="ui text loader">Carregando...</div>
        </div>
      )}
      {!isLoadingPosts && errorPosts && <p>Ocorreu um erro na requisição</p>}
      {/* {!isLoadingTrips && posts && tripList}
      {!isLoadingTrips && posts && trips.length === 0 && (
        <p>Não há nenhuma viagem</p>
      )} */}
        </div>
    )
}

export default FeedPage