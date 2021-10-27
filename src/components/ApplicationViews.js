import React from "react"
import { Route } from "react-router-dom"
import { PostList } from "./posts/PostList"

export const ApplicationViews = () => {
    return <>
        <main style={{
            margin: "5rem 2rem",
            lineHeight: "1.75rem"
        }}>
        </main>
        <Route exact path="/posts">
                <PostList />
        </Route>
        <Route exact path="/tags">
                <TagList />
        </Route>
    </>
}
