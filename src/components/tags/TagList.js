import React, { useEffect, useState } from "react";
import { getAllTags } from "./TagManager";
import { Tag } from "./Tag";
import { TagForm } from "./TagForm";

export const TagList = () => {
    const [tags, setTags] = useState([])
    const [viewForm, setViewForm] = useState(false) //Change the state onClick of button
    const [newTag, addNewTag] = useState()

    const getTagList = () => {
        getAllTags()
        .then((data) => setTags(data))
    }

    useEffect(() => {
        getTagList()   
    }, [])

    useEffect(() => {
        console.log('tag data', newTag)
    }, [tags])

    const toggleForm = () => {
        if (viewForm == true) {
            setViewForm(false)
        } else {
            setViewForm(true)
        }
    }

    const formJSX = 
    <div>
        <TagForm getTags={getTagList} changeView={toggleForm}/>
    </div>

    const noFormJSX = 
    <div>
        <button onClick={() => toggleForm()}>Add New Tag</button>
    </div>



    return (
        <>
        
            <h2 className="titleTags">All Tags</h2>
                <div>
                {
                    tags.map(tag => <Tag key={tag.id} singleTag={tag}/>) //Passing singleTag as a prop to Tag.js
                }
                </div>
                
                    {viewForm ? formJSX
                 
                    : noFormJSX}    
        </>
    )
}


