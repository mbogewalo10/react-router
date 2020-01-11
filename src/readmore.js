import React from 'react';

const ReadMore = ({match, data}) => {
  let post = data.find(p => p.id == match.params.postId);

  return (
    <div className="details">
      <img src={post.photo} alt={post.title}/>
      <div className="texts">
        <h2>{post.title}</h2>
        <p>{post.text}</p>
      </div>
    </div>
  )
}


export default ReadMore;
