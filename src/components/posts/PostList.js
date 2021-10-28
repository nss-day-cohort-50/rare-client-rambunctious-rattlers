import React, { useState, useEffect } from "react"
import { useHistory, Link } from "react-router-dom"
import { getAllPosts } from "./PostManager";

export const PostList = (props) => {
    console.log(props)
    const history = useHistory()
    const [posts, setPosts] = useState([])


        useEffect(() => {
            getAllPosts()
            .then(data => setPosts(data))
        }, [])


    return (
        <>

            <h2 className="title">All Posts</h2>
            <div className="allPosts">

                {
                    posts.map((post) => {
                            return <>
                                
                                <div className="space-between">
                                    <h4 className="mp-title" key={`post--${post.id}`}><Link to={`/posts/${post.id}`}>Title: {post.title}</Link></h4>
                                    <p>Author: {post.user.first_name} {post.user.last_name}</p>
                                    <p>Date: {post.publication_date}</p>
                                    <p>{post.content}</p>
                                    <p>Category: {post.category.label}</p>
                                </div>
                            </>
                        }
                    )
                }

                {/* <button className="btn btn-secondary" onClick={() => history.push("/")}>
                    HOME</button> */}
            </div>

        </>
    )
}
