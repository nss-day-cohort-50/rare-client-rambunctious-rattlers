import React, { useState, useEffect } from "react"
import { useHistory, Link } from "react-router-dom"
import { getAllPosts, deletePost, fetchPosts } from "./PostManager";

export const PostList = (props) => {
    console.log(props)
    const history = useHistory()
    const [posts, setPosts] = useState([])


    const fetchPosts = ()=>{
        getAllPosts()
        .then(data => setPosts(data))
    } 

    useEffect(() => {
        fetchPosts() 
    }, [])

    return (
        <>

            <h2 className="title">Your Posts</h2>
            <div className="allPosts">

                {
                    posts.map((post) => {
                        if (post?.user_id === parseInt(localStorage.getItem("rare_user_id"))) {
                            
                            return <>
                                
                                <div className="space-between">
                                    <h4 className="mp-title" key={`post--${post.id}`}><Link to={`/posts/${post.id}`}>Title: {post.title}</Link></h4>
                                    <p>Author: {post.user.first_name} {post.user.last_name}</p>
                                    <p>Date: {post.publication_date}</p>
                                    <p>{post.content}</p>
                                    <p>Category: {post.category.label}</p>
                                    

                                    <div className="buttons">
                                        {/* <button value={entry.id} onClick={() => { editEntry(entry.id) }}>EDIT</button> */}
                                        <button className="btn" value={post.id} onClick={() => { deletePost(post.id, fetchPosts) }}>DELETE</button>

                                    </div>
                                </div>
                            </>


                        }
                    }
                    )
                }

                {/* <button className="btn btn-secondary" onClick={() => history.push("/")}>
                    HOME</button> */}
            </div>

        </>
    )
}
