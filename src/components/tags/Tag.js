import React from "react"

export const Tag = ({ singleTag }) => {


return (
        <>
            <div>
                <p>{singleTag.label}</p>
                <button>Edit Tag</button>
                <button>Delete Tag</button>
            </div>

        
        </>
    )
}