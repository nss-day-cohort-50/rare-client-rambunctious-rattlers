import React, { useEffect, useState } from "react";
import { getAllTags } from "./TagProvider";


export const TagList = () => {
    const [tags, setTags] = useState([])

    const fetchTags = () => {
        getAllTags()
            .then((data) => setTags(data))
    }

    useEffect(() => {
            fetchTags()
        },[])

    return (
        <>
        
            <h2 className="titleTags">All Tags</h2>
            <div className="allTags">

                {
                    tags.map(tag => <Tag key={tag.id} singleTag={tag}/>) //Passing singleTag as a prop to Tag.js
                
                }
            </div>
        
        </>
    )
}


