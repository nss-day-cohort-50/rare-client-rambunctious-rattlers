import React from "react"
import { Route } from "react-router-dom"
import { CategoryList } from "./category/CategoryList"
import { CategoryForm } from "./category/CategoryForm"
import { UserPostList } from "./posts/UserPostList"
import { PostDetails } from "./posts/PostDetail"
import { PostList } from "./posts/PostList"
import { TagList } from "./tags/TagList"
import { CommentForm } from "./comments/CommentForm"

export const ApplicationViews = () => {
    return (
        <>
        <Route exact path='/Categories'>
            <CategoryList />
        </Route>
        <Route exact path='/Categories/:categoryId(\d+)'>
            <CategoryForm />
        </Route>
        <Route exact path="/userPosts">
                <UserPostList />
        </Route>
        <Route exact path="/posts">
                <PostList />
        </Route>
        <Route exact path="/posts/:postId(\d+)">
                <PostDetails />
        </Route>
        <Route exact path="/tags">
                <TagList />
        </Route>
        <Route exact path="/commentForm/:postId(\d+)">
                <CommentForm />
        </Route>
        </>
    )

}
