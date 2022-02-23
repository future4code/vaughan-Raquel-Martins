import React from "react";
import CommentDetail from "../../components/CommentDetail/CommentDetail";
import { BASE_URL } from "../../constants/urls";
import { useRequestData } from "../../hooks/useRequestData";
import faker from "@faker-js/faker";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { ContainerBody } from "./styled";
import useForm from "../../hooks/useForm";
import axios from "axios";
import { TOKEN_AUTH } from "../../constants/token";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
// import {  useParams } from "react-router-dom";
import { useState } from "react";
//import { goToPost } from "../../routes/coordinator"
import { useNavigate } from "react-router-dom";

const FeedPage = () => {
  useProtectedPage();
  //    const pathParams = useParams();
  const navigate = useNavigate()
  const [colorLiked, setColorLiked] = useState("grey");
  //const [colorDisliked, setColorDisliked] = useState("grey");
  const [directionVote, setDirection] = useState(0);

  const [posts, isLoadingPosts, errorPosts, getPost] = useRequestData(
    `${BASE_URL}/posts`
  );

  //   const [comments, isLoadingComments, errorComments, getComments] = useRequestData(
  //     `${BASE_URL}/posts/${pathParams.id}/comments`
  //   );

  const { form, onChangeForm, cleanFields } = useForm({
    title: "",
    body: "",
  });

  console.log("POSTS", posts);

  //   const goToPostId = (idPost) => {
  //       console.log(idPost)
  //     navigate(`post/${pathParams.idPost}`)
  //   }

  const createPostVote = (idVote, valueVote) => {
    const body = {
      direction: directionVote,
    };

    if (valueVote) {
      setDirection(directionVote + 1);
    } else {
      setDirection(directionVote - 1);
    }
    axios
      .post(`${BASE_URL}/posts/${idVote}/votes`, body, {
        headers: {
          Authorization: `${TOKEN_AUTH}`,
        },
      })
      .then((response) => {
        console.log(response);
        setColorLiked("green");
        getPost(`${BASE_URL}/posts`);
      });
  };
const goToPostDetail = (postId) =>{
    navigate(`/post/${postId}`);
}
  const postsList =
    posts &&
    posts.map((post) => {
      console.log(post.createdAt);
      return (
        <div key={post.id} onClick={() => goToPostDetail(post.id)}>
          <div className="ui container comments">
            <CommentDetail
              name={post.username}
              timeAgo={new Date(post.createdAt).toString().slice(0, 21)}
              title={post.title}
              message={post.body}
              avatar={faker.image.avatar()}
              onClickUp={() => createPostVote(post.id, true)}
              onClickDown={() => createPostVote(post.id, false)}
              colorLiked={colorLiked}
              // colorDisliked={colorDisliked}
              numberVotes={post.voteSum}
            />
          </div>
        </div>
      );
    });

  const createPost = (event) => {
    event.preventDefault();
    axios
      .post(`${BASE_URL}/posts`, form, {
        headers: {
          Authorization: `${TOKEN_AUTH}`,
        },
      })
      .then((res) => {
        console.log(res);
        getPost(`${BASE_URL}/posts`);
        cleanFields();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <ContainerBody>
      <form onSubmit={createPost}>
        <TextField
          name={"title"}
          value={form.title}
          label="Título"
          variant="outlined"
          onChange={onChangeForm}
          margin={"dense"}
          required
          fullWidth
        />

        <TextField
          placeholder="Compartilhe algo com a comunidade LabEddit!"
          fullWidth
          name={"body"}
          value={form.body}
          onChange={onChangeForm}
          margin={"dense"}
          required
        />
        <Button type={"submit"} variant="contained" color="primary" fullWidth>
          Postar!
        </Button>
      </form>

      <div>
        {isLoadingPosts && (
          <div className="ui active dimmer">
            <div className="ui text loader">Carregando...</div>
          </div>
        )}
        {!isLoadingPosts && errorPosts && <p>Ocorreu um erro na requisição</p>}
        {!isLoadingPosts && posts && postsList}
        {!isLoadingPosts && posts && postsList.length === 0 && (
          <p>Não há nenhuma viagem</p>
        )}
      </div>
    </ContainerBody>
  );
};

export default FeedPage;
