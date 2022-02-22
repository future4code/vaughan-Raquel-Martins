import React from "react";
import { Container } from  "./styled"

const CommentDetail = (props) => {
    return (
      <Container>
        <div className="comment">
      <a className="avatar">
        <img alt="avatar"  src={props.avatar} />
      </a>
      <div className="content">
        <a className="author">
          {props.name}
        </a>
        <div className="metadata">
          <span className="date">{props.timeAgo}</span>
        </div>
        <div><h5>{props.title}</h5></div>
        <div className="text">{props.message}</div>
      </div>
    </div> 
    </Container>
    )
}

export default CommentDetail