import React, { useState, useRef, useEffect } from "react"
import { useHistory, useParams } from 'react-router-dom'
import { createComment } from "./CommentManager"

export const CommentForm = () => {
    const content = useRef()
    const subject = useRef()
    const postId = useParams()
    const history = useHistory()
    const userId = localStorage.getItem('rare_user_id')
    
    const handleCreateComment = (e) => {
        e.preventDefault()
        const newComment = {
            'subject': subject.current.value,
            'content': content.current.value,
            'user_id': parseInt(userId),
            'post_id': parseInt(postId.postId),
            'creation_date': ''
        }

        return createComment(newComment)
        .then(() => history.push("/posts"))
    }

    return (
        <form className="comment_form" onSubmit={handleCreateComment}>
            <h2 className="comment_form__title">New Comment</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="categoryLabel">Subject:</label>
                    <input type="text" id="" ref={subject} required autoFocus className="form-control" placeholder="label" />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="categoryLabel">Comment:</label>
                    <input type="text" id="" ref={content} required autoFocus className="form-control" placeholder="label" />
                </div>
            </fieldset>
            <button type="submit"className="btn btn-primary">
                Save Comment
            </button>
        </form>
    )
}


