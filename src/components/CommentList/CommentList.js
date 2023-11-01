/** @jsx jsx */ /** @jsxRuntime classic */
import Comment from '../Comment/Comment';
import { jsx, css } from '@emotion/react';

function CommentList({comments}) {
  return (
    <div 
      className="CommentList" 
      css={css`padding: 10px; height: 100%; overflow: auto;`}
    >
      {comments.map(comment => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </div> 
  )
}

export default CommentList;