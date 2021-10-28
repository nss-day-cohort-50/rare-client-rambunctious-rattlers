import React, { useState, useEffect, useRef } from "react"
import { Link, useHistory } from "react-router-dom"
import { CategoryForm } from "./CategoryForm"
import { deleteCategory, getCategories } from "./CategoryManager"
import { createCategory } from "./CategoryManager"


export const CategoryList = () => {
    const [ categories, setCategories ] = useState([])
    const [ viewForm, setViewForm ] = useState(false)
    const label = useRef(null)
    const history = useHistory()
    
    const getCategoryList = () => {
        getCategories().then(categoriesData => setCategories(categoriesData))
    }

    useEffect(() => {
        getCategoryList()
    }, [viewForm])

    useEffect(() => {
        console.log("catData:", categories)
    }, [categories])

    const toggleForm = () => {
        if (viewForm == true) {
            setViewForm(false)
        } else {
            setViewForm(true)
        }
    }

    const handleCategoryAdd = () => {
        createCategory({
            label: label.current.value,
        })
        .then(() => history.push("/Categories"))
        setViewForm(false)
    }
    
    const handleDelete = (id, func) => {
        deleteCategory(id, func)
    }
        
    return (

        <div style={{ margin: "0rem 3rem"}}>
            <h1>categories</h1>
            <article className="categories">
                {
                    categories.sort((a,b) => a.label.toLowerCase().localeCompare(b.label.toLowerCase())).map(category => {
                        return <section className="category" key={category.id}>
                            {category.label} <button  
                            onClick={() => handleDelete(category.id, getCategoryList)
                            }
                            className='delete-btn'>
                                delete</button> 
                            <button onClick={() => history.push(`/categories/${category.id}`)
                            }
                            className='delete-btn'>
                                edit</button> 
                        </section>
                    })
                }
            </article>
            { viewForm ?
                <button onClick={() => toggleForm()}>Cancel</button>
                :
                <button onClick={() => toggleForm()}>Add Category</button>
            }
            { viewForm ?
                <form className="employeeForm">
                <h2 className="employeeForm__title">New Category</h2>
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
            : ""
            }
        </div>
    )
}
