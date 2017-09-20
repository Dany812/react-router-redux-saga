export const REQUEST_EMPLOYEES = 'REQUEST_EMPLOYEES'
export const RECEIVE_EMPLOYEES = 'RECEIVE_EMPLOYEES'
 
export const requestEmployees = () => ({ type: REQUEST_EMPLOYEES })
export const receiveEmployees = employees => ({ type: RECEIVE_EMPLOYEES, employees })

 