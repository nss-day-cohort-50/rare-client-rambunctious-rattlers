import React, { useEffect, useState } from "react";
import { getAllTags } from "./TagProvider";


export const TagList = () => {
    const [tags, setTags] = useState([])


    useEffect(
        () => {
            getAllTags()
            .then(
                (data) => {
                    setTags(data)
        })},
        []
    )
}
