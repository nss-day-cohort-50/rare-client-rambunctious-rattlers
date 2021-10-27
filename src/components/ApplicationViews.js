import React from "react"
import { Route } from "react-router-dom"
import { CategoryList } from "./category/CategoryList"

export const ApplicationViews = () => {
    return (
        <>
            <Route exact path='/Categories'>
                <CategoryList />
            </Route>
        </>
    )
    
}
