export const REQUEST_DEPARTMENTS = 'REQUEST_DEPARTMENTS'
export const RECEIVE_DEPARTMENTS = 'RECEIVE_DEPARTMENTS'

export const requestDepartments = () => ({ type: REQUEST_DEPARTMENTS })
export const receiveDepartments = departments => ({ type: RECEIVE_DEPARTMENTS, departments })