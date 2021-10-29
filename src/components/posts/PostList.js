import React, { useState, useEffect } from "react"
import { useHistory, Link } from "react-router-dom"
import { getAllPosts, deletePost, fetchPosts } from "./PostManager";

export const PostList = (props) => {
    console.log(props)
    const history = useHistory()
    const [posts, setPosts] = useState([])
    const [showComments, setShowComments ] = useState(false)


    const fetchPosts = ()=>{
        getAllPosts()
        .then(data => setPosts(data))
    } 

    useEffect(() => {
        fetchPosts()
        console.log('posts', posts)
    }, [])
    useEffect(() => {
        console.log('posts', posts)
    }, [posts])


    const toggleForm = () => {
        if (showComments == true) {
            setShowComments(false)
        } else {
            setShowComments(true)
        }
    }

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
                                    <button onClick={() => history.push(`/commentForm/${post.id}`)}
                                        className='comment-btn'>Add Comment</button> 
                                    { showComments ?
                                        <button onClick={() => toggleForm()}>Hide Comments</button>
                                        :
                                        <button onClick={() => toggleForm()}>Show Comments</button>
                                    }
                                    { showComments ?
                                        <ul>
                                            <h3>{post.comment.subject}</h3>
                                            <p>{post.comment.content}</p>
                                        </ul>
                                        : ""
                                    }
                                    <div className="buttons">
                                        {/* <button value={entry.id} onClick={() => { editEntry(entry.id) }}>EDIT</button> */}
                                        <button className="btn" value={post.id} onClick={() => { deletePost(post.id, fetchPosts) }}>DELETE</button>

                                    </div>
                                </div>
                            </>
                        }
                    )
                
                }

            </div>

        </>
    )
}
