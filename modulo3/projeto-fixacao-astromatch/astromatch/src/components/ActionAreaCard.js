import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import styled from "styled-components";
import IconButton from "@mui/material/IconButton";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";

const ImgContent = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  width: 300px;
  height: 300px;
  background-size: cover;
 
`;

const ContentBtns = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function ActionAreaCard(props) {
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardActionArea>
        <ImgContent
          style={{ backgroundImage: `url(${props.linkImage})` }}
          bg={props.linkImage}
        >
        </ImgContent>

        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.name}, {props.age}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <ContentBtns>
        <div>
          <IconButton
            aria-label="dislike"
            color="error"
            size="large"
            onClick={props.dislikeBtn}
          >
            <ThumbDownIcon />
          </IconButton>
        </div>

        <div>
          <IconButton
            aria-label="like"
            color="success"
            size="large"
            onClick={props.likeBtn}
          >
            <ThumbUpIcon />
          </IconButton>
        </div>
      </ContentBtns>
    </Card>
  );
}
