import React ,{Component}from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Grid, Row, Col, ListGroup,ListGroupItem,Nav,NavItem  } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
 
export default class App extends  Component {
 
  render() {
    const navigation = (
      <Nav bsStyle='pills' stacked  >
        <LinkContainer to='/departments'>
          <NavItem eventKey={1}  title='Departments'> Departments </NavItem>
        </LinkContainer>
        <LinkContainer to='/employees'>
          <NavItem eventKey={2}  title='Employees'> Employees </NavItem>
        </LinkContainer>
      </Nav>
    )

    return (
      <Grid className='app'>
        <Row >
          <Col  xs={6}  md={3} className='left'> 
          <h2>Menu</h2>
          <hr></hr>
             {navigation}
          </Col>
          <Col   xs={12} md={9} className='content'>
          <h2>Content</h2>
          <hr></hr>
            {this.props.children} 
          </Col>
        </Row>
      </Grid>
    )
  }
}

 
 