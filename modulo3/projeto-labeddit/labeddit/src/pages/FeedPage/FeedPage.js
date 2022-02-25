import React from "react";
import { BASE_URL } from "../../constants/urls";
import { useRequestData } from "../../hooks/useRequestData";
import faker from "@faker-js/faker";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { ContainerBody, ContainerImg, Img, SearchField} from "./styled";
import useForm from "../../hooks/useForm";
import axios from "axios";
import { TOKEN_AUTH } from "../../constants/token";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import UpVoteGrey from "../../assets/VotesImg/UpVoteGrey.svg";
import UpVoteGreen from "../../assets/VotesImg/UpVoteGreen.svg";
import DownVoteGrey from "../../assets/VotesImg/DownVoteGrey.svg";
import DownVoteRed from "../../assets/VotesImg/DownVoteRed.svg";
import ImgWaiting from "../../assets/waiting-requisition.webp"
import { useState } from "react";
import AlertSuccess from "../../components/AlertSuccess/AlertSuccess";
import PostComponent from "../../components/PostComponent/PostComponent"
import Typography from '@mui/material/Typography';

const FeedPage = () => {
    const [alertSuccess, setAlertSuccess] = useState(false)
    const [query, setQuery] = useState("")
  useProtectedPage();
  const navigate = useNavigate();

  const [posts, isLoadingPosts, errorPosts, getPost] = useRequestData(
    `${BASE_URL}/posts`
  );

  const { form, onChangeForm, cleanFields } = useForm({
    title: "",
    body: "",
  });

  const createPostVote = (idVote, num) => {
    const body = {
      direction: num,
    };

    axios
      .post(`${BASE_URL}/posts/${idVote}/votes`, body, {
        headers: {
          Authorization: `${TOKEN_AUTH}`,
        },
      })
      .then((response) => {
        getPost(`${BASE_URL}/posts`);
      })
      .catch((error) => {
        alert(error.response.message);
      });
  };
  const goToPostDetail = (postId) => {
    navigate(`/post/${postId}`);
  };

  const deletePostVote = (idVote) => {
  
    axios
      .delete(`${BASE_URL}/posts/${idVote}/votes`, {
        headers: {
         Authorization: `${TOKEN_AUTH}`,
        },
      })
      .then((response) => {
        getPost(`${BASE_URL}/posts`);
      })
      .catch((error) => {
        alert(error.response.message);
      });
  };

  const postsList =
    posts &&
    posts.filter((post) => {
        return post.title.toLowerCase().includes(query.toLowerCase()) || post.body.toLowerCase().includes(query.toLowerCase())
    }).map((post) => {
      const selectedColorVoteLike = () => {
        if (post.userVote < 0 || post.userVote === null) {
          return UpVoteGrey;
        } else {
          return UpVoteGreen;
        }
      };

      const selectedColorVoteDislike = () => {
        if (post.userVote > 0 || post.userVote === null) {
          return DownVoteGrey;
        } else {
          return DownVoteRed;
        }
      };

      return (
        <div key={post.id}>
          <div className="ui container comments">
            <PostComponent
              clickToPostDetail={() => goToPostDetail(post.id)}
              name={post.username}
              timeAgo={new Date(post.createdAt).toString().slice(0, 21)}
              title={post.title}
              message={post.body}
              avatar={faker.image.avatar()}
              onClickUp={() => createPostVote(post.id, 1)}
              onClickDown={() => createPostVote(post.id, -1)}
              imgVoteUp={selectedColorVoteLike()}
              imgVoteDown={selectedColorVoteDislike()}

              onClickChangeUpVote={() => deletePostVote(post.id)}
              onClickChangeDownVote={() => deletePostVote(post.id)}

              numberVotes={post.voteSum}
              numberComments={post.commentCount}
              commentText={"Comentários"}
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
        setAlertSuccess(true)
        getPost(`${BASE_URL}/posts`);
        cleanFields();
      })
      .catch((err) => {
        alert(err.response.message);
      });
  };

  const onCloseAlert = () => {
    setAlertSuccess(false)
}

const updateQuery = (event) => {
    setQuery(event.target.value)
}
  return (
    <ContainerBody>
          {alertSuccess && <AlertSuccess alertText={"Parabéns, você criou um post!"} onClose={onCloseAlert} /> }
<SearchField>
<TextField
placeholder="Procurar"
color="secondary"
fullWidth
value={query}
onChange={updateQuery}
/>
</SearchField>

<Typography variant="h4" color="primary"> Crie um post</Typography>
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
          id="outlined-multiline-static"
          multiline
          rows={4}
          fullWidth
          name={"body"}
          value={form.body}
          onChange={onChangeForm}
          margin={"dense"}
          required
        />
        <Button type={"submit"} variant="contained" color="primary" fullWidth margin={"dense"}>
          Postar!
        </Button>
      </form>

      <div>
        {isLoadingPosts && (
          <div className="ui active dimmer">
            <div className="ui text loader">Carregando...</div>
          </div>
        )}
        {!isLoadingPosts && errorPosts && (
        <ContainerImg>
             <Img src={ImgWaiting} alt="Ilustração de erro na requisição" />
              <p>Ocorreu um erro na requisição, tente novamente mais tarde.</p>
            </ContainerImg>)}
        {!isLoadingPosts && posts && postsList}
        {!isLoadingPosts && posts && postsList.length === 0 && (
          <p>Não há nenhuma postagem</p>
        )}
      </div>

      {/* <Pagination count={10} /> */}
    </ContainerBody>
  );
};

export default FeedPage;
