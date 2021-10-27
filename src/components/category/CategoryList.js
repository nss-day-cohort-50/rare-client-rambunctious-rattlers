import React, { useState, useEffect } from "react"
import { Link, useHistory } from "react-router-dom"
import { getCategories } from "./categoryManager"

export const CategoryList = () => {
    const [ categories, setCategories ] = useState([])
    const history = useHistory()
    
    useEffect(() => {
        getCategories().then(categoriesData => setCategories(categoriesData))
    }, [])

    return (
        <div style={{ margin: "0rem 3rem"}}>
            <h1>categories</h1>

            <button onClick={() => history.push("/categories/create")}>
                Add category
            </button>

            <article className="categories">
                {
                    categories.map(category => {
                        return <section className="category" key={category.id}>
                            {category.label}
                        </section>
                    })
                }
            </article>
        </div>
    )
}
