import React from 'react';

function Stars(props) {
  const stars = []
  for(let i = 1; i <= props.stars; i++){
    stars.push(
      <span key={i}>*</span>
    )
  }
  return (
    <span>{stars}</span>
  );
}

export default Stars;
