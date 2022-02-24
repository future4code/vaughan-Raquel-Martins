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
import {ContainerBody} from "./styled"
import UpVoteGrey from "../../assets/VotesImg/UpVoteGrey.svg";
import UpVoteGreen from "../../assets/VotesImg/UpVoteGreen.svg";
import DownVoteGrey from "../../assets/VotesImg/DownVoteGrey.svg";
import DownVoteRed from "../../assets/VotesImg/DownVoteRed.svg";


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

  

  const postSelected =
    posts &&
    posts.find((post) => {
      return post.id === idPostPath;
    });
    
    console.log(postSelected);

const isVotedLiked = () => {
    if(postSelected.userVote === 1){
      return UpVoteGreen
    }else{
        return UpVoteGrey
    }
}

const isVotedDisliked = () => {
    if(postSelected.userVote < 0){
        return DownVoteRed
      }else{
          return DownVoteGrey
      }
  }



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
    <ContainerBody>
      {isLoadingPosts && (
        <div className="ui active dimmer">
          <div className="ui text loader">Carregando...</div>
        </div>
      )}
      {postSelected && (
          <div className="ui container comments">
        <CommentDetail
          name={postSelected.username}
          timeAgo={new Date(postSelected.createdAt).toString().slice(0, 21)}
          title={postSelected.title}
          message={postSelected.body}
          avatar={faker.image.avatar()}
          numberVotes={postSelected.voteSum}
          numberComments={postSelected.commentCount}
          commentText={"Comentários"}
          imgVoteUp={isVotedLiked()}
        imgVoteDown={isVotedDisliked()}
        
        />
        </div>
      )}
      {!isLoadingPosts && errorPost && <p>Ocorreu um erro</p>}

      <CreateComment
        onSubmitComment={onSubmitComment}
        nameComment={"body"}
        valueComment={form.body}
        onChangeComment={onChangeForm}
      />

<div className="ui container comments">
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
    </ContainerBody>
  );
};

export default PostPage;
