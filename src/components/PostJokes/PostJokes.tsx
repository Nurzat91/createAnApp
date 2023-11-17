import React from 'react';

interface Props{
  jokesText: string;
}
const PostJokes: React.FC<Props> = ({jokesText}) => {
  return (
    <div className="card m-3">
      <div className="card-body">{jokesText}</div>
    </div>
  );
};

export default PostJokes;