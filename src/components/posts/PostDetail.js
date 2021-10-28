import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import { getPostById } from "./PostManager"  // <---.js or no?
//import author post detail view css 

export const PostDetails = () => {
    const [post, setPost] = useState({}) 
    const { postId } = useParams()
    //const history = useHistory()  <--- for future edit post button
    
    useEffect(() => {
        getPostById(postId)
            .then(setPost)
    }, [])

    return (
        <section className="post">
            <h3 className="post__title">{post.title}</h3>
            <div className="post__publication_date">{post.publication_date}</div>
            <div className="post__content">{post.content}</div>
            <div className="post__user_id">By {post.user?.first_name}</div>    
            <div className="post__category_name"> {post.category?.label}</div>

            {/* <button onClick={() => {                            <--- for future edit post button
                history.push(`/posts/edit/${post.id}`)
            }}>Edit</button> */}
       
        </section>
    )
}