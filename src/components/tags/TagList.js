import React, { useEffect, useState } from "react";
import { getAllTags } from "./TagManager";
import { Tag } from "./Tag";

export const TagList = () => {
    const [tags, setTags] = useState([])

    const getTagList = () => {
        getAllTags()
        .then((data) => setTags(data), [])
    }

    useEffect(() => {
        getTagList()}, [])
        

    return (
        <>
        
            <h2 className="titleTags">All Tags</h2>
                {
                    tags.map(tag => <Tag key={tag.id} singleTag={tag}/>) //Passing singleTag as a prop to Tag.js
                }
            
        
        </>
    )
}


