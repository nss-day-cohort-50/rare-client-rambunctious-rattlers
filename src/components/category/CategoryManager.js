export const getCategories = () => {
    return fetch("http://localhost:8088/categories")
        .then(res => res.json())
}

export const createCategory = employee => {
    return fetch("http://localhost:8088/categories", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(employee)
    })
        .then(getCategories)
}

export const deleteCategory = (categoryId, func) => {
    return fetch(`http://localhost:8088/categories/${categoryId}`, {
        method: "DELETE"
    })
        .then(func)
}