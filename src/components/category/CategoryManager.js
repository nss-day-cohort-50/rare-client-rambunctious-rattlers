export const getCategories = () => {
    return fetch("http://localhost:8088/categories")
        .then(res => res.json())
}

export const createCategory = category => {
    return fetch("http://localhost:8088/categories", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(category)
    })
        .then(getCategories)
}

export const deleteCategory = (categoryId, func) => {
    return fetch(`http://localhost:8088/categories/${categoryId}`, {
        method: "DELETE"
    })
        .then(func)
}

export const getCategoryById = (id) => {
    return fetch(`http://localhost:8088/categories/${id}`)
        .then(res => res.json())
}

export const updateCategory = category => {
    return fetch(`http://localhost:8088/categories/${category.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(category)
    })
        .then()
}