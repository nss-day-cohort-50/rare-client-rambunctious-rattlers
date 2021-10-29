import React, {  useRef } from "react"
import { createNewTag } from "./TagManager"

export const TagForm = ({ getTags, changeView }) => {
    const label = useRef(null)

const handleTagAdd = () => {
    createNewTag({
            label: label.current.value,
        })
        .then(getTags)
        .then(changeView) //get tags is passed as a prop and re-renders the tags
    }

    return (
        <>
        <form className="tagForm">
            <h2 className="tagForm__title">New Tag</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="tagLabel">Label for Tag: </label>
                    <input type="text" id="" ref={label} required autoFocus className="form-control" placeholder="label" />
                </div>
            </fieldset>
            <button type="submit"
                onClick={evt => {
                    evt.preventDefault() // Prevent browser from submitting the form
                    handleTagAdd()
                }}
                className="btn btn-primary">
                Save Tag
            </button>
            <button type="submit" value="Cancel" className="btn btn-primary" onClick={() => changeView} formNoValidate>Cancel</button>
        </form>
        
        
        </>
    )
}