import { RECEIVE_EMPLOYEES, REMOVE_EMPLOYEES } from '../actions/EmployeesAction'
const initialState = []

export default (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_EMPLOYEES: 
      return  action.employees
    default:
      return state
  }
}