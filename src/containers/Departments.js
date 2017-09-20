import React, { PropTypes, Component } from 'react'
import { requestDepartments } from '../actions/DepartmentsAction'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Table } from 'react-bootstrap'

class Departments extends Component {
  
  componentDidMount() {
    this.props.requestDepartments()
  } 
   
  render() {
    const { departments  } =this.props
    const template = '' 
  
    if (departments.length > 0) {
      this.template = departments.map(function(departments, index) { 
        return  <tr key={index}>
                  <td>{index+1}</td>
                  <td>{departments.name}</td> 
                </tr>
      })
    } 
    const table  = (
    <Table striped bordered condensed hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th> 
        </tr>
      </thead>
      <tbody>
         {this.template}
      </tbody>
    </Table>)

    return (
        <div>
      <h3>Departments</h3>
      {table}
    </div>
     
    )
  }
}

const mapStateToProps = state => ({ 
  departments: state.departments 
})
const mapDispatchToProps = dispatch =>
  bindActionCreators({ requestDepartments }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Departments)
 