import { request } from './api.service'

const getPlannings = () => request({ url: 'cost', method: 'get' })
const deletePlan = (id) => request({ url: `cost/${id}`, method: 'delete', id })
const createPlan = (data) => request({ url: 'cost', method: 'post', data })
const updatePlan = (id, data) => request({ url: `cost/${id}`, method: 'put', data })
const getPlan = (id) => request({ url: `cost/${id}`, method: 'get' })

export {
    getPlannings,
    getPlan,
    createPlan,
    deletePlan,
    updatePlan
}