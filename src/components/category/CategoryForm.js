import React, { useState, useRef, useEffect } from "react"
import { useHistory, useParams } from 'react-router-dom'
import { getCategoryById, updateCategory } from "./CategoryManager"

export const CategoryForm = () => {
    const { categoryId } = useParams()
    const [ category, setCategory] = useState({})
    const [ label, setLabel] = useState('')
    const history = useHistory()

    useEffect(() => {
        getCategoryById(categoryId).then((categoryData) => {
            setCategory(categoryData)
            setLabel(categoryData.label)
        })
    }, [])

    useEffect(() => {
        console.log('catId', categoryId)
        console.log('cat', category)
        console.log('label', label)

    }, [category])

    const handleControlledInputChange = (event) => {
        /*
            When changing a state object or array, always create a new one
            and change state instead of modifying current one
        */
        const newCategory = Object.assign({}, category)          // Create copy
        newCategory[event.target.name] = event.target.value    // Modify copy
        setCategory(newCategory)                                 // Set copy as new state
    }
    
    const handleCategoryUpdate= () => {
        updateCategory({
            id: category.id,
            label: category.label
        })
        .then(() => history.push("/Categories"))
    }

    return (
        <form className="employeeForm">
            <h2 className="employeeForm__title">Edit Category</h2>
            <div key={category.id}>{label}</div>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="categoryLabel">Edit Label for Category: </label>
                    <input type="text" id="categoryLabel" name="label" required autoFocus className="form-control" 
                    placeholder="label" 
                    onChange={handleControlledInputChange}/>
                </div>
            </fieldset>
            <button type="submit"
                onClick={evt => {
                    evt.preventDefault() // Prevent browser from submitting the form
                    handleCategoryUpdate()
                }}
                className="btn btn-primary">
                Update Category
            </button><button onClick={()=> history.push('/Categories')}>Cancel</button>
        </form>
    )
}


