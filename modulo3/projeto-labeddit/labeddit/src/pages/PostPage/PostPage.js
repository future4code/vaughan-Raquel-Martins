import React from "react";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { useParams } from "react-router-dom";
import { useRequestData } from "../../hooks/useRequestData";
import CommentDetail from "../../components/CommentDetail/CommentDetail";
import faker from "@faker-js/faker";
import { BASE_URL } from "../../constants/urls";

const PostPage = () => {
  const pathParams = useParams();
  console.log(pathParams);
  useProtectedPage();
  const [posts, isLoadingPosts] = useRequestData(
    `${BASE_URL}/posts`
  );
  console.log(posts);

  const idPostPath = pathParams.id;

  const postSelected = posts && posts.find((post)=>{
    return post.id === idPostPath
  })

  return (
    <div>
      {isLoadingPosts && (
        <div className="ui active dimmer">
          <div className="ui text loader">Carregando...</div>
        </div>
      )}
      {/* {!isLoadingPosts && errorPosts && <p>Ocorreu um erro na requisição</p>}
        {!isLoadingPosts && posts && postSelected}
        {!isLoadingPosts && posts && postSelected.length === 0 && (
          <p>Não há nenhuma viagem</p>
        )} */}

        {postSelected && <CommentDetail 
          name={postSelected.username}
          timeAgo={new Date(postSelected.createdAt).toString().slice(0, 21)}
          title={postSelected.title}
          message={postSelected.body}
          avatar={faker.image.avatar()}
        />}
    </div>
  );
};

export default PostPage;
