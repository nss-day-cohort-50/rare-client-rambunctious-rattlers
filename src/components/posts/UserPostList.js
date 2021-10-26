import React, { useState, useEffect } from "react"
import { useHistory, Link } from "react-router-dom"
import { getAllPosts } from "./PostManager.js";

export const Entries = (props) => {
    console.log(props)
    const history = useHistory()
    const [posts, setPosts] = useState([])



    const UserPostList =
        useEffect(() => {
            getAllPosts()
                .then(data => setPosts(data))
        }, [])


    return (
        <>

            <h2 className="title title-out-of-form">Your Posts</h2>
            <div id="entry">

                {
                    posts.map((post) => {
                        if (post?.userId === parseInt(localStorage.getItem("lu_token"))) {
                            return <>

                                <div className="space-between">
                                    <h4 className="mp-title">{post.title}</h4>
                                    <p> <span className="check-in-categories">MORNING PAGE: </span> {post.publication_date}</p>
                                    <p> <span className="check-in-categories">BLURT:</span> {post.content}</p>
                                    <p> <span className="check-in-categories">BLURT:</span> {post.category.name}</p>
                                    <p> <span className="check-in-categories">BLURT:</span> {post.user_id.}</p>

                                    {/* <div className="buttons">
                                        <Button value={entry.id} onClick={() => { editEntry(entry.id) }}>EDIT</Button>
                                        <Button className="btn btn-secondary delete" value={entry.id} onClick={() => { deleteEntry(entry.id) }}>DELETE</Button>

                                    </div> */}
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
