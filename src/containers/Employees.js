import React, { PropTypes, Component } from 'react'
import { requestEmployees, removeEmployee } from '../actions/EmployeesAction'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {  Table } from 'react-bootstrap'
 
class Employees extends Component {
  
  componentDidMount() {
    this.props.requestEmployees() 
  }
  
  render() { 
    const { employees } =this.props
    const template = '' 
    if (employees.length > 0) {
      this.template = employees.map(function(employees, index) { 
        return  <tr key={index}>
                  <td>{index+1}</td>
                  <td>{employees.firstName}</td>
                  <td>{employees.lastName}</td>
                  <td>{employees.departmentId}</td>
                </tr>
      })
    }
    const table = (
    <Table striped bordered condensed hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Department Id</th>
          
        </tr>
      </thead>
      <tbody>
         {this.template}
      </tbody>
    </Table>
    )
    return (
    <div>
      <h3>Employees</h3>
      {table}  
    </div>
    )
  }
}

const mapStateToProps = state => ({ employees: state.employees })

const mapDispatchToProps = dispatch =>
  bindActionCreators({ requestEmployees,removeEmployee }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Employees)