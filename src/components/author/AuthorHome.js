import userEvent from "@testing-library/user-event";
import React, { useEffect, useState } from "react";
import { getCurrentAuthor } from "./AuthorManager";

export const AuthorHome = () => {
    const [ author, setAuthor ] = useState([])

    const userId = localStorage.getItem('rare_user_id')
    useEffect(() => {
        getCurrentAuthor(userId).then((currAuthorData => setAuthor(currAuthorData)))
    }, [userId])

    return (
        <section>
        <h1>{author.first_name}</h1>
    </section>
    )
}