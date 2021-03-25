import { request } from './api.service'

const getCategories = () => request({ url: 'category', method: 'get' })
const deleteCategory = (id) => request({ url: `category/${id}`, method: 'delete', id })
const createCategory = (data) => request({ url: `category`, method: 'post', data })
const getCategory = (id) => request({ url: `category/${id}`, method: 'get' })
const updateCategory = (id, data) => request({ url: `category/${id}`, method: 'put', data }) 

export {
    getCategories,
    deleteCategory,
    createCategory,
    getCategory,
    updateCategory
}