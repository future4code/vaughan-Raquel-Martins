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
import Button from "@mui/material/Button"

const FeedPage = () => {
  useProtectedPage();
  const [posts, isLoadingPosts, errorPosts, getPost] = useRequestData(
    `${BASE_URL}/posts`
  );

  const { form, onChangeForm, cleanFields } = useForm({
    title: "",
    body: "",
  });

  console.log("POSTS", posts);

  const postsList =
    posts &&
    posts.map((post) => {
      return (
        <div className="ui container comments" key={post.id}>
          <CommentDetail
            name={post.username}
            timeAgo={post.createdAt.replaceAll("T", " - ").slice(0, 18)}
            title={post.title}
            message={post.body}
            avatar={faker.image.avatar()}
          />
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
        getPost(`${BASE_URL}/posts`)
        cleanFields()
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
