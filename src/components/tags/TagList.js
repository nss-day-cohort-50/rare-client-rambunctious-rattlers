import React, { useEffect, useState } from "react";
import { getAllTags } from "./TagProvider";
import { Tag } from "./Tag";

export const TagList = () => {
    const [tags, setTags] = useState([])


    useEffect(() => {
            getAllTags()
            .then((data) => setTags(data))
        },[])

    return (
        <>
        
            <h2 className="titleTags">All Tags</h2>
                {
                    tags.map(tag => <Tag key={tag.id} singleTag={tag}/>) //Passing singleTag as a prop to Tag.js
                }
            
        
        </>
    )
}


