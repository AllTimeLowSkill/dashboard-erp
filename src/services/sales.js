import { request } from './api.service'

const getSales = () => request({ url: 'sale', method: 'get' })
const getSale = (id) => request({ url: `sale/${id}`, method: 'get' })

export {
    getSales,
    getSale
}