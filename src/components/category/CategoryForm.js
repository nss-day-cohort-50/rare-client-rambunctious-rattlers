import React, { useState, useRef, useEffect } from "react"
import { useHistory } from 'react-router-dom'
import { createCategory } from "./CategoryManager"

export const CategoryForm = () => {
    const label = useRef(null)
    
    const history = useHistory()


    /*
        Get animal state and location state on initialization.
    */
    const handleCategoryAdd = () => {
        createCategory({
            label: label.current.value,
        })
        .then(() => history.push("/CategoryList"))
    }

    return (
        <form className="employeeForm">
            <h2 className="employeeForm__title">New Category</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="categoryLabel">Label for Category: </label>
                    <input type="text" id="categoryLabel" ref={label} required autoFocus className="form-control" placeholder="label" />
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


