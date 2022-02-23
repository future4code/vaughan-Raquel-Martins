import React from "react";
import { ContainerVotes, ContainerArrows } from "./styled";
import { DownVote } from "./VotesImg/DownVote";
import { UpVote } from "./VotesImg/UpVote";
//import { useState } from "react";

const VotesAndCount = (props) => {
//   const [likeBtn, setLikeBtn] = useState(false);
//   const [dislikedBtn, setDislikeBtn] = useState(false);
//   const [colorLiked, setColorLiked] = useState("grey");
//   const [colorDisliked, setColorDisliked] = useState("grey");

 console.log("VOTES AND COUTN",props)
 
//   const isLiked = () => {
//     setLikeBtn(!likeBtn);
//     console.log(likeBtn)
//     if (likeBtn) {
//       setColorLiked("green");
//     } else {
//       setColorLiked("grey");
//     }
//   };

//   const isDesliked = () => {
//     setDislikeBtn(!dislikedBtn);
//     if (dislikedBtn) {
//       setColorDisliked("red");
//     } else {
//       setColorDisliked("grey");
//     }
//   };
  return (
    <ContainerVotes>
        <ContainerArrows>
        <UpVote onClick={props.onClickUp} color={props.colorLiked} />
        {props.numberVotes}
      <DownVote onClick={props.onClickDown} color={props.colorDisliked} />
            </ContainerArrows>
      <div>
          {props.numberVotes} Comentários
      </div>
    </ContainerVotes>
  );
};

export default VotesAndCount;
