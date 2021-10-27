import React from "react"
import { Route } from "react-router-dom"
import { CategoryList } from "./category/CategoryList"
import { PostList } from "./posts/PostList"

export const ApplicationViews = () => {
    return (
        <>
            <Route exact path='/Categories'>
                <CategoryList />
            </Route>
            <Route exact path="/posts">
                    <PostList />
            </Route>
        </>
    )
}
