import React, { useState, useRef, useEffect } from "react"
import { useHistory, useParams } from 'react-router-dom'
import { createComment } from "./CommentManager"

export const CommentForm = () => {
    const comment = 'comment'
    const history = useHistory()

    
    const handleCreateComment = () => {
        createComment({
            subject: subject.current.value,
            content: content.current.value
        })
        .then(() => history.push("/Categories"))
        setViewForm(false)
    }

    return (
        <form className="comment_form">
            <h2 className="comment_form__title">New Category</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="categoryLabel">Label for Category: </label>
                    <input type="text" id="" ref={label} required autoFocus className="form-control" placeholder="label" />
                </div>
            </fieldset>
            <button type="submit"
                onClick={evt => {
                    evt.preventDefault() // Prevent browser from submitting the form
                    handleCategoryAdd()
                }}
                className="btn btn-primary">
                Save Category
            </button>
        </form>
    )
}


