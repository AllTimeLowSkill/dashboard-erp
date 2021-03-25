import { request } from './api.service'

const getProducts = () => request({ url: 'product', method: 'get' })
const deleteProduct = (id) => request({ url: `product/${id}`, method: 'delete', id })
const createProduct = (data) => request({ url: `product`, method: 'post', data })
const getProduct = (id) => request({ url: `product/${id}`, method: 'get' })
const updateProduct = (id, data) => request({ url: `product/${id}`, method: 'put', data })

export {
    getProducts,
    deleteProduct,
    createProduct,
    getProduct,
    updateProduct
}