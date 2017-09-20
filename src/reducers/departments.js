import { RECEIVE_DEPARTMENTS } from '../actions/DepartmentsAction'
const initialState = []

export default (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_DEPARTMENTS:
      return action.departments
    default:
      return state
  }
}