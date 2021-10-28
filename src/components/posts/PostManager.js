export const getAllPosts = () => {
    return fetch("http://localhost:8088/posts")
      .then(res => res.json())
  };

export const getPostById = () => {
    return fetch("http://localhost:8088/posts/${post.id}")
      .then(res => res.json())
  };
  

  