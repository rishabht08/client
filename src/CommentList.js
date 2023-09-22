import React from "react";


const CommentList = ({ comments }) => {

  const renderedComments = comments.map((comment) => {
    let content = 'This comment has been rejected';
    if(comment.status === 'approved') {
      content = comment.content;
    }

    if(comment.status === 'pending') {
      content = 'This comment is awaiting confirmation';
    }
    return <li key={comment.id}>{content}</li>;
  });

  return <ul>{renderedComments}</ul>;
};

export default CommentList;
