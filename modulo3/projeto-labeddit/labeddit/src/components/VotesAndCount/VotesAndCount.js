// import React from "react";
// import { ContainerVotes } from "./styled";
// import { DownVote } from "./VotesImg/DownVote";
// import { UpVote } from "./VotesImg/UpVote";
// import { useState } from "react";

// const VotesAndCount = (props) => {
//   const [likeBtn, setLikeBtn] = useState(false);
//   const [dislikedBtn, setDislikeBtn] = useState(false);
//   const [colorLiked, setColorLiked] = useState("grey");
//   const [colorDisliked, setColorDisliked] = useState("grey");

//  console.log(props)
 
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
//   return (
//     <ContainerVotes>
//       <UpVote onClick={isLiked} color={colorLiked} />
//       <DownVote onClick={isDesliked} color={colorDisliked} />
//     </ContainerVotes>
//   );
// };

// export default VotesAndCount;
