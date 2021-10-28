import React from "react"
import { Route } from "react-router-dom"
import { CategoryList } from "./category/CategoryList"
import { PostDetails } from "./posts/PostDetail"
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
            <Route exact path="/posts/:postId(\d+)">
                    <PostDetails />
            </Route>
        </>
    )
}
