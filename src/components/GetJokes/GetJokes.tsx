import React from 'react';
interface Props{
  onClick: () => void;
}

const GetJokes: React.FC<Props> = React.memo(({ onClick }) => {
  return (
    <button type="button" className="btn btn-outline-dark" onClick={onClick}>
      Get new jokes
    </button>
  );
});
export default GetJokes;