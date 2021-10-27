import React, { useState, useRef, useEffect } from "react"
import { useHistory } from 'react-router-dom'
import { addCategory } from "./CategoryManager"

export const addCategory = () => {
    const name = useRef(null)
    const location = useRef(null)
    const animal = useRef(null)
    const address = useRef(null)

    const history = useHistory()

    const [categories, setCategories] = useState([])

    /*
        Get animal state and location state on initialization.
    */
    useEffect(() => {
       getCategories().then(categoriesData => setCategories(categoriesData))
    }, [])

    const handleCategoryAdd = () => {
        addCategory({
            name: name.current.value,
            address: address.current.value,
            locationId,
            animalId
        })
        .then(() => history.push("/CategoryList"))
    
    }

    return (
        <form className="employeeForm">
            <h2 className="employeeForm__title">New Category</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="categoryLabel">Label for Category: </label>
                    <input type="text" id="categoryLabel" ref={address} required autoFocus className="form-control" placeholder="label" />
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


