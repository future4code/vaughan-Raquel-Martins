import React from "react";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { useParams } from "react-router-dom";
import { useRequestData } from "../../hooks/useRequestData";
import CommentDetail from "../../components/CommentDetail/CommentDetail";
import faker from "@faker-js/faker";
import { BASE_URL } from "../../constants/urls";
import { TOKEN_AUTH } from "../../constants/token";
import CreateComment from "../../components/CreateComment/CreateComment";
import useForm from "../../hooks/useForm";
import axios from "axios";

const PostPage = () => {
  const pathParams = useParams();
  const idPostPath = pathParams.id;
  useProtectedPage();
  const [posts, isLoadingPosts, errorPost, getPost] = useRequestData(
    `${BASE_URL}/posts`
  );
  const [allComments, isLoadingComment, errorComment, getAllComments] =
    useRequestData(`${BASE_URL}/posts/${idPostPath}/comments`);

    console.log("COMENTARIOS", allComments)

  const { form, onChangeForm, cleanFields } = useForm({
    body: "",
  });

  const onSubmitComment = (event) => {
    event.preventDefault();

    axios
      .post(`${BASE_URL}/posts/${idPostPath}/comments`, form, {
        headers: {
          Authorization: `${TOKEN_AUTH}`,
        },
      })
      .then((res) => {
        console.log(res);
        cleanFields();
        getPost(`${BASE_URL}/posts`);
        getAllComments(`${BASE_URL}/posts/${idPostPath}/comments`)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  console.log(posts);

  const postSelected =
    posts &&
    posts.find((post) => {
      return post.id === idPostPath;
    });

  const commentsList =
  allComments &&
  allComments.map((comment) => {
      return <CommentDetail  avatar={faker.image.avatar()} 
      name={comment.username}
      timeAgo={new Date(comment.createdAt).toString().slice(0, 21)}
     title={comment.title}
      message={comment.body}
      numberVotes={comment.voteSum}
      />
    });

  return (
    <div>
      {isLoadingPosts && (
        <div className="ui active dimmer">
          <div className="ui text loader">Carregando...</div>
        </div>
      )}
      {postSelected && (
        <CommentDetail
          name={postSelected.username}
          timeAgo={new Date(postSelected.createdAt).toString().slice(0, 21)}
          title={postSelected.title}
          message={postSelected.body}
          avatar={faker.image.avatar()}
          numberVotes={postSelected.voteSum}
          numberComments={postSelected.commentCount}
          commentText={"Comentários"}
        />
      )}
      {!isLoadingPosts && errorPost && <p>Ocorreu um erro</p>}

      <CreateComment
        onSubmitComment={onSubmitComment}
        nameComment={"body"}
        valueComment={form.body}
        onChangeComment={onChangeForm}
      />

      {isLoadingComment && (
        <div className="ui active dimmer">
          <div className="ui text loader">Carregando...</div>
        </div>
      )}
      {!isLoadingComment && errorComment && (
        <p>Ocorreu um erro na requisição</p>
      )}
      {!isLoadingComment && allComments && commentsList}
      {!isLoadingComment && allComments && commentsList.length === 0 && (
        <p>Não há nenhuma comentário </p>
      )}
    </div>
  );
};

export default PostPage;
