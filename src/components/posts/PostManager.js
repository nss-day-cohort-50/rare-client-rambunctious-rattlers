export const getAllPosts = () => {
    return fetch("http://localhost:8088/posts")
    .then(res => res.json())
};

export const getPostById = (id) => {
    return fetch(`http://localhost:8088/posts/${id}`)
    .then(res => res.json())
};

export const deletePost = (postId) => {
    debugger
    return fetch(`http://localhost:8088/posts/${postId}`, {
        method: "DELETE"
    })
        .then(getAllPosts)
}