export const getCurrentAuthor = (id) => {
    return fetch(`http://localhost:8088/users/${id}`)
        .then(res => res.json())
}
