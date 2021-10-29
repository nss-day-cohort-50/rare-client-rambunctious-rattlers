export const getAllPosts = () => {
    return fetch("http://localhost:8088/posts")
    .then(res => res.json())
};

export const getPostById = (id) => {
    return fetch(`http://localhost:8088/posts/${id}`)
    .then(res => res.json())
};

export const deletePost = (postId, func) => {
    fetch(`http://localhost:8088/posts/${postId}`, {
        method: "DELETE"
    })
        .then(func)
}

