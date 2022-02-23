import React from "react";
import { ContainerVotes, ContainerArrows } from "./styled";
//import { useState } from "react";

const VotesAndCount = (props) => {
//   const [likeBtn, setLikeBtn] = useState(false);
//   const [dislikedBtn, setDislikeBtn] = useState(false);
//   const [colorLiked, setColorLiked] = useState("grey");
//   const [colorDisliked, setColorDisliked] = useState("grey");

 //console.log("VOTES AND COUTN",props)
 
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
            <div onClick={props.onClickUp}>
        <img src={props.imgVoteUp} alt={"like"} />
           </div>
        {props.numberVotes}
        <div onClick={props.onClickDown}>
        <img src= {props.imgVoteDown} alt={"dislike"} />
        </div>
        
       

            </ContainerArrows>
      <div>
          {props.numberComments} {props.commentText}
      </div>
    </ContainerVotes>
  );
};

export default VotesAndCount;
