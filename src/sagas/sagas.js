
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import load from '../utils/load' 
import { REQUEST_DEPARTMENTS, receiveDepartments } from '../actions/DepartmentsAction'
import { REQUEST_EMPLOYEES, REMOVE_EMPLOYEES, receiveEmployees } from '../actions/EmployeesAction'
 
function* getDepartments(action) {
  const url = 'http://localhost:8000/Department'
  const departments = yield call(load, url) 
  yield put(receiveDepartments(departments))
}

function* getEmployees(action) {
  const url = 'http://localhost:8000/Employee'
  const employees = yield call(load, url) 
  yield put(receiveEmployees(employees))
}
 

export default function* mySaga() {
  yield takeEvery(REQUEST_DEPARTMENTS, getDepartments)
  yield takeEvery(REQUEST_EMPLOYEES, getEmployees)
}